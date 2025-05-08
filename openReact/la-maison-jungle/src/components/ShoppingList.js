import {PlantList} from "../data/donne.js"
import '../styles/ShoppingL.css'

function ShoppingList(){
    const categories = PlantList.reduce(
        (acc, plant) => 
            acc.includes(plant.category)? acc : acc.concat(plant.category),[]
    )
  return(
    <>
        <ul>
            {categories.map((cat)=> (
                <li key={cat} className="lmj-plant-sales">
                    {cat}
                </li>
            ))}
        </ul>
        <ul className="lmj-plant-list">
            {PlantList.map((plant)=>(
                <li key={plant.id} className="lmj-plant-item">
                    {plant.name}
                    {plant.isSpecial ?  '👍': null }
                    {plant.isSpecialOffer && <div className="lmj-sales">🎉 Soldes</div>} 
                </li>
            ))}
          
        </ul>
     
    </>
   
  )
  

}
export default ShoppingList;