import "./App.scss";
import Modal from "./components/modal/Modal";
import profilePic from './assets/profilepic.jpg'

function App() {
  return (
    <>
      <section className="intro-section">
        <div className="intro">
          <img src={profilePic} alt="Profile Picture" />
          <h1>Let's <span>Create a modal !!!</span></h1>
          <p>Click the button below</p>
          <button>OPEN MODAL</button>
        </div>
        <Modal />
      </section>
    </>
    
  );
}

export default App;