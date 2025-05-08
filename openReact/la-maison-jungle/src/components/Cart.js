import '../styles/cart.css';
function Cart(){
    let prixMonstera = 8;
    let prixLierre = 10;  
    let prixBouquet = 15;
    let total = prixMonstera + prixLierre + prixBouquet;
    return (<div className="lmj-cart"> 
      <h3> Votre panier </h3>
        <ul>
          <li> Monstera : {prixMonstera} € </li>
          <li> Lierre : {prixLierre} € </li>
          <li> bouquet de fleurs : {prixBouquet} € </li>
          <li> Total du panier : {total} € </li>
        </ul>

      </div>
    )
  }
  export default Cart;
