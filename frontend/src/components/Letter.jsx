import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Letter() {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get("/mensaje").then((res) => setData(res.data));
  }, []);

  return (
    <section>
      <h1>{data.titulo}</h1>
      <p>{data.mensaje}</p>
    </section>
  );
}