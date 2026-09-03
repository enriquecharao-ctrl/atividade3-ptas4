import { useEffect, useState } from "react";
import ListaUsuarios from "./ListaUsuarios";

const USUARIOS_MOCK_5 = [
  { id: 1, name: "Lucas Silva", email: "lucas.silva@gmail.com" },
  { id: 2, name: "Ana Clara", email: "ana.clara@outlook.com.br" }
];

function Exercicio5() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    let ativo = true;
    async function buscarUsuarios() {
      try {
        const resposta = await fetch('https://typicode.com');
        const dados = await resposta.json();
        if (ativo) setUsuarios(dados.slice(0, 5));
      } catch (error) {
        if (ativo) setUsuarios(USUARIOS_MOCK_5);
      }
    }
    buscarUsuarios();
    return () => { ativo = false; };
  }, []);

  return (
    <section id="center">
      <h1>Exercício 5</h1>
      <ListaUsuarios usuarios={usuarios} />
    </section>
  );
}
export default Exercicio5;
