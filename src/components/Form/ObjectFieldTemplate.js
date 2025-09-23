import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

const StyledField = styled.div`
  margin-bottom: 20px;
  
  .MuiFormControl-root {
    margin-top: 10px;
  }
`;

function ObjectFieldTemplate(props) {
  return (
    <Wrapper>
      {props.description}
      {props.properties.map((element) => (
        <StyledField>{element.content}</StyledField>
      ))}
    </Wrapper>
  );
}

export { ObjectFieldTemplate };