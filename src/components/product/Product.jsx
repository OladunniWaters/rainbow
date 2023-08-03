import './Product.scss'
//import Item from '../cart/Item'
import Shop from '../cart/Shop'
import Data from '../../data/Data'


function Product() {

  return (
          <div className=" Products">
                <div className="products-display">
                         {Data.map(product => (
                             <Shop
                                product={product}
                                key={product.id} 
                             />
  
                         ))}
                   </div>
              </div>
  )
}

export default Product