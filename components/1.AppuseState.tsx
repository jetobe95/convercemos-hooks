import { useState } from "react";

export default function AppuseState() {

  const [
    showUi, // valor del estado
    setShowUi // funcion que cambia el estado
  ] = useState<boolean>(
    /// 1. estado inicial
    false
  );

  return (
    <div>
      {showUi ? (
        <div>
          <h1>UseState Hook</h1>
          <button onClick={() => setShowUi(false)}>Ocultar</button>
        </div>
      ) : (
        <button onClick={() => setShowUi(true)}>Mostrar</button>
      )}
    </div>
  );
}
