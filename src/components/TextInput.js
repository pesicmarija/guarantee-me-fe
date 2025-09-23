import { InputAdornment, TextField, IconButton } from "@mui/material";
import {useState} from "react";

import { icons } from "../icons/icons";

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
  const IconComponent = icons[adornment];
  const PasswordIcon = showPassword ? icons['visibilityOff'] : icons['visibility'];

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
              {adornment && <IconComponent />}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {type === 'password' && showPasswordVisibilityToggle
                && <IconButton onClick={togglePassword}>
                  <PasswordIcon />
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