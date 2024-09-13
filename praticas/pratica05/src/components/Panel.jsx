import "./Panel.css"

function Panel(props) {
  return (
    <article>
      <h3>{props.text}</h3>
      <ul>
        {props.itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Panel;
