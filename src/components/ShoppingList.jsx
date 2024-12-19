import { plantList } from "../datas/PlantList"
import PlantItem from "./PlantItem"
import "../styles/ShoppingList.css"
import Categories from "./Categories"
import { useState } from "react"
const ShoppingList = ({ cart, updateCart }) => {

    const [groupedBy, setGroupedBy] = useState("")

    const categories = plantList.reduce((acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const plantToShow = groupedBy ? plantList.filter(plant => plant.category === groupedBy) : plantList

    return <>
        <Categories categories={categories} setGroupedBy={setGroupedBy} />
        <ul className="shopping-list">
            {plantToShow.map(({ id, name, cover, price }) =>
                <PlantItem key={id} id={id} name={name} price={price} cover={cover} cart={cart} updateCart={updateCart} />
            )}
        </ul>
    </>


}

export default ShoppingList