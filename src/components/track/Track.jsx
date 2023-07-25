import './Track.scss'

function Track() {
  return (
     <div>
         <h2>Track Your Order</h2>
         <form>
             <div>
                <p>Order Number</p>
                <input
                  className='form-input'
                  type="text"
                  name="orderNumber"
                  value=""
              />
              </div>
              
              <div>
                <p>Email</p>
                <input
                  className='form-input'
                  type="text"
                  name="orderEmail"
                  value=""
                  />
              </div>
              
               <button type="submit">submit</button>
         </form>
     </div>
  );
}
export default Track;


