import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Link,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@mui/material';
import Logo from '../assets/Logo.png';
import EyeOn from '../assets/eyeon.svg';
import EyeOff from '../assets/eyeoff.png';
import CustomButton from '../common/Button.tsx';
import google from '../assets/google.png';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    sessionStorage.setItem('token', 'mock-jwt-token'); // store token
    navigate('/'); // redirect to protected route
  };

  return (
    <Box
      gap={4}
      width="400px"
      height="auto"
      // bgcolor="background.paper"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box mb={4}>
        <img src={Logo} alt="FINEbank.IO" style={{ height: 32 }} />
      </Box>
      <Box width="100%" display="flex" flexDirection="column" gap={2}>
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

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography width="100%" fontWeight={500} variant="body1">
            Password
          </Typography>
          <Link
            href="/forgot-password"
            underline="hover"
            fontSize={12}
            width="162px"
            color="primary.main"
          >
            Forgot Password?
          </Link>
        </Box>

        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  <img
                    src={showPassword ? EyeOff : EyeOn}
                    alt="Toggle visibility"
                    width={20}
                    height={20}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
          label="Keep me signed in"
        />
        <CustomButton text="Login" color="primary.main" onClick={handleLogin} />
      </Box>
      <Box display="flex" alignItems="center" width="80%" gap={2}>
        <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
        <Typography variant="body2" color="#999DA3">
          or sign in with
        </Typography>
        <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
      </Box>
      <CustomButton
        text="Continue with Google"
        icon={google}
        color="#E4E7EB"
        textColor="#4B5768"
      />
      <Typography textAlign="center" fontSize={14} color="primary.main">
        <Link href="/signUp" underline="hover">
          Create an account
        </Link>
      </Typography>
    </Box>
  );
}
