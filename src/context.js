import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.paylaod
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts:[action.paylaod,
          ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Magesh BAbu S",
        email: "mag@gmail.com",
        contact: "941212124412"
      },
      {
        id: 2,
        name: "SUresh BAbu S",
        email: "suresh@gmail.com",
        contact: "9424412"
      },
      {
        id: 3,
        name: "RAmesh",
        email: "ramesh@gmail.com",
        contact: "941212124412"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
