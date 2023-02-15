export const Title = (props) => {
  return <h1 style={{ color: props.color }}>{props.text}</h1>;
};
export const CenteredDiv = ({ textAlign, padding, children }) => {
  return (
    <div style={{ textAlign: textAlign, padding: padding }}>{children}</div>
  );
};

export const Form = ({ label, id, ...props }) => {
  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </form>
  );
};
export default function PropertiesClass() {
  return (
    <>
      <Title color="blue" text="Teste de título" />
      <Title color="red" text="Teste de título 2" />
      <Title color="green" text="Teste de título 3" />
      <Title color="#82df82" text="Cor Hexadecimal" />

      <CenteredDiv textAlign="center">
        <h2>Texto centralizado</h2>
      </CenteredDiv>

      <CenteredDiv textAlign="left">
        <h2>Texto à esquerda</h2>
      </CenteredDiv>

      <CenteredDiv textAlign="right">
        <h2>Texto à direita</h2>
      </CenteredDiv>

      <CenteredDiv padding="25px">
        <h2>Texto com padding</h2>
      </CenteredDiv>

      <Form label="Email" id="email" required />
      <Form label="Password" id="password" type="password" />
      <hr />
    </>
  );
}
