import { IconButton } from "@mui/material";
import styled from "styled-components";

import { Icon } from "../../../icons/Icon";

const StyledActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  
  button {
    padding: 0;
  }
`;

function ActionsCellRenderer({ actions }) {
  function handleActionClick(onClick) {
    return (...args) => {
      args[0]?.stopPropagation?.();
      onClick?.(...args);
    };
  }

  return (
    <StyledActions>
      {actions.map(({
        label,
        icon,
        key,
        onClick,
        ...props
      }) =>
        (<IconButton
          icon={icon}
          key={key || label}
          tooltip={label}
          onClick={handleActionClick(onClick)}
          {...props}
        >
         <Icon name={icon} />
        </IconButton>))
      }
    </StyledActions>
  );
}

export { ActionsCellRenderer };