import { useState } from "react";

interface Props {
  count: number;
  id?: string;
}

const FirstComponent = ({ count, id = "adlk" }: Props) => {
  const [test, settest] = useState(0);

  console.log("id", id);

  return (
    <div onClick={() => settest((prev) => prev + 1)}>
      {test} FirstComponent {count}
    </div>
  );
};

export default FirstComponent;
