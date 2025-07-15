import React from 'react';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import NotificationsNoneIcon from '../assets/NotificationIcon.svg';
import SearchIcon from '../assets/Search.svg';

export default function HeaderBar({
  onToggleSidebar,
}: {
  onToggleSidebar?: () => void;
}) {
  const theme = useTheme();
  const isBelow1440 = useMediaQuery('(max-width:1439.95px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const formatted = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box
      sx={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        bgcolor: '#F4F5F7',
        zIndex: 1200,
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        {isBelow1440 && onToggleSidebar && (
          <IconButton onClick={onToggleSidebar}>
            <Typography fontSize={24}>☰</Typography>
          </IconButton>
        )}
        <Typography fontWeight={700} fontSize="24px">
          John David
        </Typography>
        {!isTablet && (
          <Box display="flex" alignItems="center" color="#9F9F9F">
            <Typography fontSize="24px" px={1}>
              »
            </Typography>
            <Typography fontSize="14px" mt="5px">
              {formatted}
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        sx={{ width: isTablet ? 'auto' : 416 }}
      >
        <Badge color="success" variant="dot">
          <img src={NotificationsNoneIcon} alt="Notif" height={24} />
        </Badge>
        {!isMobile && (
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 352,
              px: 1.5,
              borderRadius: 1,
            }}
          >
            <InputBase
              placeholder="Search here"
              sx={{ ml: 1, flex: 1, fontSize: 14 }}
            />
            <IconButton size="small">
              <img src={SearchIcon} alt="Search" />
            </IconButton>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
