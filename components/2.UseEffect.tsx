import { useEffect, Component } from "react";

class CiclosDeVida extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    // Componente montado
    document.title = "La UI está oculta";
  }
  componentDidUpdate() {
    // Componente actualizado
    document.title = "UI mostrada";
  }
  componentWillUnmount() {
    // Se ejecuta antes de que el component se desmonte
    document.title = "UI destruida";
  }

  render() {
    return "UI";
  }
}

export default function AppUseEffect() {
  useEffect(
    /// Callback
    () => {
      console.log("Componente montado");

      return () => {
        console.log('Desmontado')
        // ejecutado justo antes de que el componente se desmonte, componentWillUnmount
        // ejemplo limpiar un timeout, cancelar un peticion
      };
    },
    // arreglo de dependencias
    // 1. [ ] produce una unica ejecucion cuando el componente es montado
    // 2. si se omite hara que Callback se ejecute en cada actualizacion del estado
    // 3. [ value ] ejecutará Callback la primera vez que se monte y cuando value cambie
    []
  );
  return <CiclosDeVida />;
  return (
    <div>
      <h1> useEffect </h1>
    </div>
  );
}
