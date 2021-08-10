import { useMemo, useState } from "react";

export default function AppUseMemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToogle] = useState(false);
  const expensiveCalc = useMemo(
    // Callback
    () => `${count}--${Date.now()}`,

    //arreglo de dependencias, analogo a useEffect
    [count]
  );

  return (
    <div>
      <h1> UseRef </h1>
      <p>{expensiveCalc}</p>
      <p>{toggle ? "ON" : "OFF"}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setToogle(!toggle)}>Toggle</button>
    </div>
  );
}
