import React from 'react';
import YellowButton from './YellowButton';
import RoundedImage from './RoundedImage';

const Home = () => {
  return (
    <div className="mainSection">
      {/* First Part */}
      <div className="heroSection50">
        <div>
          <h1 className="heroTextOne">Discover New</h1>
        </div>
        <div className="secondHeroText">
          <h1 className="heroTextTwo">Collection</h1>
          <img className="imageSun" src="images/yellow_round.png" alt="YellowRound" width="110px" height="50px" />
        </div>
        <div className="heroContent">
          <div>
            <img src="images/line.svg" alt="line" />
          </div>
          <p>Fashion is part of the daily air and it changes all the time, with all the events.</p>
        </div>
        <div className="heroContent">
          <h2 className="thirdHeroText">#01</h2>
          <YellowButton text="Start Shopping" borderRadius="5px" />
        </div>
        <div className="avatar">
          <div>
            <RoundedImage src="images/ellipse_1.png" alt="Pic 1" height="43px" width="43px" />
          </div>
          <div className="overlay">
            <RoundedImage src="images/ellipse_2.png" alt="Pic 1" height="43px" width="43px" />
          </div>
          <div className="overlay">
            <RoundedImage src="images/ellipse_3.png" alt="Pic 1" height="43px" width="43px" />
          </div>
          <div className="heroSection20">
            <p className="textWrapper"><strong>15K Well Reviews</strong></p>
          </div>
        </div>
      </div>
      {/* First Part Ends */}
      {/* Second Part Starts */}
      <div className="heroSection50">
        <img src="images/girl.png" alt="yellow_girl"  />
      </div>
      {/* Second Part Ends */}
    </div>
  );
}

export default Home;
