import './ReviewItem.scss'
import { FaStar } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';


function ReviewItem({reviews}) {
   const {id, customerName, date, review, customerImage} = reviews


  return (
    <div className="review-cont" >
              <div className="review-image-cont">
                     <img
                      src={customerImage}
                      alt="review-image"
                      className='review-image'
                    />
              </div>   
              
          <div className="review-item-cont">      
             <div className="review-name-cont">
                 <p className="customer-name">{customerName}</p>
                 <p className="review-verified"><BsCheckCircleFill className="review-checker"/>Verified</p>
             </div>
             
              <p className="review-date">{date}</p>
              
              <div className="review-star-cont">
                     <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
              </div>
         
              <p className="review-p">{review}</p>
         </div>     
              
               
               <hr className="review-hr"/>
               <p className="review-productname">Journey Pack</p>
    </div>
  );
}
export default ReviewItem;


