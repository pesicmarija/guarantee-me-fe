import CustomForm from "@rjsf/core";
import validator from '@rjsf/validator-ajv8';
import styled from "styled-components";

import { ObjectFieldTemplate } from "./ObjectFieldTemplate";
import { TextWidget } from "./TextWidget";

const StyledForm = styled(CustomForm)`
  background-color: white;

  fieldset#root {
    border: none;
  }
`;

const customWidgets = {
  TextWidget,
  email: TextWidget,
  password: TextWidget,
};

function Form(props) {
  console.log(props);
  return (
    <StyledForm
      {...props}
      widgets={customWidgets}
      templates={{ ObjectFieldTemplate }}
      validator={validator}
      uiSchema={{
        ...props.uiSchema,
        'ui:submitButtonOptions': {
          ...props.uiSchema?.['ui:submitButtonOptions'],
          norender: true,
        },
      }}
    />
  );
}

export { Form };