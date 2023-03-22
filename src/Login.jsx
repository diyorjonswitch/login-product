import React from 'react';
import { useState } from 'react';
import App from './App';
import Modal from './Components/Modal';
export default function Login  () {
    const [app, setApp] = useState(false);
    const [modal,setModal] = useState(true)
    return (
        <div>
            {modal && <Modal setModal={setModal} setApp={setApp} />}
            {app && <App setApp={setApp}/>}
        </div>
    );
}

// export default Login;
