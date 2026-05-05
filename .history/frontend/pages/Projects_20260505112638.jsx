import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const createProject = async () => {
    await API.post("/projects", { name });
    loadProjects();
  };

  const loadProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>

      <input
        placeholder="Project name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={createProject}>Create</button>

      {projects.map(p => (
        <div key={p._id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}