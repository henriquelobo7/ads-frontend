function InputNome(props) {
    return (
      <>
        <label htmlFor="nome">Nome</label>
        <input type="text" {...props.register("nome", { required: 'Nome é obrigatório' })} />
        {props.error && <p>{props.error.message}</p>}
      </>
    );
  }
  
  export default InputNome;
  