import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Link,
  Divider,
} from '@mui/material';
import Logo from '../assets/Logo.png';
import EyeOn from '../assets/eyeon.svg';
import EyeOff from '../assets/eyeoff.png';
import CustomButton from '../common/Button.tsx';
import google from '../assets/google.png';
import { useNavigate } from 'react-router-dom';

type SignUpStates = {
  name: string;
  password: string;
  email: string;
};

export default function SignUp() {
  const [form, setForm] = useState<SignUpStates>({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForm = () => {
    console.log(form);
    navigate('/'); // handle signup form here
  };

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
          Create an account
        </Typography>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap={2}>
        <Typography width="100%" fontWeight={500} variant="body1">
          Name
        </Typography>
        <TextField
          fullWidth
          name="name"
          placeholder="John Doe"
          variant="outlined"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Typography width="100%" fontWeight={500} variant="body1">
          Email Address
        </Typography>
        <TextField
          fullWidth
          name="email"
          placeholder="johndoe@email.com"
          variant="outlined"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Typography width="100%" fontWeight={500} variant="body1">
          Password
        </Typography>
        <TextField
          fullWidth
          name="password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
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

        <Typography color="#4B5768">
          By continuing, you agree to our <Link>terms of service.</Link>
        </Typography>

        <CustomButton
          text="Sign Up"
          color="primary.main"
          onClick={handleForm}
        />
      </Box>

      <Box display="flex" alignItems="center" width="80%" gap={2}>
        <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
        <Typography variant="body2" color="#999DA3">
          or sign up with
        </Typography>
        <Divider sx={{ flexGrow: 1, borderColor: '#E0E0E0' }} />
      </Box>

      <CustomButton
        text="Continue with Google"
        icon={google}
        color="#E4E7EB"
        textColor="#4B5768"
        onClick={handleForm}
      />

      <Typography textAlign="center" fontSize={16} lineHeight="24px">
        Already have an account?{' '}
        <Link href="/login" underline="hover" color="primary.main">
          Sign in here
        </Link>
      </Typography>
    </Box>
  );
}
