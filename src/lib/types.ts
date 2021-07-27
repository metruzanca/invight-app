export type Menu = {
  id: string;
  categories: Category[];
}

export type Category = {
  title: string;
  data: Item[];
}

export type Item = {
  name: string;
  description: string;
  image: string;
  price: number;
  flag: ItemFlag
}

export enum ItemFlag {
  none  = 0x000000,
  spicy = 0x000001,
  vegan = 0x000010,
  // Idk, lactos?
}