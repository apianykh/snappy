
export const getProductsState = state => state.products;

export const getProductsList = state => 
 (getProductsState(state)) ? state.products.order : [];

 export const getProductById = (state, id) =>
  getProductsState(state) ? state.products.entries[id] : {};

export const listProducts = state => 
  getProductsList(state).map(id => getProductById(state, id));

export const productsIsLoading = state => state.products.isLoading;

export const listVendors = state => state.vendors.items;

export const getPromotion = state => state.promotion.item;