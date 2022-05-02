import logo from './logo.svg';
import Review from './review/Review.js'
import './App.css'
import ApiReview from './apiReview/ApiReview.js'

// ffb900
// #262834
function App() {
  const information = "This data was passed from parent to child, this is a container"

  return (
    <>
    <div className='App'>

      <h1>Welcome to my creation</h1>
      <div className="middle">
        
      <Review name ="Mohammad Hamzah Iqbal" info = {information}/>
      <ApiReview />
      
      <Review />

      </div>


    </div>
    
    
    </>
  );
}

export default App;
