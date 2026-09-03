function ListaUsuarios({ usuarios }) {
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.id} - {usuario.name} ({usuario.email})
        </li>
      ))}
    </ul>
  );
}
export default ListaUsuarios;
