import "./App.scss";
import Modal from "./components/modal/Modal";
import profilePic from './assets/profilepic.jpg'

function App() {
  return (
    <>
      <section className="intro-section --100vh --flex-center">
        <div className="intro --center-all">
          <img src={profilePic} alt="Profile Picture" />
          <h1 className="--text-light --text-md">Let's <span className="--fw-thin">Create a modal !!!</span></h1>
          <p className="--text-light --mb2">Click the button below</p>
          <button className="--btn --btn-secondary">OPEN MODAL</button>
        </div>
        <Modal />
      </section>
    </>
    
  );
}

export default App;