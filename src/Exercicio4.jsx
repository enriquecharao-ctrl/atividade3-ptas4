import { useEffect, useState } from "react";

function Exercicio4() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    let ativo = true;
    async function buscarUsuario() {
      try {
        const resposta = await fetch('https://typicode.com');
        const dados = await resposta.json();
        if (ativo) setUsuario(dados);
      } catch (error) {
        if (ativo) setUsuario({ name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" });
      }
    }
    buscarUsuario();
    return () => { ativo = false; };
  }, []);

  if (usuario === null) {
    return (
      <section id="center">
        <h1>Exercício 4</h1>
        <p>Carregando...</p>
      </section>
    );
  }

  return (
    <section id="center">
      <h1>Exercício 4</h1>
      <h2>{usuario.name}</h2>
      <p>{usuario.email}</p>
      <br />
    </section>
  );
}
export default Exercicio4;
