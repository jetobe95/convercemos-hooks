import { useMemo, useState } from "react";

export default function AppUseMemo() {
  const [count, setCount] = useState(0);
  const expensiveCalc = useMemo(
    // Callback
    () => {
      return `${count}--${Date.now()}`;
    },
    //arreglo de dependencias 
    [count]
  );

  return (
    <div>
      <h1> UseRef </h1>
      <p>{expensiveCalc}</p>
    </div>
  );
}
