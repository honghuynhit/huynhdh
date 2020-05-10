import React from 'react';
import './App.css';

import axios from 'axios';

export default class App extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://huynhdh.herokuapp.com/api/v1/query/tourist/place/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
