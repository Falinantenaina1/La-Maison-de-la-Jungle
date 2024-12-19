import "../styles/Price.css"

const Price = ({price}) => {

    return <div className="price">
        {`${price} €`}
    </div>

}

export default Price