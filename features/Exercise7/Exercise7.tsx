import styled from "styled-components";

const Input = styled.input`
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 500px;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #ef003c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px #a30136;
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px #a30136;
  }
`;

type Props = {};

const Exercise7 = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Hello ${formData.get("firstName")} ${formData.get("lastName")}!`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="firstName"
        placeholder="First name"
        required
      ></Input>
      <Input
        type="text"
        name="lastName"
        placeholder="Last name"
        required
      ></Input>
      <Button type="submit">GREET ME</Button>
    </Form>
  );
};

export default Exercise7;
