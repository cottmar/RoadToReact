import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
console.log(url);

// const list  = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan',
//     num_comments: 3,
//     points: 4,
//     objectId: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectId: 1,
//   },
// ]


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
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
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
      <div className="page">
        <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => {
      // eslint-disable-next-line no-unused-expressions
      return (
      <form>
        {children} <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
      );
  }


const Table = ({ list, pattern, onDismiss }) => {
  return (
      <div className="table">
        {list.filter(isSearched(pattern)).map(item => 
          <div key={item.objectId} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>{item.author}</span>
            <span style={smallColumn}>{item.num_comments}</span>
            <span style={smallColumn}>{item.points}</span>
            <span style={smallColumn}>
              <Button onClick={() => onDismiss(item.objectId)}
              className="button-inline"
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

const Button = (props) => {
    const {
      onClick,
      className= '',
      children,
    } = props;

    return (
      <button   
        onClick = {onClick}
        className = {className}
        type="button"
      >
        {children}
      </button>
    )
  }

  const largeColumn = {
    width: '40%',
  };

  const midColumn = {
    width: '30%',
  }

  const smallColumn = {
    width: '10%',
  };


export default App;
