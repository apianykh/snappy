import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItemImages from './ProductItemImagesComponent';
import ProductItemVideos from './ProductItemVideosComponent';

class ProductItem extends Component 
{
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <ProductItemImages media={this.props.item.media} />
        </div>
        <div className="content">
          <a className="header">{this.props.item.name}</a>
          <div className="meta">
            {this.props.item.vendor}
          </div>
        </div>
        <ProductItemVideos media={this.props.item.media} />
      </div>
    );
  }
}

export default ProductItem;