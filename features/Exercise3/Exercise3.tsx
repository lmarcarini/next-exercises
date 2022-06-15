import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 10px auto;
`;

const Button = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
`;

type Props = {};

const Exercise3 = (props: Props) => {
  const handleClick = (index: number) => {
    alert(`You clicked on Button ${index}`);
  };
  return (
    <Container>
      {[1, 2, 3].map((i) => (
        <Button key={i} onClick={() => handleClick(i)}>
          Button {i}
        </Button>
      ))}
    </Container>
  );
};

export default Exercise3;
