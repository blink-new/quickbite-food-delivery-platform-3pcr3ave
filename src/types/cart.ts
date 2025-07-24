export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
  restaurantName: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}