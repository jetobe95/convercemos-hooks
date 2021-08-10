import { useEffect, Component, useState } from "react";

class CiclosDeVida extends Component<{}, { count: number }, {}> {
  
 
  componentDidMount() {
    // Componente montado
    console.log("La UI se muestra");
  }
  componentDidUpdate() {
    // Componente actualizado
    console.log("UI actualizada");
  }
  componentWillUnmount() {
    // Se ejecuta antes de que el component se desmonte
    console.log("UI destruida");
  }

  render() {
    return <h1>Hola mundo!</h1>;
  }
}

function CiclosDeVidaUseEffect() {
  useEffect(
    /// Callback
    () => {
      console.log("Componente montado");


      return () => {
        console.log("Desmontado");
        // ejecutado justo antes de que el componente se desmonte, componentWillUnmount
        // ejemplo limpiar un timeout, cancelar un peticion, etc
      };
    },
    // arreglo de dependencias
    // 1. [ ] produce una unica ejecucion cuando el componente es montado
    // 2. si se omite(undefined) hara que Callback se ejecute en cada actualizacion del estado
    // 3. [ value ] ejecutará Callback la primera vez que se monte y cuando value cambie
    []
  );


  // Lo mas interesante es que puedes tener varios useEffect en mismo componente
  useEffect(()=>{

  },[])
  return <h1>Hola mundo!</h1>;
}

export default function AppUseEffect() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <CiclosDeVidaUseEffect />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}
