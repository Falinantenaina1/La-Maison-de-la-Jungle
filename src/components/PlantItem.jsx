import "../styles/PlantItem.css"
import Price from "./Price"

const toCart = [{
    name: "name",
    price: 12,
    amount: 1
}]

const PlantItem = ({ id, cover, name, price, cart = [], updateCart }) => {

    const addToCart = (id, name, price) => {
        const isInCart = cart.find(item => item.id === id)
        if (isInCart) {

            updateCart(
                cart => {
                    const cartFiltered = cart.filter(item => item.id !== id)
                    return [
                        ...cartFiltered,
                        {
                            id: id,
                            name: name,
                            price: price,
                            amount: isInCart.amount + 1
                        }
                    ]
                }
            )
        } else {
            updateCart(
                cart => {
                    return [
                        ...cart,
                        {
                            id: id,
                            name: name,
                            price: price,
                            amount: 1
                        }
                    ]
                }
            )
        }
    }

    return <div className="plant-item">
        <img className="cover" src={cover} alt={`^${name}-cover`} />
        <h3 className="title">{name}</h3>
        <button className="add-to-cart" onClick={e => addToCart(id, name, price)}>Acheter</button>
        <Price price={price} />
    </div>

}

export default PlantItem