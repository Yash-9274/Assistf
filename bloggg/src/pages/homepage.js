import { ReactComponent as Logo } from "./logo.svg";
import styles from './homepage.css'
import icon from './image-removebg-preview.png'
import prog from './image__1_-removebg-preview.png';

const HomePage = () => {
  const handleCreateClick = () => {
    window.location.href = "/create";
  }
    const handleCommunityClick = () => {
    window.location.href = "/community";
  }


  return (
    <div>
       <div class="topnav">
        
        <a href="#categories">Category</a>
        <a href="#comunity" onClick={handleCommunityClick}>Community</a>
        <a href="#create" onClick={handleCreateClick}>Create</a>
        <a href="#about">About Us</a>
    </div>
      <div className='screen'>
        <p className='para'>Work in progress!
          This website is still under progress. Come back later for more features. For any queries, please contact with the above
        </p>
        <img src={prog} className="prog"></img>
      </div>
    </div>
  );
};

export default HomePage;
