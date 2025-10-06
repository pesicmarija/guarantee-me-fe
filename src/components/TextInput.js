import { InputAdornment, TextField, IconButton } from "@mui/material";
import { useState } from "react";

import { Icon } from "../icons/Icon";

function TextInput({
   label,
   value,
   type,
   onChange,
   error,
   helperText,
   adornment,
   showPasswordVisibilityToggle,
   passwordVisibility,
   ...props
}) {
  const [showPassword, setShowPassword] = useState(passwordVisibility || false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <TextField
      label=''
      value={value}
      type={showPassword ? 'text' : type}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {adornment && <Icon name={adornment} />}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {type === 'password' && showPasswordVisibilityToggle
                && <IconButton onClick={togglePassword}>
                  <Icon name={showPassword ? 'visibilityOff' : 'visibility'} />
                </IconButton>
              }
            </InputAdornment>
          )
        },
      }}
      {...props}
    />
  );
}

export { TextInput };