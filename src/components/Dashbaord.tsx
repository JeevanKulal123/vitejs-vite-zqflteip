import {
  Container,
  Grid,
  Box,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccountCard from '../common/AccountCard';
import GaugeChart from '../common/GaugeChart';
import UpcommingBills from '../common/UpcommingBills';
import RecentTransactions from '../common/RecentTransactions';

export default function Dashboard() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // ≥1200px
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // ≥900px

  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1199.95px)');
  if (isTablet) {
    console.log(isTablet);
  }
  return (
    <Container maxWidth="xl" sx={{ py: isTablet ? 1 : 2 }}>
      <Grid container spacing={isTablet ? 1 : 2}>
        {/* Top 3 Cards */}
        <Grid item xs={12} sm={6} md={isMdUp ? 4 : 6}>
          <Typography fontSize={22} gutterBottom color="#878787">
            Total Balance
          </Typography>
          <AccountCard />
        </Grid>
        <Grid item xs={12} sm={6} md={isMdUp ? 4 : 6}>
          <Typography fontSize={22} gutterBottom color="#878787">
            Goals
          </Typography>
          <GaugeChart />
        </Grid>
        <Grid item xs={12} sm={isMdUp ? 6 : 12} md={4}>
          <Box display="flex" justifyContent="space-between">
            <Typography fontSize={22} gutterBottom color="#878787">
              Upcoming Bill
            </Typography>
            {/* <Link
              component={RouterLink}
              to="/bills"
              underline="none"
              sx={{ fontSize: 14, color: '#525256' }}
            >
              View All &gt;
            </Link> */}
          </Box>
          <UpcommingBills />
        </Grid>

        {/* Bottom Section */}
        {isMdUp ? (
          <>
            <Grid item md={4}>
              <RecentTransactions />
            </Grid>
            <Grid item md={8}>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box
                  p={2}
                  bgcolor="white"
                  borderRadius={1}
                  boxShadow={1}
                  minHeight={isLgUp ? 298 : 250}
                >
                  <Typography fontWeight={600}>Statistics</Typography>
                </Box>
                <Box
                  p={2}
                  bgcolor="white"
                  borderRadius={1}
                  boxShadow={1}
                  minHeight={isLgUp ? 252 : 200}
                >
                  <Typography fontWeight={600}>Expenses Breakdown</Typography>
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <RecentTransactions />
            </Grid>
            <Grid item xs={12}>
              <Box
                p={2}
                bgcolor="white"
                borderRadius={1}
                boxShadow={1}
                minHeight={280}
              >
                <Typography fontWeight={600}>Statistics</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                p={2}
                bgcolor="white"
                borderRadius={1}
                boxShadow={1}
                minHeight={250}
              >
                <Typography fontWeight={600}>Expenses Breakdown</Typography>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}
