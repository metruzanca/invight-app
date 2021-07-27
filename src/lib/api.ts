import { Menu, ItemFlag, Category } from "./types"

interface MenuAPI {
  getMenu(id: string): Promise<Menu>
}

const mockMenu: Omit<Menu, 'id'> = {
  // id: 'someIdGoesHere',
  categories: require('./mocks/seamlessSushi.json') as Category[]
}

// For now used as main api client. In the future will be for testing
export class Mock implements MenuAPI {
  async getMenu(id: string) {    
    // Move this searchQuery logic to somewhere else
    // const searchQuery = new URLSearchParams(location.search) 
    // const menuId = searchQuery.get('id')
    // axios.get('menuId')
    // If no id, for now show 00000
    return {...mockMenu, id: '00000'} as Menu
  }
}