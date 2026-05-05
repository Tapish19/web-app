import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {projects.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}