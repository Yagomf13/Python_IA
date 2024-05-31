import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes desde la biblioteca prop-types

// Definimos el componente funcional Items
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>; // Mostramos la cantidad de elementos en el carrito
};

// Definimos los PropTypes para el componente Items
Items.propTypes = {
  quantity: PropTypes.number.isRequired // La propiedad quantity es de tipo number y es requerida
};

// Establecemos un valor por defecto para quantity
Items.defaultProps = {
  quantity: 0
};

// Definimos el componente de clase ShoppingCart
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // En el método render del componente ShoppingCart, pasamos la propiedad quantity al componente Items
    return <Items quantity={10} />;
  }
};

// Renderizamos el componente ShoppingCart en el elemento con id 'challenge-node'
ReactDOM.render(<ShoppingCart />, document.getElementById('challenge-node'));
