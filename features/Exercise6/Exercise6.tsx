import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  padding: 10px;
  width: 100px;
`;

type Props = {};

const Exercise6 = (props: Props) => {
  const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <List>
      {list.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  );
};

export default Exercise6;
