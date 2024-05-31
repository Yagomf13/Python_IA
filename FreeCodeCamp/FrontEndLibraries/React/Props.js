//! Introducción props
// Definición del componente funcional List
const List = (props) => {
    // Devuelve un párrafo que muestra las tareas unidas por comas
    return (
      <p>{props.tasks.join(", ")}</p>
    );
  };
  
  // Definición del componente de clase ToDo
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // Arreglos de tareas para hoy y mañana
      const todayTasks = ["walk dog", "workout"];
      const tomorrowTasks = ["do laundry", "buy groceries", "clean room"];
  
      // Renderización del componente ToDo
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          {/* Renderización del componente List para las tareas de hoy */}
          <List tasks={todayTasks}/>
          <h2>Tomorrow</h2>
          {/* Renderización del componente List para las tareas de mañana */}
          <List tasks={tomorrowTasks}/>
        </div>
      );
    }
  };
  
  // Renderización del componente ToDo en el elemento con id 'challenge-node'
  ReactDOM.render(<ToDo />, document.getElementById('challenge-node'));

//! Default prop
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
ShoppingCart.defaultProps = { items: 0 }