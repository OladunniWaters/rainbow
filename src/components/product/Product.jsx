import './Product.scss'
//import Item from '../cart/Item'
import Shop from '../cart/Shop'
import Data from '../../data/Data'
import Review from '../review/Review';

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
                   
                        <Review />
              </div>
  )
}

export default Product