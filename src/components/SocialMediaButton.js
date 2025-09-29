import {Button, Divider} from "@mui/material";
import styled from "styled-components";

import logo from '../../assets/google-logo.png';

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    box-shadow: 5px 5px 10px lightgrey;
    border-radius: 15px;
    color: black;
    padding: 10px;
  }
`;

const Logo = styled.img`
  max-height: 20px;
`;

const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    margin: 0 10px;
  }
`;

function SocialMediaButton(props) {
  return (
    <StyledButton color="secondary" {...props}>
      <Logo src={`${logo}`} />
      <StyledDivider variant="middle" orientation="vertical" flexItem />
      Continue with Google
    </StyledButton>
  );
}

export { SocialMediaButton };