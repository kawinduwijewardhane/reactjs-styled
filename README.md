<div style="text-align:center;">
![ReactJS Styled Logo](https://raw.githubusercontent.com/kawinduwijewardhane/reactjs-styled/main/logo.png)
</div>

# reactjs-styled

reactjs-styled is a powerful and versatile library for creating styled components in React applications. With reactjs-styled, you can easily define and apply custom styles to your components, making it simple to create beautiful and responsive user interfaces.

## Installation

You can install reactjs-styled via npm or yarn:

```bash
npm install reactjs-styled
```

or

```bash
yarn add reactjs-styled
```

## Usage

```javascript
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
```

## Output

```html
<button class="nqo39y3 fcjwgz0 yoib1l8 rhh9vh2 q2qrwr4 ia3egm1">
  Click me
</button>
```

## License

reactjs-styled is licensed under the MIT License. See the [LICENSE](license) file for details.

## Contributing

Contributions are welcome! If you'd like to contribute to reactjs-styled, please contact me [hello@kawinduwijewardhane.co.uk](mailto:hello@kawinduwijewardhane.co.uk).

## Feedback and Support

For feedback, bug reports, or support inquiries, please contact us at [hello@kawinduwijewardhane.co.uk](mailto:hello@kawinduwijewardhane.co.uk) or open an issue on [GitHub](https://github.com/kawinduwijewardhane/reactjs-styled/issues).

## GitHub Repository

[Link to GitHub Repository](https://github.com/kawinduwijewardhane/reactjs-styled)
