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

  const handleAboutClick = () => {
    window.location.href = "/about";
  }


  return (
    <div>
       <div class="topnav">
        
        <a href="#categories">Category</a>
        <a href="#community" onClick={handleCommunityClick}>Community</a>
        <a href="#create" onClick={handleCreateClick}>Create</a>
        <a href="#about"onClick={handleAboutClick}>About Us</a>
    </div>
      <div className='screen'>
        <p className='para'>Work in progress!
        </p>
        <img src={prog} className="prog"></img>
      </div>
    </div>
  );
};

export default HomePage;
