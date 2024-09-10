function InputPassword(props) {
  return (
    <>
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={props.value}
        onChange={(e) => props.changeValue(e.target.value)}
        required
      />
    </>
  );
}

export default InputPassword;
