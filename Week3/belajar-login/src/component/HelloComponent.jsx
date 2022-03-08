import React from 'react';
import './HelloComponent.css';

const HelloComponent =()=>{
    return <body><div className='container'>
    <h1 className='text-p'>FORM LOGIN</h1><br></br>
    <h1 className='text-p'>Tugas Pertemuan <br></br> Ketiga</h1><br></br>
    

    <form>
        <label>Username</label><br></br>
        <input type={'text'}></input><br></br>
        <label>Password</label><br></br>
        <input type={'text'}></input><br></br>
        <button>Login</button>
        
    </form>
    </div>
    </body>
}

export default HelloComponent;