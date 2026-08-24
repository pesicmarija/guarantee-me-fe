import { Card } from "@mui/material";
import Grid from '@mui/material/Grid';


function Dashboard() {
  return(
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          Active warranties
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          Expiring soon
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          Expired
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <div>Expiring soon</div>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <div>Warranty chart</div>
      </Grid>

      <Grid size={12}>
        <div>recently added</div>
      </Grid>
    </Grid>
  );
}

export { Dashboard };