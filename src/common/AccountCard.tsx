import {
  Box,
  Typography,
  Link,
  Divider,
  Avatar,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import CardLogo from '../assets/CardLogo.svg';
import arrow from '../assets/arrow.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const cards = [
  {
    amount: '$240,399',
    type: 'Credit Card',
    masked: '**** **** **** 2598',
    balance: '$25,000',
  },
  {
    amount: '$10,800',
    type: 'Savings Account',
    masked: '**** **** **** 1472',
    balance: '$10,800',
  },
  {
    amount: '$5,000',
    type: 'Debit Card',
    masked: '**** **** **** 3321',
    balance: '$5,000',
  },
];

export default function AccountCard() {
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');
  const [present, setPresent] = useState(0);

  const handlePrev = () => {
    setPresent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPresent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      width={isTablet ? '320px' : '352px'}
      height="232px"
      bgcolor="white"
      borderRadius="8px"
      px={isTablet ? 1.5 : 3}
      py={isTablet ? 1.25 : 2.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Header + Card Display */}
      <Box display="flex" flexDirection="column" gap={2}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={22} fontWeight={800} lineHeight="32px">
            {cards[present].amount}
          </Typography>
          <Link
            component={RouterLink}
            to="/balances"
            underline="none"
            sx={{
              fontSize: 14,
              lineHeight: '20px',
              color: '#525256',
            }}
          >
            All Accounts
          </Link>
        </Box>

        <Divider />

        {/* Card Content */}
        <Box
          height="96px"
          borderRadius="4px"
          bgcolor="#299D91"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
        >
          {/* Left Info */}
          <Box display="flex" flexDirection="column">
            <Typography color="#FFFFFFB2" fontSize={14} lineHeight="20px">
              Account Type
            </Typography>
            <Typography color="#FFFFFF" fontSize={16} lineHeight="24px">
              {cards[present].type}
            </Typography>
            <Typography color="#FFFFFFB2" fontSize={14} lineHeight="20px">
              {cards[present].masked}
            </Typography>
          </Box>

          {/* Right Logo and Amount */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={1}
          >
            <Avatar
              src={CardLogo}
              variant="rounded"
              sx={{ width: 48, height: 28 }}
            />
            <Box display="flex" alignItems="center" gap={1}>
              <Typography color="#FFFFFF" fontSize={16} lineHeight="24px">
                {cards[present].balance}
              </Typography>
              <Avatar
                src={arrow}
                variant="rounded"
                sx={{ width: 24, height: 24, bgcolor: '#fff' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer Pagination */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        {/* Prev */}
        <Box display="flex" alignItems="center" gap={0.5} onClick={handlePrev}>
          <IconButton size="small">
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <Typography fontSize={14} fontWeight={500} sx={{ color: '#525256' }}>
            Previous
          </Typography>
        </Box>

        {/* Dots */}
        <Box display="flex" gap={1}>
          {cards.map((_, i) => (
            <Box
              key={i}
              width={8}
              height={8}
              borderRadius="50%"
              bgcolor={i === present ? '#299D91' : '#ccc'}
            />
          ))}
        </Box>

        {/* Next */}
        <Box display="flex" alignItems="center" gap={0.5} onClick={handleNext}>
          <Typography fontSize={14} fontWeight={500} color="black">
            Next
          </Typography>
          <IconButton size="small">
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
