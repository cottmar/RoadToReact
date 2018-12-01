import React, { Component } from 'react';
import './App.css';

const list  = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
]

function isSearched(searchTerm) {
  return function(item) {
    
  }
}

// You declare the App component, but it extends from another component. 
// With principle of inheritance. Used to pass over functionalities from one class to another class.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectId !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  };

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });

  }

  render() {
    return (
      <div className="App">
        <form>
          <input
           type="text"
           onChange={this.onSearchChange}
           />
        </form>
      {/* Concise Body that has an implicit return attached, no return statement is needed */}
      {this.state.list.filter(...).map(item => {
        return (
          //this helpsReact to identify added, changed, or removed items when the list changes.
          <div key={item.objectId}> 
          <span>
            <a href={item.url}> {item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
              <button
              // the following line you have to pass in item.objectid so the item can be identified 
                onClick={() => this.onDismiss(item.objectId)}
                type="button"
              >
                Dismiss
              </button>
          </span>
          </div>
          );
        })}
      </div>
    );
  }
}

export default App;
