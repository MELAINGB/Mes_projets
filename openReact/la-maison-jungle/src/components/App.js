import '../App.css';
import Banner from './banner.js';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';

function App() {
  return(
    <>
      <Banner />
      { <Cart /> }
      <ShoppingList />
    </>
  )
}



export default App;
