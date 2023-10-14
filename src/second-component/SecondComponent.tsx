import React, { useState } from "react";

interface Props {
  count: number;
}

const SecondComponent = ({ count }: Props) => {
  const [test, settest] = useState(0);

  return <div style={{ background: "red" }}>FirstComponent s{count}</div>;
};

export default SecondComponent;
