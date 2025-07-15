import { useState } from 'react';
import { Box, Typography, TextField, Link } from '@mui/material';
import CustomButton from '../common/Button.tsx';
import Logo from '../assets/Logo.png';
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  return (
    <Box
      gap={4}
      width="400px"
      height="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="342px"
        height="100px"
        gap={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Logo} alt="FINEbank.IO" style={{ height: 32 }} />
        <Typography
          width="232px"
          height="28px"
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
        >
          Forgot Password?
        </Typography>
        <Typography
          width="100%"
          height="52px"
          fontSize="18px"
          fontWeight="400"
          lineHeight="26px"
          textAlign="center"
          color="#666666"
        >
          Enter your email address to get the password reset link.
        </Typography>
      </Box>
      <Box mt={2} width="100%" display="flex" flexDirection="column" gap={2}>
        <Typography width="100%" fontWeight={500} variant="body1">
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder="johndoe@email.com"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomButton
          text="Continue with Google"
          color="primary.main"
          textColor="white"
        />
        <Typography textAlign="center" fontSize={14} color="#878787">
          <Link
            href="/signUp"
            underline="hover"
            sx={{ textDecoration: 'none', color: '#878787' }}
          >
            Create an account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
