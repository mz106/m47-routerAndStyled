const Home = (props) => {
  console.log("props in Home: ", props);
  return (
    <div>
      <h1>Home Page</h1>
      <p>{props.coolWord}</p>
    </div>
  );
};

export default Home;
