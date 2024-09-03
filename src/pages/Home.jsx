import { Wrapper, Button } from "../componentsStyled";

const Home = () => {
  return (
    <Wrapper>
      <h1>Homepage</h1>
      <Button color="white" background="black">
        Button 1
      </Button>
      <Button color="white" background="red">
        Button 2
      </Button>
      <Button color="green" background="black">
        Button 3
      </Button>
    </Wrapper>
  );
};

export default Home;
