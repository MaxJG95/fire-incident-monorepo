import type { IncidentListProps } from "../types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";

export default function IncidentList({ incidents }: IncidentListProps) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Reported Incidents
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Thumbnail</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.id}>
              <TableCell>
                {incident.image ? (
                  <Avatar
                    variant="rounded"
                    src={`http://localhost:4000${incident.image}`}
                    alt={incident.title}
                    sx={{ width: 56, height: 56 }}
                  />
                ) : (
                  <Avatar
                    variant="rounded"
                    sx={{ width: 56, height: 56, bgcolor: "grey.300" }}
                  />
                )}
              </TableCell>
              <TableCell>{incident.title}</TableCell>
              <TableCell>{incident.description}</TableCell>
              <TableCell>{incident.incident_type}</TableCell>
              <TableCell>{incident.location}</TableCell>
              <TableCell>
                {new Date(incident.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
