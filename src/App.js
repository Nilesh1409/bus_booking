import "./styles.css";
import React from "react";

export default function App() {
  const [bus, setBus] = React.useState([{ name: "bus", seat_Count: "30" }]);
  const [busName, setBusName] = React.useState("");
  const [seat, setSeat] = React.useState(0);

  const handleClick = () => {
    let payload = {
      name: busName,
      seat_Count: seat
    };

    let data = [...bus];
    data.push(payload);
    setBus(data);
  };
  console.log(bus);

  return (
    <div>
      <leble>
        Bus :
        <input value={busName} onChange={(e) => setBusName(e.target.value)} />
      </leble>
      <leble>
        Seat :
        <input value={seat} onChange={(e) => setSeat(e.target.value)} />
      </leble>
      <button onClick={handleClick}>ADD</button>

      <br />

      <label>
        Name :
        <input />
      </label>
      <select>
        {bus.map((item, index) => {
          return <option key={index}> {item.name} </option>;
        })}
      </select>
      <label>
        Seat :
        <input />
      </label>
    </div>
  );
}
