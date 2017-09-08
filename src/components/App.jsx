import React, { Component } from 'react';

// Documentation https://visionmedia.github.io/superagent/
// GitHub -> https://github.com/visionmedia/superagent
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    // Nota: tener en cuenta el scope de las function, 
    // en este caso no afecta por la @function => 
    request
      .get('/api/users')
      .end((err, res) => {
        if(err) return console.log(`Algo salio mal ${err}`); 
        // console.log(res);
        // Con res.body traemos un object of json y no un text.
        // console.log(res.body);
        const users = res.body.users;
        this.setState({
          users: users
        });
      });
  }

  render() {
    // console.log(this.state.users);
    const users = this.state.users.map( (user, index) => {
      return <li key={ index }>{ user.nombre } { user.edad }</li>
    });
    return (
      <div>
        <h1>My aplication con react :D</h1>
        <ul>
          { users }
        </ul>
      </div>
    )
  }
}

// Tener en cuenta porque se export de esta manera
export default App;
