import "../styles/Cart.css"
const Cart = ({cart, updateCart}) => {

    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0)

    return <div className="cart">
        <ul>
        {cart.map(({id, name, price, amount}) => (
           <li key={id}>{`${amount}x ${name} = ${price * amount}€`}</li> 
        ))}
        </ul>
        {
            total === 0 ? "Votre panier est vide" : <p className="total">Total: {total}€</p>
        }
    </div>
}

export default Cart