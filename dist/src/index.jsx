import React from "react";
import { styled } from "reactjs-styled";

// Define a styled component
const StyledButton = styled("button")({
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
});

const App = () => {
  return (
    <div>
      <StyledButton onClick={() => alert("Button clicked!")}>
        Click me
      </StyledButton>
    </div>
  );
};

export default App;
