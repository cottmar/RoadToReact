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

// takes the search term and returns another function. The filter function takes a function as its input. 
function isSearched(searchTerm) {
  return function(items) {
    return items.title.toLowerCase().includes(searchTerm.toLowerCase());
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
    const { searchTerm, list } = this.state;
    return (
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
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectId)}
              className="button-inline"
              >
                Dismiss
              </Button>
            </span>
          </div>
        )}
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


export default App;
