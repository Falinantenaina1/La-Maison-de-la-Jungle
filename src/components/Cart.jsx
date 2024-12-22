import "../styles/Cart.css"
const Cart = ({cart, updateCart}) => {

    const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0)

    const resetCart = () => {
        const reset = confirm("Voulez-vous vraiment réinitialiser le panier?")

        if (reset) {
            updateCart([])
        }
    }

    return <div className="cart">
        {total !== 0 && <button onClick={resetCart} className="reset-cart">Vider le panier</button>}
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