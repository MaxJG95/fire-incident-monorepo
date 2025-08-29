export interface FormDataState {
  title: string;
  description: string;
  incident_type: string;
  location: string;
  image: File | null;
}

export interface Incident {
  id: string | number;
  title: string;
  description?: string;
  incident_type: string;
  location?: string;
  image?: string;
  createdAt: string;
}

export interface IncidentListProps {
  incidents: Incident[];
}

export interface IncidentFormProps {
  onCreated: () => void;
}
