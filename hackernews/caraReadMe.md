# Classes

## Even though React embraces functional programming, for instance with immutable data structures,
classes are used to declare components.
 
***

A class has a constructor to make it instantiable. The constructor can take arguments to assign it to
the class instance. Additionally a class can define functions. Because the function is associated with
a class, it is called a method. Often it is referenced as a class method.

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

const cara = new Developer('Cara', 'Ottmar');
console.log(cara.getName());

## Unidirectional data flow

You trigger an action in your view with onClick(), a function, or class method modifies the internal component state and the render() method of the component runs again to update the view.

## Bindings

Class methods don't automatically bind 'this' to the class instance. 

## React Basics

- Use this.state and setState() to manage internal component state
- Pass functions or class methods to your element handler
- Use forms and events in React to add interactions
- Unidirectional data flow is an important concept in React
- Embrace controlled components
- Compose Components with children and reusable components 
- usage and implementation of ES6 class components and functional stateless components
- Approaches to style the components

## Lifecycle Methods

The mounting process has 4 lifecycle methods, invoked in the following order:

1. Constructor()
2. ComponentWillMount()
3. render()
4. ComponentDidMount()

componentWillMount(): the constructor is called first, then WillMount gets called before the render methods
componentDidMount(): called AFTER the render method. 

When props or state change, there are 5 lifecycle methods:

1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

### Unmounting Lifecycle

Only one lifecycle method: componentWillUnmount().

- constructor(props) - It is called when the component gets initialized. You can set an initial component state and bind class methods during that lifecycle method.

- componentWillMount() - It is called before the render() lifecycle method. That’s why it could be used to set internal component state, because it will not trigger a second rendering of the component. Generally it is recommended to use the constructor() to set the initial state.

- render() - This lifecycle method is mandatory and returns the elements as an output of the component. The method should be pure and therefore shouldn’t modify the component state. It gets an input as props and state and returns an element.

- componentDidMount() - It is called only once when the component mounted. That’s the perfect time to do an asynchronous request to fetch data from an API. The fetched data would get stored in the internal component state to display it in the render() lifecycle method.

- componentWillReceiveProps(nextProps) - The lifecycle method is called during an update lifecycle. As input you get the next props. You can diff the next props with the previous props, by using this.props, to apply a different behavior based on the diff. Additionally, you can
set state based on the next props.

- shouldComponentUpdate(nextProps, nextState) - It is always called when the component updates due to state or props changes. You will use it in mature React applications for performance optimizations. Depending on a boolean that you return from this lifecycle method, the component and all its children will render or will not render on an update lifecycle. You can prevent the render lifecycle method of a component.

- componentWillUpdate(nextProps, nextState) - The lifecycle method is immediately invoked before the render() method. You already have the next props and next state at your disposal. You can use the method as last opportunity to perform preparations before the render method gets executed. Note that you cannot trigger setState() anymore. If you want to compute state based on the next props, you have to use componentWillReceiveProps().

- componentDidUpdate(prevProps, prevState)- The lifecycle method is immediately invoked after the render() method. You can use it as opportunity to perform DOM operations or to perform further asynchronous requests.

- componentWillUnmount() - It is called before you destroy your component. You can use the lifecycle method to perform any clean up tasks.