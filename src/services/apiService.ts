import axios, { AxiosResponse } from 'axios';
import { Order, Product, Customer } from '../modals/modals';

const baseUrl = import.meta.env.VITE_BASE_URL;

/**
 * Fetches all orders from the backend.
 * 
 * @returns {Promise<Order[]>} Returns a list of all orders.
 * @throws Will throw an error if the API request fails.
 */
export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response: AxiosResponse<Order[]> = await axios.get(`${baseUrl}/api/order`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}

/**
 * Fetches orders specific to a customer using their customerId.
 * 
 * @param {string} customerId - ID of the customer whose orders are to be fetched.
 * @returns {Promise<Order[]>} Returns a list of orders for the specified customer.
 * @throws Will throw an error if the API request fails.
 */
export const fetchCustomerOrders = async (customerId: string): Promise<Order[]> => {
  try {
    const response: AxiosResponse<Order[]> = await axios.get(`${baseUrl}/api/order/customer/${customerId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching orders for customer ${customerId}:`, error);
    throw error;
  }
}

/**
 * Fetches a specific order by its ID.
 * 
 * @param {string} orderId - ID of the order to be fetched.
 * @returns {Promise<Order>} Returns the order data.
 * @throws Will throw an error if the API request fails.
 */
export const fetchOrder = async (orderId: string): Promise<Order> => {
  try {
    const response: AxiosResponse<Order> = await axios.get(`${baseUrl}/api/order/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${orderId}:`, error);
    throw error;
  }
}

/**
 * Creates a new order.
 * 
 * @param {Order} data - The data for the new order.
 * @returns {Promise<Order>} Returns the created order data.
 * @throws Will throw an error if the API request fails.
 */
export const createOrder = async (data: Order): Promise<Order> => {
  try {
    const response: AxiosResponse<Order> = await axios.post(`${baseUrl}/api/order`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

/**
 * Updates a specific order by its ID.
 * 
 * @param {string} orderId - ID of the order to be updated.
 * @param {Order} data - The new data for the order.
 * @returns {Promise<Order>} Returns the updated order data.
 * @throws Will throw an error if the API request fails.
 */
export const updateOrder = async (orderId: string, data: Order): Promise<Order> => {
  try {
    const response: AxiosResponse<Order> = await axios.put(`${baseUrl}/api/order/${orderId}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating order ${orderId}:`, error);
    throw error;
  }
}

/**
 * Fetches all products from the backend.
 * 
 * @returns {Promise<Product[]>} Returns a list of all products.
 * @throws Will throw an error if the API request fails.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(`${baseUrl}/api/product`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetches a specific product by its ID.
 * 
 * @param {string} productId - ID of the product to be fetched.
 * @returns {Promise<Product>} Returns the product data.
 * @throws Will throw an error if the API request fails.
 */
export const fetchProduct = async (productId: string): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await axios.get(`${baseUrl}/api/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    throw error;
  }
}

/**
 * Creates a new product.
 * 
 * @param {Product} data - The data of the new product to be created.
 * @returns {Promise<Product>} Returns the created product data.
 * @throws Will throw an error if the API request fails.
 */
export const createProduct = async (data: Product): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await axios.post(`${baseUrl}/api/product`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

/**
 * Updates a specific product by its ID.
 * 
 * @param {string} productId - ID of the product to be updated.
 * @param {Product} data - The new data for the product.
 * @returns {Promise<Product>} Returns the updated product data.
 * @throws Will throw an error if the API request fails.
 */
export const updateProduct = async (productId: string, data: Product): Promise<Product> => {
  try {
    const response: AxiosResponse<Product> = await axios.put(`${baseUrl}/api/product/${productId}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating product ${productId}:`, error);
    throw error;
  }
}

/**
 * Deletes a specific product by its ID.
 * 
 * @param {string} productId - ID of the product to be deleted.
 * @throws Will throw an error if the API request fails.
 */
export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/api/product/${productId}`);
  } catch (error) {
    console.error(`Error deleting product ${productId}:`, error);
    throw error;
  }
}

/**
 * Deletes multiple products based on their IDs.
 * 
 * @param {object} data - Object containing an array of product IDs to be deleted.
 * @throws Will throw an error if the API request fails.
 */
export const deleteProducts = async (data: { productIds: string[] }): Promise<void> => {
  try {
    const response = await axios.post(`${baseUrl}/api/product/deleteMany`, {
      productIds: data.productIds
    });

    if (response.status < 200 || response.status >= 300) {
      console.log("Response status ", response);
      throw new Error('Failed to delete products.');
    }
  } catch (error) {
    console.error('Error deleting multiple products:', error);
    throw error;
  }
}

/**
 * Creates a new customer.
 * 
 * @param {Customer} data - The data of the new customer to be created.
 * @returns {Promise<Customer>} Returns the created customer data.
 * @throws Will throw an error if the API request fails.
 */
export const createCustomer = async (data: Customer): Promise<Customer> => {
  try {
    const response: AxiosResponse<Customer> = await axios.post(`${baseUrl}/api/customer`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

/**
 * Deletes a specific customer by its ID.
 * 
 * @param {string} customerId - ID of the customer to be deleted.
 * @throws Will throw an error if the API request fails.
 */
export const deleteCustomer = async (customerId: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/api/customer/${customerId}`);
  } catch (error) {
    console.error(`Error deleting customer ${customerId}:`, error);
    throw error;
  }
}