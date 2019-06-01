import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} from "styled-components";
import theme from "./theme";

// #3 GlobalStyle
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

// #5 Extra Attributes and Mixins
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard}
`;

//#6 Theming
const Card = styled.div`
  background-color: ${props => props.theme.mainColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

// #7 Nesting

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Button>success</Button>
          <Button danger rotationTime={1}>
            danger
          </Button>
          <Anchor as="a" href="https://google.com">
            Go to Google
          </Anchor>
          <div>
            <Input placeholder="hello" />
          </div>
          <div>
            <Form />
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

// #2 Hello World with Styled Components
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props =>
    props.danger ? props.theme.dangerColor : props.theme.successColor};
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;

//#4 Animations
const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
