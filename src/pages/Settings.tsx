import { Box, Button } from '@mui/material';
import { useState } from 'react';
export default function Settings() {
  const [page, setPage] = useState('Account');
  const handleViewChange = () => {
    setPage((prev) => (prev == 'Account' ? 'Security' : 'Account'));
    console.log(page);
  };
  return (
    <Box
      bgcolor="white"
      width="100%"
      maxHeight="684px"
      height="684px"
      pt="24px"
      pb="48px"
      px="24px"
      gap="32px"
      display="flex"
      flexDirection="column"
    >
      <Box width="100%" height="56px" display="flex" gap={'32px'}>
        <Box
          width="88px"
          height="56px"
          textAlign="center"
          fontSize="16px"
          alignContent="center"
          sx={{ borderBottom: page === 'Account' ? '1px solid green' : 'none' }}
        >
          <Button
            variant="text"
            sx={{ fontWeight: 600, fontFamily: 'Inter' }}
            onClick={handleViewChange}
          >
            Account
          </Button>
        </Box>
        <Box
          width="88px"
          height="56px"
          textAlign="center"
          fontSize="16px"
          alignContent="center"
          sx={{
            borderBottom: page === 'Security' ? '1px solid green' : 'none',
          }}
        >
          <Button
            variant="text"
            sx={{ fontWeight: 600, fontFamily: 'Inter' }}
            onClick={handleViewChange}
          >
            Security
          </Button>
        </Box>
      </Box>
      <Box width="100%" height="488px" bgcolor="gray"></Box>
    </Box>
  );
}
