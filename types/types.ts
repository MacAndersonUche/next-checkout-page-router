export interface FetchedProduct {
  id: string;
  name: string;
  isAvailable: boolean;
  price: number;
  qty: number;
}

export interface State {
  products: FetchedProduct[];
  totalQty: number;
  totalPrice: number;
}

export type Action =
  | { type: "success"; results: FetchedProduct[] }
  | { type: "add_qty"; productId: number }
  | { type: "remove_qty"; productId: number };
