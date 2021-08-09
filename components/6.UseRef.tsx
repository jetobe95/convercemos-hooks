import { LegacyRef, useEffect, useRef } from "react";

/**
 *
 * Mantiene un valor el que mutable cuando ocurre un render
 * se usa comumente para guardar referencias a elementos
 */

export default function AppUseRef() {
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    btnRef.current?.click();
  }, []);
  return (
    <div>
      <h1> UseRef </h1>
      <button ref={btnRef} onClick={() => console.log("Click")}>
        Click
      </button>
    </div>
  );
}
