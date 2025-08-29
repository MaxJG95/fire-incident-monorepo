import { useEffect, useState } from "react";
import theme from "./assets/theme";
import IncidentForm from "./components/IncidentForm";
import IncidentList from "./components/IncidentList";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import type { Incident } from "./types";

function App() {
  const [incidents, setIncidents] = useState<Array<Incident>>([]);
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPage(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setPage(path);
  };

  const fetchIncidents = async () => {
    const res = await fetch("http://localhost:4000/api/incidents", { //to use the go backend replace the route "http://localhost:4001/incidents"
      headers: {
        "authorization": "Bearer mysecrettoken123"
      }
    });
    const data = await res.json();
    setIncidents(data);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  console.log(page);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar navigate={navigate} />
      <Container sx={{ mt: 4 }}>
        {page === "/" && (
          <>
            <IncidentForm onCreated={fetchIncidents} />
            <IncidentList incidents={incidents} />
          </>
        )}
        {page === "incidents" && <IncidentList incidents={incidents} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
