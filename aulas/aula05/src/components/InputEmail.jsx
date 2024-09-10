function InputEmail(props) {
  return (
    <>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.value}
        onChange={(e) => props.changeValue(e.target.value)}
        required
      />
    </>
  );
}

export default InputEmail;
