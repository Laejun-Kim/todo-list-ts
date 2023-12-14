import React from "react";
import { getTodos } from "../apis/jsonserver";
import { useQuery } from "@tanstack/react-query";

const Todos = () => {
  const { data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  console.log("쿼리에서 찍힌거", data, error);

  if (error) {
    return <p>에러발생!! 계속 이러면 개발자에게 문의하세요</p>;
  }

  if (!data) {
    return <p>데이터 로딩중...</p>;
  }
  return (
    <ul>
      {data.map((el) => {
        return <li key={el.id}>{el.title}</li>;
      })}
    </ul>
  );
};

export default Todos;
