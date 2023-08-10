import './Review.scss'
import ReviewItem from './ReviewItem'
import Reviews from '../../data/Review'
import { FaStar } from 'react-icons/fa';

function Review() {

  return (
          <div className=" Products"> 
                <h1 className='review-header'>Pawsitively Impressed Customers Share Their MudBuster Love!</h1>
                 <div className="star-cont">
                   <div>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                      <FaStar className='star'/>
                   </div>   
                   <p className='star-rating'>(310)</p>
                </div>
                 
                <div className="reviews-display">
                         {Reviews.map(reviews => (
                             <ReviewItem
                                reviews={reviews}
                                key={reviews.id} 
                             />
  
                         ))}
                   </div>
              </div>
  )
}

export default Review