import React, { Component } from 'react';

class Menu extends Component 
{
  render() {
    return (
      <div className="ui secondary  menu">
        <a href="/" className="active item">
          Home
        </a>
        <a href="https://github.com/ArrDez/snappy" className="item" target="_blank" rel="noopener noreferrer">
          Repo
        </a>
        <div className="right menu">
          <a className="ui item">
            By Artem Pianykh
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;