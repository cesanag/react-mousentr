import { useState } from "react";
import "./styles.css";

export default function App() {
  const [moveX, setMoveX] = useState();
  const [moveY, setMoveY] = useState();

  const random = Math.floor(Math.random() * 452);

  console.log(random);

  const randomPosition = () => {
    setMoveX(random);
    setMoveY(random);
  };

  return (
    <div className="App">
      <p
        className="element"
        style={{
          transform: `translate(${moveX}px, ${moveY}px)`
        }}
        onMouseEnter={() => randomPosition()}
      >
        This will move
      </p>
    </div>
  );
}
