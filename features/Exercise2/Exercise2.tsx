import styled from "styled-components";

const Button = styled.button`
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

type Props = {};

const Exercise2 = (props: Props) => {
  const handleClick = () => {
    alert("Clicked!");
  };
  return <Button onClick={handleClick}>Click Me</Button>;
};

export default Exercise2;
