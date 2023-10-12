type IRating = {
  count: number;
  rate: number;
};

export type IProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IRating;
  title: string;
};

export type CartItemType = IProduct & {
  quantity: number;
};
