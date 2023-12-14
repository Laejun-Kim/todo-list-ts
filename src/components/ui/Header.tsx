import styled from "styled-components";
import headerImg from "../../assets/할일이태산.jpg";
const Header = () => {
  return (
    <header>
      <StHeaderDiv>
        <StH1>ToDo-LIST made with React+TypeScript</StH1>
        <img
          src={headerImg}
          alt="이 글자가 보이면 페이지 제작자에게 제보해주세요!"
        />
      </StHeaderDiv>
    </header>
  );
};

const StHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: x-large;
  font-weight: 600;
  color: #184477;
`;
const StH1 = styled.h1`
  font-size: 45px;
`;

export default Header;
