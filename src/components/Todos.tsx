import { getTodos } from "../apis/jsonserver";
import { useQuery } from "@tanstack/react-query";
import TodoCard from "./TodoCard";
import styled from "styled-components";
import NoTodo from "./ui/NoTodo";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { setTodos } from "../redux/modules/todosSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Todo from "../models/todo";

const Todos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  console.log("쿼리에서 찍힌거", data);
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch();
  const todos = useAppSelector((state) => state.todos);

  // if (error) {
  //   return <p>에러발생!! 계속 이러면 개발자에게 문의하세요</p>;
  // }

  if (isLoading) {
    return <p>데이터 로딩중...</p>;
  }

  if (data) {
    console.log(data);
    dispatch(setTodos(data));
    console.log("리덕스 todos", todos);
  }

  const doneItems = todos.filter((todo) => todo.isDone);

  const undoneItems = todos.filter((todo) => !todo.isDone);

  const doneCount = doneItems.length;
  const undoneCount = undoneItems.length;
  const totalCount = doneCount + undoneCount;
  const progressRatio = (doneCount / totalCount).toFixed(2);

  return (
    <>
      {totalCount === 0 ? (
        <StWrapperDiv>
          <NoTodo />
        </StWrapperDiv>
      ) : (
        <>
          <StCategoryName>진행도😼</StCategoryName>
          <StProgressBar value={progressRatio} />
          <StTodoWrapper>
            <StCategoryName>진행중인 ToDo!🤔</StCategoryName>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => {
                return (
                  <TodoCard key={todo.id} item={todo} isDone={todo.isDone} />
                );
              })}
          </StTodoWrapper>
          <StTodoWrapper>
            <StCategoryName>완료된 ToDo!🥳</StCategoryName>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => {
                return (
                  <TodoCard key={todo.id} item={todo} isDone={todo.isDone} />
                );
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
  margin: auto;
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

const StWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StCategoryName = styled.h2`
  width: 100%;
  font-size: x-large;
`;

export default Todos;
