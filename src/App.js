import "./App.scss";
import Modal from "./components/modal/Modal";
import profilePic from './assets/profilepic.jpg'
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains('handleClick')) {
          setShowModal(!showModal);
    }

  }
  
  return (
    <>
      <section className="intro-section --100vh --flex-center">
        <div className="intro --center-all">
          <img src={profilePic} alt="Profile Picture" />
          <h1 className="--text-light --text-md">Let's <span className="--fw-thin">Create a modal !!!</span></h1>
          <p className="--text-light --mb2">Click the button below</p>
          <button className="--btn --btn-secondary handleClick" onClick={handleClick}>OPEN MODAL</button>
        </div>
        {showModal && <Modal onCloseModal={handleClick}/>}
      </section>
    </>
    
  );
}

export default App;