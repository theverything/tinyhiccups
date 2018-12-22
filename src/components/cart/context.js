import React from 'react';

const Context = React.createContext({
  items: {},
  add: () => {},
  remove: () => {},
  update: () => {},
});

export default class CartContext extends React.Component {
  constructor(props) {
    super(props);

    this.add = (item) => {
      this.setState(state => ({ 
        items: { 
          ...state.items,
          [item.id]: item,
        } 
      }));
    };

    this.update = (item) => {
      this.setState(state => ({ 
        items: { 
          ...state.items,
          [item.id]: {
            ...state.items[item.id],
            ...item,
          },
        } 
      }));
    };

    this.remove = (id) => {
      this.setState(state => {
        const {[id]: _, ...n } = state;
        return {
          items: n,
        };
      })
    };

    this.state = {
      items: {},
      add: this.add,
      remove: this.remove,
      update: this.update,
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

CartContext.Context = Context;