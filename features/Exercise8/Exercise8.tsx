import styled from "styled-components";

type Props = {};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
  background-color: #e1f8dc;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const Exercise8 = (props: Props) => {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];
  return (
    <Container>
      {jokes.map((joke, i) => (
        <Card key={i}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Exercise8;
