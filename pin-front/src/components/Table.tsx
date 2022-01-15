import React, { useEffect, useState } from "react";
import { PageType } from "../types/PageType";
import { Pin } from "./Pin";

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

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.flatMap((page) =>
        page.photos.map((photo) => (
          <Pin
            key={photo.id}
            imageSrc={photo.src.large}
            backgroundColor={photo.avg_color}
          />
        ))
      )}
    </div>
  );
};
