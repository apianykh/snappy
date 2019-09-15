import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listProducts, productsIsLoading, getPromotion } from '../store/selectors';
import { productsFetch } from '../store/actions/products';
import { promotionFetch } from '../store/actions/promotion';
import ProductsLoader from './ProductsLoaderComponent';
import ProductItem from './product/ProductItemComponent';
import ProductPromotion from './product/ProductPromotionComponent';

const mapStateToProps = state => {
  const products = listProducts(state);
  const promotion = getPromotion(state);
  const isLoading = productsIsLoading(state);
  return { products, promotion, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(productsFetch()),
    fetchPromotion: () => dispatch(promotionFetch()),
  };
};

class ProductsList extends Component 
{
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    fetchPromotion: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    promotion: PropTypes.object.isRequired,
  }

  render() {
    if(this.props.isLoading) {
      return (<ProductsLoader />);
    }
    
    if(this.props.products.length === 0) {
      return (
        <div className="ui icon message">
          <i className="binoculars icon" />
          <div className="content">
            <div className="header">
              No items to show
            </div>
          </div>
        </div>
      );
    }

    const products_list = this.props.products.map((item, i) => <ProductItem key={i} item={item} />);
    if(this.props.promotion.hide === false) {
      products_list.splice(this.props.promotion.order, 0, <ProductPromotion key={this.props.promotion._id} promotion={this.props.promotion} />);
    }

    return (
      <div className="ui container">
        <div className="ui three stackable cards">
          {products_list}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchPromotion();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);