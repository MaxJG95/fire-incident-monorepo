import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar({
  navigate,
}: {
  navigate: (p: "/" | "incidents") => void;
}) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Fire Incident Portal
        </Typography>
        <Button onClick={() => navigate("/")} color="inherit">
          Home
        </Button>
        <Button onClick={() => navigate("incidents")} color="inherit">
          Incidents
        </Button>
      </Toolbar>
    </AppBar>
  );
}
