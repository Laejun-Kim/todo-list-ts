import { FormEvent, useRef } from "react";
import Todo from "../models/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../apis/jsonserver";
import BaseButton from "./ui/BaseButton";
import styled from "styled-components";
import Swal from "sweetalert2";

const NewTodo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const addMutate = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });

      Swal.fire({
        title: "Todo 추가 완료 😻",
        icon: "success",
      });
      //input 초기화
      if (titleRef.current && contentRef.current) {
        titleRef.current.value = "";
        contentRef.current.value = "";
      }
    },
  });

  const submitHndlr = (e: FormEvent) => {
    e.preventDefault();

    //input validation
    if (titleRef.current!.value && titleRef.current!.value.trim() === "") {
      Swal.fire({
        icon: "error",
        text: "제목에 공백만 입력하는건 곤란해요...",
        confirmButtonColor: "#0d60bf",
      });

      return;
    }
    addMutate.mutate(
      new Todo(titleRef.current!.value, contentRef.current!.value)
    );
  };

  return (
    <StInputForm onSubmit={submitHndlr}>
      <label htmlFor="title">제목을 입력</label>
      <input
        required
        type="text"
        id="title"
        ref={titleRef}
        maxLength={15}
        placeholder="제목을 입력하세요(15자 이내)"
      />
      <label htmlFor="content">내용을 입력</label>
      <input
        required
        type="text"
        id="content"
        ref={contentRef}
        placeholder="내용을 입력하세요(길이제한 없음)"
      />
      <BaseButton>신규등록</BaseButton>
    </StInputForm>
  );
};

const StInputForm = styled.form`
  background-color: #8db8e4;
  padding: 1rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 95%;
  height: auto;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 30%;
  }

  button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #184477;
    background-color: #184477;
    color: white;
    border-radius: 6px;
    margin-right: 1rem;
  }
  button:hover,
  button:active {
    background-color: #0d60bf;
    border-color: #0d60bf;
  }
`;

export default NewTodo;
