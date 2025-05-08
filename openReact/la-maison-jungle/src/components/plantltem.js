
import CareScale from "./CareScale"
import '../styles/Plantltem.css'
function PlantItem({id, cover, name, water, light}){
    return (
        <li key={id} className="lmj-plant-item"  onClick={() =>handleClick(name)} >
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            {name}

            <div  onClick={() => lightclick(light, water)}>
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
           
        </li>
    )
}




function handleClick(plName){
    console.log('test de click ',plName)
    alert(`Vous voulez acheter une plante ${plName} ? Très bon choix 🌱`)
}

function lightclick( light, water){

    light ===1 ? light ='peu': light ===2 ? light= 'modéré': light='beaucoup'
    water ===1 ? water ='peu': water ===2 ? water= 'modéré': water='beaucoup'

    alert(`Cette plante a besoin de ${light} de lumiere et ${water} d'eau 🌱`)
}
export default PlantItem 

