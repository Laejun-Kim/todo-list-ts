import noTodo from "../../assets/notodoImg.jpg";
import styled from "styled-components";

const NoTodo = () => {
  return (
    <StNoTodoDiv>
      <p>표시할 내용이 없어요. 새로 등록해 볼까요?</p>
      <img src={noTodo} alt="todo 없는경우 표시 이미지" />
    </StNoTodoDiv>
  );
};

const StNoTodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 20px;
    width: 70%;
  }
`;

export default NoTodo;
