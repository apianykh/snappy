import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import Store from '../store';
import Menu from './MenuComponent';
import SearchForm from './SearchFormComponent';
import ProductsList from './ProductsListComponent';

class App extends Component 
{
  render() {
    return (
      <Provider store={Store}>
        <div id="app" className="ui container">
          <Menu />
          <h1 className="ui header">List</h1>
          <SearchForm />
          <div className="ui divider"></div>
          <ProductsList />
        </div>
      </Provider>
    );
  }
}

export default App;