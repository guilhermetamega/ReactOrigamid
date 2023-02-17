export default function Produto({ data }) {
  return (
    <div>
      <img
        src={data.fotos[0].src}
        alt={data.fotos[0].titulo}
        style={{ borderRadius: "2rem", width: 400, marginTop: 30 }}
      />
      <h1>{data.nome}</h1>
      <h2 style={{ marginTop: -30, color: "#868686" }}>{data.preco}</h2>
    </div>
  );
}
