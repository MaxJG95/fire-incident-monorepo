import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import type { IncidentFormProps } from "../types";

export default function IncidentForm({ onCreated }: IncidentFormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    incident_type: "fire",
    location: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => v && data.append(k, v as never));

    await fetch("http://localhost:4000/api/incidents", { //to use the go backend replace the route "http://localhost:4001/incidents"
      method: "POST",
      body: data,
    })

    setForm({
      title: "",
      description: "",
      incident_type: "fire",
      location: "",
      image: null,
    });
    onCreated();
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Report New Incident
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            select
            label="Incident Type"
            name="incident_type"
            value={form.incident_type}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="fire">🔥 Fire</MenuItem>
            <MenuItem value="medical">🩺 Medical</MenuItem>
            <MenuItem value="rescue">🚒 Rescue</MenuItem>
          </TextField>

          <TextField
            label="Location"
            name="location"
            value={form.location}
            onChange={handleChange}
            fullWidth
          />

          <Button variant="outlined" component="label">
            {form.image ? form.image.name : "Upload Image"}
            <input type="file" name="image" hidden onChange={handleChange} />
          </Button>

          <Button type="submit" variant="contained" color="error" fullWidth>
            Create Incident
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
