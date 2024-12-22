import "../styles/Categories.css"
const Categories = ({categories, setGroupedBy}) => {

    return <select name="categories" className="categories" onChange={(e) =>setGroupedBy(e.target.value)} >
        <option value="">--</option>
        {categories.map((category, index) => <option key={`${category}-${index}`} value={category}>{category}</option> )}
    </select>
}

export default Categories