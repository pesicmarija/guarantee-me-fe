import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const icon = {
  mail: MailOutlineIcon,
  lock: LockOutlineIcon,
  person: AccountCircleOutlinedIcon,
  visibility: VisibilityOutlinedIcon,
  visibilityOff: VisibilityOffOutlinedIcon,
  edit: CreateOutlinedIcon,
  delete: DeleteOutlineOutlinedIcon,
  image: ImageOutlinedIcon,
  locked: LockOutlinedIcon
};

function Icon({ name, size = 'small' }) {
  const IconComponent = icon[name];
  return IconComponent ? <IconComponent fontSize={size} /> : null;
}

export { Icon };