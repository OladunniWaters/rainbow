import './ReviewItem.scss'


function ReviewItem({reviews}) {
   const {id, customerName, date, review, customerImage} = reviews


  return (
    <div className="review" >

        <div>
            <div></div>
            <p>299 Reviews</p>
        </div>
        
         <div>
                 <div> 
                     <img
                      src={customerImage}
                      alt="item"
                      className='item-image'
                    />
                </div>
             <div>
                 <p>Feline V.</p>
                 <p>Verified</p>
             </div>
              <p>7/14/2023</p>
              <div>Stars</div>
               <p>Alle 3 de smaken zijn heerlijk. Verfrissend en goede sterkte. Net vanmorgen mijn 3e vulling gebruikt dus ook dat valt mij alles mee hoelang je er mee doet. Ik ben nu al 1,5 week volledig gestopt met roken hiermee! Goed vol te houden en echt een aanrader!! Nooit gedacht dat het zó goed zou werken!
               </p>
               <hr />
               <p>Journey Pack</p>
         </div>
    </div>
  );
}
export default ReviewItem;


