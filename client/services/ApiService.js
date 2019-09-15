import Http from './HttpService';

class ApiService
{
  async fetchProducts(params) 
  {
    return await Http.get('/products', { params });
  }

  async fetchVendors() 
  {
    return await Http.get('/vendors');
  }

  async fetchPromotion() 
  {
    return await Http.get('/promotion');
  }
}

export default new ApiService();