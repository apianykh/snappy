import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductPromotion extends Component 
{
  static propTypes = {
    promotion: PropTypes.object.isRequired
  }

  render() {
    if(this.props.promotion.hide) return null;

    return (
      <div className="ui card">
        <div className="content">
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="percent icon"></i>
              {this.props.promotion.text}
            </div>
            <div className="ui primary button">Apply</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPromotion;