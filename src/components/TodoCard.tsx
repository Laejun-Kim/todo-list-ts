import complete_stamp from "../assets/kokona_stamp.png";
import styled from "styled-components";
import Todo from "../models/todo";
import BaseButton from "./ui/BaseButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../apis/jsonserver";
import Swal from "sweetalert2";

interface TodoCardProps {
  item: Todo;
  isDone: boolean;
}
interface StCompProps {
  readonly $shouldDisplay: boolean;
}

const TodoCard = ({ item, isDone }: TodoCardProps) => {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const toggleMutate = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteBtnHndlr = (id: string | number) => {
    Swal.fire({
      title: "삭제할까요?",
      text: "삭제된 내용은 복구할 수 없습니다",
      //   icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c26994",
      cancelButtonColor: "#8db8e4",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "삭제완료",
          text: "성공적으로 삭제하였습니다",
          //   icon: "success",
          confirmButtonColor: "#8db8e4",
        });
        deleteMutate.mutate(id);
      }
    });
  };

  const toggleBtnHndlr = (id: string | number, isDone: boolean) => {
    toggleMutate.mutate({ id, isDone });
  };

  return (
    <StTodoCardDiv $shouldDisplay={item.isDone}>
      <StTitleH2>{item.title}</StTitleH2>
      <StStampImg
        src={complete_stamp}
        alt="도장이 어디갔죠?"
        $shouldDisplay={isDone}
      />

      <StContentDiv>
        <p>{item.content}</p>
      </StContentDiv>
      <StBtnDiv>
        <BaseButton onClick={deleteBtnHndlr.bind(null, item.id)}>
          삭제하기
        </BaseButton>
        <BaseButton onClick={toggleBtnHndlr.bind(null, item.id, item.isDone)}>
          {item.isDone ? "취소" : "완료"}
        </BaseButton>
      </StBtnDiv>
    </StTodoCardDiv>
  );
};

//styled-components
const StTodoCardDiv = styled.div<StCompProps>`
  position: relative;
  width: 380px;
  height: 300px;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  border: ${(props) =>
    props.$shouldDisplay ? "solid 2px #8db8e4" : "solid 2px #c26994"};
`;

const StTitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StContentDiv = styled.div`
  height: 180px;
  width: 350px;
  overflow-x: auto;
  p {
    line-height: 1.5rem;
  }
`;

const StBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 91%;
  position: absolute;
  bottom: 10px;
  button:first-of-type {
    font: inherit;
    padding: 1rem 2rem;
    border: 1px solid #c26994;
    background-color: #c26994;
    color: white;
    border-radius: 12px;
  }
  button:last-of-type {
    font: inherit;
    padding: 1rem 2rem;
    border: 1px solid #8db8e4;
    background-color: #8db8e4;
    color: white;
    border-radius: 12px;
  }
`;

const StStampImg = styled.img<StCompProps>`
  //styled-components에 커스텀 prop을 주려면 이게 필수다
  display: ${(props) => (props.$shouldDisplay ? "block" : "none")};
  height: 130px;
  position: absolute;
  right: 5px;
  top: 15px;
`;

export default TodoCard;
