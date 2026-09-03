import { useEffect, useState } from 'react';

const POSTS_MOCK = [
  { id: 1, title: "Como aprender React do zero em 2026" },
  { id: 2, title: "Dicas para melhorar o foco nos estudos" },
  { id: 3, title: "As melhores praias para visitar no Brasil" },
  { id: 4, title: "Receita fácil de pão de queijo caseiro" },
  { id: 5, title: "Como organizar sua rotina de trabalho remoto" },
  { id: 6, title: "Principais tendências de tecnologia para este ano" },
  { id: 7, title: "Guia básico de CSS Grid e Flexbox" },
  { id: 8, title: "Vantagens de utilizar o Vite no desenvolvimento web" },
  { id: 9, title: "Como criar uma API simples com Node.js" },
  { id: 10, title: "O que é renderização condicional no React" }
];


function Exercicio1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ativo = true;
    async function buscarPosts() {
      try {
        const resposta = await fetch("https://typicode.com");
        const dados = await resposta.json();
        if (ativo) setPosts(dados.slice(0, 10));
      } catch (error) {
        if (ativo) setPosts(POSTS_MOCK); // Usa o backup se a rede falhar
      }
    }
    buscarPosts();
    return () => { ativo = false; };
  }, []);

  return (
    <section id="center">
      <h1>Exercício 1</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id} - {post.title}</li>
        ))}
      </ul>
      <br />
    </section>
  );
}
export default Exercicio1;
