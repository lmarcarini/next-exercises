type Props = {};

const Exercise5 = (props: Props) => {
  const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Exercise5;
