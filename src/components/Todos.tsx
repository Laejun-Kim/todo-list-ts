import { getTodos } from "../apis/jsonserver";
import { useQuery } from "@tanstack/react-query";
import TodoCard from "./TodoCard";
import styled from "styled-components";

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

  const doneItems = data.filter((todo) => todo.isDone);

  const undoneItems = data.filter((todo) => !todo.isDone);

  const doneCount = doneItems.length;
  const undoneCount = undoneItems.length;
  const totalCount = doneCount + undoneCount;
  const progressRatio = (doneCount / totalCount).toFixed(2);

  return (
    <>
      {totalCount === 0 ? (
        <p>표시할 내용이 없어요. 할일을 추가해 볼까요?</p>
      ) : (
        <>
          <StCategoryName>진행도😼</StCategoryName>
          <StProgressBar value={progressRatio} />
          <StTodoWrapper>
            <StCategoryName>진행중인 ToDo!🤔</StCategoryName>
            {undoneItems.map((todo) => {
              return <TodoCard item={todo} isDone={todo.isDone} />;
            })}
          </StTodoWrapper>
          <StTodoWrapper>
            <StCategoryName>완료된 ToDo!🥳</StCategoryName>
            {doneItems.map((todo) => {
              return <TodoCard item={todo} isDone={todo.isDone} />;
            })}
          </StTodoWrapper>
        </>
      )}
    </>
  );
};

const StTodoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

const StProgressBar = styled.progress`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding: 5px;
  appearance: none;
  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: #0d60bf;
    border-radius: 10px;
  }
`;

const StCategoryName = styled.h2`
  width: 100%;
  font-size: x-large;
`;

export default Todos;
