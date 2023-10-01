/**
 * Represents a Product with an ID, name, description, and price.
 * @param id - The unique identifier for the product.
 * @param name - The name of the product.
 * @param description - A brief description of the product.
 * @param price - The price of the product.
 */

  export interface Order  {
    paid: boolean;
    customerId: string;
    products: string[];
    total: number;
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
  export interface Customer {
    id: string;
    name: string;
    email: string;
  }
  