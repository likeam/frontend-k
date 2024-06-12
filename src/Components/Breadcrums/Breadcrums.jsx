import './Breadcrums.css'
import arrow from '../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className="breadcrums">
        HOME <img src={arrow} alt="arrow" /> SHOP <img src={arrow} alt="arroe" /> {product.category} <img src={arrow} alt="arrow" /> {product.name}
    </div>
  )
}

export default Breadcrums