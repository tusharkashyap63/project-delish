import React, { createContext, Component } from 'react';
import items from './dishes';

const DishContext = createContext();

class DishProvider extends Component {
  state = {
    dishes: [],
    filteredDishes: [],
    topDishes: [],
    loading: true,
  };

  getData = () => {
    let dishes = this.formatData(items);
    let topDishes = dishes.filter((dish) => dish.topdish);
    this.setState({
      dishes,
      filteredDishes: dishes,
      topDishes,
      loading: false,
    });
  };

  formatData = (items) => {
    let tempDishes = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      return { ...item.fields, id, images };
    });
    return tempDishes;
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <DishContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DishContext.Provider>
    );
  }
}

const DishConsumer = DishContext.Consumer;

export { DishContext, DishProvider, DishConsumer };
