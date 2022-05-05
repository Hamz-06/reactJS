
import Review from './review/Review.js'
import './App.css'
import ApiReview from './apiReview/ApiReview.js'

// ffb900
// #262834
function App() {


  const firstReview = "This data was passed from parent to child, this is a container"
  const thirdReview="Working on trying to pass data to a parent container"
  return (
    <>
    <div className='App'>

     
      <div className="middle">
        
      <Review name ="Mohammad Hamzah Iqbal" info = {firstReview} changeColor ="red"/>
      <ApiReview />
      
      <Review name ="Equals" info={thirdReview} changeColor = "blue" inputField = "true"/>
      
      </div>


    </div>
    
    
    </>
  );
}

export default App;
