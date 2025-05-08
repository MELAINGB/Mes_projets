import {PlantList} from "../data/donne.js"
import '../styles/ShoppingL.css'
// import CareScale from "./CareScale.js"
import PlantItem from "./plantltem.js"

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
            {/* {PlantList.map((plant)=>(
                <li key={plant.id} className="lmj-plant-item" >
                    {plant.name}
                    {plant.isSpecial ?  '👍': null }
                    {plant.isSpecialOffer && <div className="lmj-sales">🎉 Soldes</div>} 
                    <CareScale careType='light' scalevalue={plant.light} />
                    <CareScale careType='water' scalevalue={plant.water} />
                </li>
            ))}
           */
            PlantList.map(({id, cover, name, water, light})=>(
                <PlantItem 
                    key={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                />
            ))}
        </ul>
     
    </>
   
  )
  

}
export default ShoppingList;