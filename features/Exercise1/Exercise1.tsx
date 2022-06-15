import styled from "styled-components";

const Square = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

type Props = {};

const Exercise1 = (props: Props) => {
  return <Square color="#fdc803">Hello, World!</Square>;
};

export default Exercise1;
