import React, { useState } from "react";
import { FaGithub, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

import api from "../services/api";

export default function Home() {
  const [newRepo, setNewRepo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const response = await api.get(`/repos/${newRepo}`);
    const data = await response.data;

    console.log(data);
  }

  function handleInputChangee(e) {
    setNewRepo(e.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={24} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChangee}
        />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
