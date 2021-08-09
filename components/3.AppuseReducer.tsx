/**
 *  Similiar a setState
 *  Muy similiar a patron redux, 
 *  En que 
 *  1. Despachamos acciones 
 *  2. la funcion reductora es la encargada de calcular el nuevo estado 
 *  3. Actualizando la UI
 */

import { useReducer } from "react";

interface AppState {
  count: number;
}
type AppAction = { type: "INCR" } | { type: "DECR" };
const initialState: AppState = {
  count: 0,
};

function AppReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "INCR":
      return {
        count: state.count + 1,
      };
    case "DECR":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default function AppuseReducer() {
  // 1. importamos el hook useReducer de react
  const [state, dispatch] = useReducer(
    // 2. Creamos una funcion reductora
    AppReducer,
    // 3. Pasamos el estado inicial del `state`
    initialState
  );

  /// 4. hacemos los respectivos llamados al dispatch

  return (
    <div>
      <h1> UseReducer </h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCR" })}>{"+Incr"}</button>
      <button onClick={() => dispatch({ type: "DECR" })}>{"-Decr"}</button>
    </div>
  );
}
