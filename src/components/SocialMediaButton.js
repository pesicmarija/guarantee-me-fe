import {Button} from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  
`;

function SocialMediaButton() {
  return (
    <StyledButton color="secondary">
      Continue with Google
    </StyledButton>
  );
}

export { SocialMediaButton };