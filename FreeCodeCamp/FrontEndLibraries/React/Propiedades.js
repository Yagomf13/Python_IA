class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Cambia el código debajo de esta línea */ }
              <Welcome name="Kaladin" />
              { /* Cambia el código encima de esta línea */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Cambia el código debajo de esta línea */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Cambia el código encima de esta línea */ }
          </div>
      );
    }
  };