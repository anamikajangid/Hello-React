// const Button = () => {
//   return <button>Ok</button>;
// };

// export default Button;

// get multiple button dynamically with names of button
//we pass a props here..
const Button = (props) => {
  console.log(props, typeof props);
  return (
    <div>
      <button style={{ backgroundColor: props.color }}> {props.name} </button>
      <p>we have {props.stok} in our Stock</p>
      <p>loction: {props.store.join(",")}</p>
    </div>
  );
};

export default Button;
