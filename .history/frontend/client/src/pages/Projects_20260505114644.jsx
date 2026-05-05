import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function Project() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${id}`);
    setTasks(res.data);
  };

  const createTask = async () => {
    await API.post("/tasks", { title, projectId: id });
    fetchTasks();
  };

  const updateStatus = async (taskId, status) => {
    await API.put(`/tasks/${taskId}`, { status });
    fetchTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>

      <input placeholder="Task title" onChange={e => setTitle(e.target.value)} />
      <button onClick={createTask}>Add Task</button>

      {tasks.map(t => (
        <div key={t._id}>
          {t.title} - {t.status}
          <button onClick={() => updateStatus(t._id, "done")}>Done</button>
        </div>
      ))}
    </div>
  );
}