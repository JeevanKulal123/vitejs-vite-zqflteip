import { Box, Typography } from '@mui/material';

export default function NavItem({
  label,
  image,
  selected = false,
  onClick,
}: {
  label: string;
  image?: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1.2,
        borderRadius: 1,
        cursor: 'pointer',
        bgcolor: selected ? '#299D91' : 'transparent',
        color: selected ? 'white' : '#D0D0D0',
        transition: 'all 0.3s',
        '&:hover': {
          bgcolor: selected ? '#299D91' : '#1e1e1e',
        },
      }}
    >
      {image && <img src={image} alt={label} width={24} height={24} />}
      <Typography fontWeight={600} fontSize="16px" noWrap>
        {label}
      </Typography>
    </Box>
  );
}
