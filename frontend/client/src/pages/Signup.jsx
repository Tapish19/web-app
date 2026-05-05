import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const signup = async () => {
    await API.post("/auth/signup", form);
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      
      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option value="Member">Member</option>
        <option value="Admin">Admin</option>
      </select>

      <button onClick={signup}>Signup</button>
    </div>
  );
}