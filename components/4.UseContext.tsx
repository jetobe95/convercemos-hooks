/// Context: Compartir datos entre componentes sin necesidad de
// usar props

import { createContext, useContext } from "react";

const user = {
  name: "Pragma",
  location: "Medellín",
};

const UserContext = createContext(user);

export default function UseContextApp() {
  // 1. Debemos agregar un componente proveedor para que los componentes hijo puedan usar el context en cuestion
  return (
    <UserContext.Provider value={user}>
      <Bio />
    </UserContext.Provider>
  );
}

function Bio() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Me llamo: {user.name}</h1>
      <Subtitle />
    </div>
  );
}

function Subtitle() {
  const user = useContext(UserContext);
  return <h2>Estoy ubicado en: {user.location}</h2>;
}
