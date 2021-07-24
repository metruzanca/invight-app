type Menu = {
  id: string
}

interface Api {
  getMenu(id: string): Menu
}

// For now used as main api client. In the future will be for testing
class Mock implements Api {
  getMenu(id: string) {
    // Move this searchQuery logic to somewhere else
    const searchQuery = new URLSearchParams(location.search) 
    const menuId = searchQuery.get('id')
    // axios.get('menuId')
    // If no id, for now show 00000
    return {id: menuId || '00000'} as Menu
  }
}