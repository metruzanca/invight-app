export type Menu = {
  id: string;
  categories: Category[];
}

type Category = {
  name: string;
  items: Item[];
}

type Item = {
  name: string;
  description: string;
  image: string;
  price: number;
  flag: ItemFlag
}

enum ItemFlag {
  none  = 0x000000,
  spicy = 0x000001,
  vegan = 0x000010,
  // Idk, lactos?
}


interface Api {
  getMenu(id: string): Promise<Menu>
}

const mockMenu: Omit<Menu, 'id'> = {
  // id: 'someIdGoesHere',
  categories: [
    {
      name: "cocktails",
      items: [
        {
          name: "something",
          description: 'something edible',
          flag: ItemFlag.none,
          image: 'some image url',
          price: 9.95
        }
      ]
    }
  ]
}

// For now used as main api client. In the future will be for testing
export class Mock implements Api {
  async getMenu(id: string) {
    // Move this searchQuery logic to somewhere else
    const searchQuery = new URLSearchParams(location.search) 
    const menuId = searchQuery.get('id')
    // axios.get('menuId')
    // If no id, for now show 00000
    return {...mockMenu, id: menuId || '00000'} as Menu
  }
}