import './Product.scss'
import Item from '../cart/Item'
import Data from '../../data/Data'


function Product() {



  return (
          <div className=" Products">
             <h1 className='products-header'>BEST SELLERS</h1>
                <div className="products-display">
                         {Data.map(product => (
                             <Item
                                product={product}
                                key={product.id} 
                             />
  
                         ))}
                   </div>
              </div>
  )
}

export default Product