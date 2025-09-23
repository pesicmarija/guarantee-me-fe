import {Button} from "@mui/material";
import {useRef} from 'react';
import {Link} from "react-router";
import styled from "styled-components";

import backgroundImg from '../../../assets/background.jpg';
import {Form} from "../../components/Form/Form";

const Background = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  transition: all 0.3s;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  padding: 20px;
  backdrop-filter: saturate(90%) blur(1px);

   &::before {
     content: "";
     position: absolute; inset: 0;
     background: rgba(0,0,0,0.35);
     backdrop-filter: saturate(90%) blur(1px);
   }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  flex: 1 1 0;
  align-items: center;
`;

const Card = styled.div`
  width: 40%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  padding: 20px 18px;
  border: 1px solid rgba(0,0,0,0.06);
`;

const Title = styled.h1`
  margin: 0 0 8px;
  text-align: center;
  font-size: 28px;
  line-height: 1.2;
`;

const FormContainer = styled.div`
  margin: auto;
  width: 70%;
  max-height: calc(100vh - 230px);
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
`;

function Register() {
  const formRef = useRef(null);
  const schema = {
    type: 'object',
    properties: {
      firstName: { type: 'string', title: 'First Name' },
      lastName: { type: 'string', title: 'Last Name' },
      username: { type: 'string', title: 'Username' },
      email: { type: 'string', title: 'Email', format: 'email' },
      password: { type: 'string', title: 'Password', minLength: 6 },
    },
  };

  const uiSchema = {
    firstName: { 'ui:placeholder': 'Enter your first name'},
    lastName: { 'ui:placeholder': 'Enter your last name' },
    username: { 'ui:placeholder': 'Choose a username' },
    email: { 'ui:placeholder': 'Enter your email address', 'ui:widget': 'email' },
    password: { 'ui:placeholder': 'Create a password', 'ui:widget': 'password' },
  };

  function registerHandler(e) {
    formRef.current?.onSubmit(e);
  }

  function onSubmit({ formData }) {
    console.log(formData);
  }

  return (
    <Background>
      <FormWrapper>
        <Card>
        <Title>Join GuaranteeMe</Title>
        <FormContainer>
          <Form ref={formRef} schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}/>
        </FormContainer>
          <Actions>
            <Button onClick={registerHandler} form="register-form" variant="contained">Create account</Button>
            <Link to="/login">Already have an account?</Link>
          </Actions>
        </Card>
      </FormWrapper>
    </Background>
  );
}

export {Register};