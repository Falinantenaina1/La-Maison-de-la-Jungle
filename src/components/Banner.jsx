import logo from "../assets/logo.png"
import "../styles/Banner.css"

const Banner = () => {

    const title = "La maison de la jungle"

    return <header className="banner">
        <img className="logo" src={logo} alt={title} />
        <h1 className="title">{title.toUpperCase()}</h1>
    </header>
}

export default Banner