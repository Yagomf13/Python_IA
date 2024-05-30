// Definición del componente Fruits
class Fruits extends React.Component {
    constructor(props) {
      // Llamada al constructor de la clase base React.Component
      super(props);
    }
  
    // Método render para definir lo que se va a mostrar en la interfaz
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Inserta componentes hijos aquí */}
          <NonCitrus /> {/* Componente que representa frutas no cítricas */}
          <Citrus /> {/* Componente que representa frutas cítricas */}
        </div>
      );
    }
  };
  
  // Definición del componente TypesOfFood
  class TypesOfFood extends React.Component {
    constructor(props) {
      // Llamada al constructor de la clase base React.Component
      super(props);
    }
  
    // Método render para definir lo que se va a mostrar en la interfaz
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Inserta el componente Fruits aquí */}
          <Fruits /> {/* Componente que representa el conjunto de frutas */}
          <Vegetables /> {/* Componente que representa vegetales */}
        </div>
      );
    }
  };
  