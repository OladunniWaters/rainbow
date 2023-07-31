import './TotalItem.scss'
import {useSelector} from 'react-redux'
import { FaDollarSign } from 'react-icons/fa';


function TotalItem() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <div>
        <p className="total-price">Grand Total : <FaDollarSign /> {getTotal().totalPrice}</p>
         <a className='checkout-btn' href="/paymentForm">CHECKOUT</a>
      </div>
    </div>
  )
}

export default TotalItem