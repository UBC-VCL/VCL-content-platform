import React from "react";
import './Home.css';
import LandingPage from '../../components/LandingPage/LandingPage';
interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="Home">
      <LandingPage/>
    </div>
  );
};

export default Home;
