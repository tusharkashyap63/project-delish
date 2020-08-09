import React, { createContext, Component } from 'react';
import items from './dishes';

const DishContext = createContext();

class DishProvider extends Component {
  state = {
    dishes: [],
    sortedDishes: [],
    topDishes: [],
    loading: true,
  };

  getData = () => {
    let dishes = this.formatData(items);
    console.log(dishes);
    let topDishes = dishes.filter((dish) => dish.topdish);
    this.setState({
      dishes,
      sortedDishes: dishes,
      topDishes,
      loading: false,
    });
  };

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let dish = { ...item.fields, id, images };
      return dish;
    });
    return tempItems;
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <DishContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </DishContext.Provider>
    );
  }
}

const DishConsumer = DishContext.Consumer;

export { DishContext, DishProvider, DishConsumer };
