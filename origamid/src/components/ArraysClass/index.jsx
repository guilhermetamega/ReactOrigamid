export default function ArrayClass() {
  const products = ["Notebbok", "Tablet", "Smartphone"];
  const games = [
    { nome: "Uncharted", genero: "Ação" },
    { nome: "Candy Crush", genero: "Casual" },
    { nome: "Minecraft", genero: "Aventura" },
  ];
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {products.map((product, i) => (
          <li key={i}>{product}</li>
        ))}
      </ul>
      <table>
        <tr>
          <th>Nome</th>
          <th>Gênero</th>
        </tr>
        {games.map(({ nome, genero }) => (
          <tr>
            <td>{nome}</td>
            <td>{genero}</td>
          </tr>
        ))}
      </table>
      <hr />
    </>
  );
}
