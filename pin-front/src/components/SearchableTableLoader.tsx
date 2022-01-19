import React, { useEffect, useState } from "react";
import { PageType } from "../types/PageType";
import Table from "./Table";

async function api<T>(url: string, params: any): Promise<T> {
  const response = await fetch(url, params);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await (response.json() as Promise<T>);
}

export default (props: { token: string; searchQuery: string }) => {
  const [_, setIsAuth] = useState(false);
  const [data, setData] = useState<PageType[]>([]);
  const headers = { Authorization: `Bearer ${props.token}` };
  const baseUrl = "http://localhost:5020/pins";

  const getData = async (
    requestUrl: string,
    requestHeaders: { Authorization: string },
    requestParams: {
      pageNo: string;
      query?: string;
    }
  ): Promise<PageType> => {
    const params = Object.entries(requestParams)
      .map(([key, value]) =>
        value ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : ""
      )
      .join("&");

    return await api(`${requestUrl}?${params}`.toString(), {
      headers: requestHeaders,
    });
  };

  const loadDefaultData = async (pageNo: number) => {
    const currentPage = await getData(baseUrl, headers, {
      pageNo: pageNo.toString(),
    });

    setIsAuth(true);
    setData([...data, currentPage]);
  };

  const loadSearchData = async (query: string, pageNo: number) => {
    const currentPage = await getData(`${baseUrl}/search`, headers, {
      pageNo: pageNo.toString(),
      query: query,
    });

    setIsAuth(true);
    setData([currentPage]);
  };

  useEffect(() => {
    if (props.searchQuery) {
      loadSearchData(props.searchQuery, 1);
    } else {
      loadDefaultData(1);
    }
  }, [props.searchQuery]);

  return <Table data={data} />;
};
