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

export default (props: { token: string }) => {
  const [_, setIsAuth] = useState(false);
  const [data, setData] = useState<PageType[]>([]);

  const loadData = async () => {
    const currentPage: PageType = await api(
      `http://localhost:5020/pins?pageNo=1`,
      {
        headers: { Authorization: `Bearer ${props.token}` },
      }
    );

    setIsAuth(true);
    setData([...data, currentPage]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <Table data={data} />;
};
