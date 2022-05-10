import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`;

const Header = (props) => {
  return (
    <div>
      <Title>{props.children}</Title>
    </div>
  );
};

export default Header;
