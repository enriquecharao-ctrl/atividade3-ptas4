import { useEffect, useState } from 'react';

const USUARIOS_MOCK = [
  { id: 1, name: "Lucas Silva" },
  { id: 2, name: "Ana Clara" },
  { id: 3, name: "Gabriel Santos" },
  { id: 4, name: "Maria Eduarda" },
  { id: 5, name: "Matheus Oliveira" },
  { id: 6, name: "Júlia Ribeiro" },
  { id: 7, name: "Pedro Henrique" },
  { id: 8, name: "Beatriz Fernandes" },
  { id: 9, name: "João Vitor" },
  { id: 10, name: "Amanda Costa" }
];


function Exercicio3() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    async function buscarUsuarios() {
      try {
        const resposta = await fetch("https://typicode.com");
        const dados = await resposta.json();
        if (ativo) {
          setUsuarios(dados.slice(0, 10));
          setCarregando(false);
        }
      } catch (error) {
        if (ativo) {
          // Simula um pequeno atraso antes do carregamento terminar para ver o efeito
          setTimeout(() => {
            setUsuarios(USUARIOS_MOCK);
            setCarregando(false);
          }, 800);
        }
      }
    }
    buscarUsuarios();
    return () => { ativo = false; };
  }, []);

  return (
    <section id="center">
      <h1>Exercício 3</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.id} - {usuario.name}</li>
          ))}
        </ul>
      )}
      <br />
    </section>
  );
}
export default Exercicio3;
