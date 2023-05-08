import React from 'react'
import './Modal.scss'
import {AiOutlineClose, AiOutlineInfoCircle} from 'react-icons/ai'

const Modal = () => {
  return (
    <section className='modal-section --100vh'>
        <div className="modal --flex-center">
            <div className="modal-content --bg-light --card --p">
                <AiOutlineClose color='red' size={16} className='close-icon' />
                <div className="modal-head --flex-start">
                    <AiOutlineInfoCircle color='orangered' size={18}/>
                    <h3 className='--text-p --ml'>Do you want to continue ?</h3>
                </div>
                <div className="modal-body">
                    <p className='text-sm --mb'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet porro cum eum incidunt, dolore est et libero, sunt fuga ea repudiandae enim totam quo alias labore nesciunt illo! Id.</p>
                </div>
                <div className="modal-footer --flex-end">
                    <button className='--btn'>Cancel</button>
                    <button className='--btn --btn-primary'>Proceed</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal