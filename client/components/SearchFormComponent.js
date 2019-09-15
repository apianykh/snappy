import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productsFetch } from '../store/actions/products';
import { vendorsFetch } from '../store/actions/vendors';
import { listVendors } from '../store/selectors';

const mapStateToProps = state => {
  const vendors_list = listVendors(state);
  return { vendors_list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVendors: () => dispatch(vendorsFetch()),
    fetchProducts: (payload = {}) => dispatch(productsFetch(payload)),
  };
};

class SearchForm extends Component 
{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
  }

  static propTypes = {
    fetchVendors: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    vendors_list: PropTypes.array.isRequired,
  }

  state = {
    name: '',
    vendor: ''
  };

  render() {
    return (
      <div className="ui small form">
        <form ref={this.formRef}>
          <div className="two fields">
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
            </div>
            <div className="field">
              <label>Vendor</label>
              <select name="vendor"  onChange={this.handleChange} className="ui dropdown" placeholder="vendor">
                <option value="">None</option>
                {this.props.vendors_list.map((el, i) => <option key={i} value={el}>{el}</option>)}
              </select>
            </div>
          </div>
          <button className="ui right floated primary labeled icon button" onClick={this.handleSubmit}>
            <i className="search icon"></i>
            Search
          </button>
          <button className="ui right floated button" onClick={this.handleClear}>
            Reset
          </button>
          <div style={{clear: 'both'}} ></div>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchVendors();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let payload = Object.keys(this.state).reduce((acc, prop) => {
      if(this.state[prop] === '') return acc;
      acc[prop] = this.state[prop];
      return acc;
    }, {});
    this.props.fetchProducts(payload);
  }

  handleClear(e) {
    e.preventDefault();
    this.formRef.current.reset();
    this.setState({
      name: '',
      vendor: ''
    });
    this.props.fetchProducts();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);