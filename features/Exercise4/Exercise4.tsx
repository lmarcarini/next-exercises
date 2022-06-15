import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Display = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Button = styled.button`
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

type Props = {};

const Exercise4 = (props: Props) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <Container>
      <Display>Button has been clicked: {count} times</Display>
      <Button onClick={handleClick}>Click Me</Button>
    </Container>
  );
};

export default Exercise4;
