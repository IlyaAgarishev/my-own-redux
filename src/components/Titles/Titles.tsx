const Titles = () => {
  return (
    <>
      <h1>my-own-redux</h1>
      <h3>
        Check console to see redux state,{" "}
        <span style={{ color: "green" }}>dispatch</span> and{" "}
        <span style={{ color: "red" }}>re</span>-
        <span style={{ color: "blue" }}>render</span> logger
      </h3>
      <h4>Then refresh the page to see how persist works</h4>
    </>
  );
};

export default Titles;
