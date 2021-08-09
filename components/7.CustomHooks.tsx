import { useState } from "react";

const useCustomHook = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { increment, decrement, count, reset };
};

export default function CustomHooks() {
  const { decrement, increment, count, reset } = useCustomHook();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decr </button>
      <button onClick={increment}>Incr</button>
      <button onClick={reset}>Limpiar</button>
    </div>
  );
}
