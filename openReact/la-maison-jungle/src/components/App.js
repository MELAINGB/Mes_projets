import '../App.css';
import Banner from './banner.js';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import Footer from './Footer.js';

function App() {
  return(
    <>
      <Banner />
      { <Cart /> }
      <ShoppingList />
      <Footer />
    </>
  )
}



export default App;
