import React, { FormEvent, useRef } from "react";
import Todo from "../models/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../apis/jsonserver";
import BaseButton from "./ui/BaseButton";

const NewTodo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const addMutate = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });

      //input 초기화
      if (titleRef.current && contentRef.current) {
        titleRef.current.value = "";
        contentRef.current.value = "";
      }
    },
  });

  const submitHndlr = (e: FormEvent) => {
    e.preventDefault();
    console.log("연결잘됨");
    addMutate.mutate(
      new Todo(titleRef.current!.value, contentRef.current!.value)
    );
  };

  return (
    <div>
      <form onSubmit={submitHndlr}>
        <label htmlFor="title">제목을 입력</label>
        <input required type="text" id="title" ref={titleRef} />
        <label htmlFor="content">내용을 입력</label>
        <input required type="text" id="content" ref={contentRef} />
        <BaseButton>신규등록</BaseButton>
      </form>
    </div>
  );
};

export default NewTodo;
