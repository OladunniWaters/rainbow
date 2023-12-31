import './CartItem.scss';
import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';




function CartItem({id, thumbnail , title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
    
        <div className='cartItem-image-cont'>
           <img className="cartItem-image" src={thumbnail} alt='item'/>
        </div>   
        
        <div className="cartItem-info">
            <p className="cartItem-title">{title}</p>
            <p className="cartItem-price">${price}</p>
        </div>    
        
        <div className='cartItem-incrDec'>
          <button className='incrDec-button' onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p className='quantity'>{quantity}</p>
          <button className='incrDec-button' onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        
        
        <button
          className='remove-button' 
          onClick={() => dispatch(removeItem(id))}>
            <LiaTimesSolid className='trash'/>
        </button>
      </div>

  )
}

export default CartItem