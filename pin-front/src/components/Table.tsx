import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageType } from "../types/PageType";
import { Pin } from "./Pin";

async function api<T>(url: string, params: any): Promise<T> {
  const response = await fetch(url, params);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await (response.json() as Promise<T>);
}

export default () => {
  // TODO: uncomment after main navigation and security in place
  // const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState<PageType[]>([]);

  const loadData = async () => {
    const token = localStorage.getItem("token");

    // if (!token) {
    //   navigate('/');
    //   return null;
    // }

    const currentPage: PageType = await api(
      `http://localhost:5020/pins?pageNo=1`,
      {
        // headers: { 'Authorization': `Bearer ${token}` }
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
