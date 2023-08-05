import './Review.scss'
import ReviewItem from './ReviewItem'
import Reviews from '../../data/Review'


function Review() {

  return (
          <div className=" Products">
                <div className="products-display">
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