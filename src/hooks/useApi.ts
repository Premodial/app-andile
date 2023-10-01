import { useQuery, useMutation } from 'react-query';
import * as apiService from '../services/apiService';
import { Order, Product, Customer } from '../modals/modals';

/**
 * ######################
 * ORDERS HOOKS
 * ######################
 */

/** Fetch all orders. */
export const useOrders = () => useQuery<Order[]>('orders', apiService.fetchOrders);

/** Fetch orders for a specific customer.
 * @param {string} customerId - The unique ID of the customer.
 */
export const useCustomerOrders = (customerId: string) => {
    return useQuery<Order[]>(['orders', customerId], () => fetchAndFilterUnpaidOrders(customerId));
}

const fetchAndFilterUnpaidOrders = async (customerId: string) => {
    const orders = await apiService.fetchCustomerOrders(customerId);
    return orders.filter(order => !order.paid);
}

/** Fetch a specific order.
 * @param {string} orderId - The unique ID of the order.
 */
export const useOrder = (orderId: string) => useQuery<Order>(['order', orderId], () => apiService.fetchOrder(orderId));

// Mutations for Order operations
export const useCreateOrder = () => useMutation<Order, unknown, Order>(apiService.createOrder);
export const useUpdateOrder = () => useMutation<Order, unknown, { orderId: string, payload: Order }>(
    ({ orderId, payload }) => apiService.updateOrder(orderId, payload)
);

/**
 * ######################
 * PRODUCTS HOOKS
 * ######################
 */

/** Fetch all products. */
export const useProducts = () => useQuery<Product[]>('products', apiService.fetchProducts);

/** Fetch a specific product.
 * @param {string} productId - The unique ID of the product.
 */
export const useProduct = (productId: string) => useQuery<Product>(['product', productId], () => apiService.fetchProduct(productId));

// Mutations for Product operations
export const useCreateProduct = () => useMutation<Product, unknown, Product>(apiService.createProduct);
export const useUpdateProduct = () => useMutation<Product, unknown, { productId: string, payload: Product }>(
    ({ productId, payload }) => apiService.updateProduct(productId, payload)
);
export const useDeleteProduct = () => useMutation<void, unknown, string>(apiService.deleteProduct);
export const useDeleteProducts = () => useMutation<void, unknown, { productIds: string[] }>(apiService.deleteProducts);

/**
 * ######################
 * CUSTOMERS HOOKS
 * ######################
 */

// Mutations for Customer operations
export const useCreateCustomer = () => useMutation<Customer, unknown, Customer>(apiService.createCustomer);
export const useDeleteCustomer = () => useMutation<void, unknown, string>(apiService.deleteCustomer);

