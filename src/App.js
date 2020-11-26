import React, { Component } from 'react'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    home: {
      title: 'This is the Home component',
      text: 'To be done in the future'
    },
    about: {
      title: 'This is the About component',
      text: 'Not done yet sorry'
    },
    contact: {
      title: 'This is the Contact component',
      text: 'Not even close come in a month'
    },
  }

  render() {
    return (
      <>
        <Navbar />
        <hr />
        <Switch>
          <Route
            exact path='/'
            render={props =>
              <Home {...props} title={this.state.home.title} text={this.state.home.text} />
            }
          />
          <Route
            path='/about'
            render={props =>
              <About {...props} title={this.state.about.title} text={this.state.about.text} />
            }
          />
          <Route
            path='/contact'
            render={props =>
              <Contact {...props} title={this.state.contact.title} text={this.state.contact.text} />
            }
          />
        </Switch>
        <div>
          <hr />
          <h3>THIS WILL BE THE FOOTER</h3>
        </div>
      </>
    )
  }
}





export default App;
