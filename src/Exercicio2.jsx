import { useEffect, useState } from 'react';

const COMENTARIOS_MOCK = [
  { id: 1, name: "Excelente explicação sobre o conteúdo!", email: "lucas.silva@gmail.com" },
  { id: 2, name: "Esse artigo me ajudou muito no trabalho.", email: "ana.clara@outlook.com.br" },
  { id: 3, name: "Fiquei com uma dúvida na parte da instalação.", email: "gabriel.santos@yahoo.com.br" },
  { id: 4, name: "Muito bom, parabéns pelo projeto!", email: "maria.eduarda@hotmail.com" },
  { id: 5, name: "Poderia trazer mais exemplos práticos?", email: "matheus.oliveira@gmail.com" }
];


function Exercicio2() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    let ativo = true;
    async function buscarComentarios() {
      try {
        const resposta = await fetch("https://typicode.com");
        const dados = await resposta.json();
        if (ativo) setComentarios(dados);
      } catch (error) {
        if (ativo) setComentarios(COMENTARIOS_MOCK);
      }
    }
    buscarComentarios();
    return () => { ativo = false; };
  }, []);

  return (
    <section id="center">
      <h1>Exercício 2</h1>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            <strong>{comentario.name}</strong> - {comentario.email}
          </li>
        ))}
      </ul>
      <br />
    </section>
  );
}
export default Exercicio2;
