import React from 'react'
import './Modal.scss'
import {AiOutlineClose, AiOutlineInfoCircle} from 'react-icons/ai'

const Modal = () => {
  return (
    <section className='modal-section'>
        <div className="modal">
            <div className="modal-content">
                <AiOutlineClose color='red' size={16} className='close-icon' />
            </div>
            <div className="modal-head">
                <AiOutlineInfoCircle color='orangered' size={18}/>
                <h3>Do you want to continue ?</h3>
            </div>
            <div className="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet porro cum eum incidunt, dolore est et libero, sunt fuga ea repudiandae enim totam quo alias labore nesciunt illo! Id.</p>
            </div>
            <div className="modal-footer">
                <button>Cancel</button>
                <button>Proceed</button>
            </div>
        </div>
        <h1>Modal</h1>
    </section>
  )
}

export default Modal