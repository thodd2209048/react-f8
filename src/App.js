import { useState } from "react";

const gifts = ["CPU i9", "RAM 32Gb", "RGB Keyboard"];
function App() {
  const [gift, setGift] = useState("Chua co phan thuong");
  const handleTake = () => {
    const i = Math.floor(Math.random() * gifts.length);
    setGift(gifts[i]);
  };
  return (
    <div className="App">
      <h2>{gift}</h2>
      <button onClick={handleTake}>Lay phan thuong</button>
    </div>
  );
}

export default App;
