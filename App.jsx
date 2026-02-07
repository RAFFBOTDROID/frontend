import { useEffect, useState } from "react";
import { api } from "./api";

export default function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    api.get("/leads")
      .then(res => setLeads(res.data))
      .catch(() => alert("Erro ao carregar leads"));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚀 Creative Leads ULTRA PRO</h1>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Empresa</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead, i) => (
            <tr key={i}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.company}</td>
              <td>{lead.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
