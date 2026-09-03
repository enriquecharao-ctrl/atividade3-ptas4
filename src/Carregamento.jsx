import { useState, useEffect } from "react";

function Carregamento() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null); // 1. Estado para armazenar o erro

  useEffect(() => {
    let ativo = true; 

    fetch("https://typicode.com")
      .then((response) => {
        // 2. Se a resposta HTTP falhar (como 404), força a ida para o catch
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (ativo) {
          setUsuarios(data.slice(0, 10)); // Garante até 10 itens
          setCarregando(false);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados:", error);
        if (ativo) {
          // 3. Captura a mensagem de erro (ex: falha de DNS ou HTTP 404)
          setErro(error.message || "Erro de rede / Falha na conexão");
          setCarregando(false);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <section id="center">
      <h1>Exercício 3</h1>

      {/* 4. Renderização Condicional Prioritária */}
      {erro ? (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Erro: {erro}</p>
      ) : carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Carregamento;
