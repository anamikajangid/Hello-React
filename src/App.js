import Button from "./Component/Button";

const Hello = () => {
  let batchName = "Unstopable F4-react";
  let styleObj = {
    color: "red",
    textAlign: "center",
  };
  return (
    <div className="section">
      <h1 style={styleObj}> Hello Anamika</h1>
      <p> Welcome to my Class - {batchName}</p>

      {/* <Button name="OK" color="blue" />
      <Button name="CANCEL" color="red" />
      <Button name="RESET" color="green" /> */}

      <Button
        name="OK"
        color="green" let 
        stok={10}
        store={["Reliacne", "Bigbasket", "TATA"]}
      />
    </div>
  );
};

export default Hello;
