import { plantList } from "../datas/PlantList"
import PlantItem from "./PlantItem"
import "../styles/ShoppingList.css"
const ShoppingList = ({cart, updateCart}) => {

    const categories = plantList.reduce((acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    return <ul className="shopping-list">
        {plantList.map(({id, name, cover, price}) => 
            <PlantItem key={id} id={id} name={name} price={price} cover={cover} cart={cart} updateCart={updateCart} />
        )}
    </ul>


}

export default ShoppingList