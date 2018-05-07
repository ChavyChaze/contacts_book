import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};
let fakeServerData = {
  user: {
    name: 'David',
    contacts:[
      {
        name: 'My favorites',
        persons:[
          {name: 'Beat It', number: 1345},
          {name: 'Cannelloni', number: 2313},
          {name: 'Rosa helikopter', number: 7000}
        ]
      },
      {
        name: 'Discover Weekly',
        persons: [
          {name: 'Rosa helikopter', number: 3245},
          {name: 'Le song', number: 7534},
          {name: 'Thunder', number: 8994}
        ]
      },
      {
        name: 'Another playlist',
        persons: [
          {name: 'The drum', number: 4674},
          {name: 'Rosa helikopter', number: 8953},
          {name: 'Monster', number: 4573}
        ]
      },
      {
        name: 'Playlist',
        persons: [
          {name: 'Believer', number: 6392},
          {name: 'Sanger', number: 3974},
          {name: 'Rosa helikopter', number: 8493}
        ]
      }
    ]
  }
};

class ContactCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:'40%', display: 'inline-block'}}>
        <h2>{this.props.contacts.length} contacts</h2>
      </div>
    );
  }
}

class NumbersCounter extends Component {
  render() {
    let allNumbers = this.props.contacts.reduce((persons, eachContact) => {
      return persons.concat(eachContact.persons);
    }, []);
    // let totalNumbers = 
    return (
      <div style={{...defaultStyle, width:'40%', display: 'inline-block'}}>
        <h2>{allNumbers.length} phone numbers</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img alt=""/>
        <input type="text"/>
      </div>
    );
  }
}

class Contacts extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img alt=""/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{...defaultStyle, 'fontSize': '54px'}}>
              {this.state.serverData.user.name}'s Address Book
            </h1>
            <ContactCounter contacts={this.state.serverData.user.contacts}/>
            <NumbersCounter contacts={this.state.serverData.user.contacts}/>
            <Filter/>
            <Contacts/>
            <Contacts/>
            <Contacts/>
            <Contacts/>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
