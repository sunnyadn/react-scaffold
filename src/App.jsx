import React from "react";
import PropTypes from "prop-types";

function App(props) {
  const { name } = props;
  return (
    <>
      <h1>
        Hello
        {name}
      </h1>
    </>
  );
}

App.defaultProps = {
  name: "",
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
