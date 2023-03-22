import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({setApp, setModal }) => {

    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="cheese">
                <label htmlFor="">
                    <input type="email" name="" placeholder='Name' id="" />
                </label>
                <label htmlFor="">
                    <input type="email" name="" placeholder='Email' id="" />
                </label>
                <Link to='/products'>
                    <button className='btn' onClick={() => setApp(true) ?? setModal(false)}>SUBMIT</button>
                </Link>
            </form>
        </div>
    );
}

export default Modal;
