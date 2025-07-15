import { Box, Typography } from '@mui/material';

interface ButtonProps {
  text: string;
  icon?: string;
  color?: string;
  textColor?: string;
  onClick?: () => void;
}

export default function CustomButton({
  text,
  icon,
  color = 'white',
  textColor = 'white',
  onClick,
}: ButtonProps) {
  return (
    <Box
      onClick={onClick}
      width="400px"
      height="48px"
      bgcolor={color}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{ cursor: 'pointer', borderRadius: 1 }}
    >
      {icon && <img src={icon} alt="icon" style={{ height: 24, width: 24 }} />}
      <Typography
        variant="button"
        fontWeight={500}
        color={textColor}
        fontSize="16px"
      >
        {text}
      </Typography>
    </Box>
  );
}
