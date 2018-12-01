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

## Higher Order Functions



