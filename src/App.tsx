import { useEffect, useState } from "react";
import "./App.css";
import FirstComponent from "./first-component/FirstComponent";
import io from "socket.io-client";

import { useQuery } from "react-query";
const socket = io("http://localhost:3000/");

function App() {
  const { data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/testing").then((res) => res.text())
  );

  console.log("data", data);

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    socket.emit("message", { id: 25 });
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const shouldShowFirstDiv = count <= 15;

  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.on("message", (message: string) => {
      console.log("recieving message", message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
      {shouldShowFirstDiv ? (
        <FirstComponent count={count} id="15" key={1} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
