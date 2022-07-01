import React, {useEffect} from 'react';
import "./Register.css";
import toast from "react-hot-toast";
import anime from 'animejs';

const Register = (props) => {

    useEffect(() => {
        anime({
            targets: '.login',
            scaleX:0.96,
            scaleY:0.96,
            duration: 400
          });
    });

    const register_process = (evt) => {
        evt.preventDefault();
        toast.success((t) => (
            <span className="toast-dismiss" onClick={() => toast.dismiss(t.id)}>
              Signing up now!
            </span>
          ));
    };

    return (
            <div className="register login">
                <form onSubmit={register_process} className="register-form login-form">     
                    <div className="search-box">
                        <button tabIndex="-1" className="login-label">Email</button>
                        <input required type="email" autoComplete="current-email"></input>
                    </div>
                    <div className="search-box">
                        <button tabIndex="-1" className="login-label">Password</button>
                        <input required type="password" autoComplete="current-password"></input>
                    </div>
                    <div className="search-box">
                        <button tabIndex="-1" className="login-label">Password again</button>
                        <input required type="password" autoComplete="current-password"></input>
                    </div>
                    <button type="submit" value="submit" className="button-secondary button">Register</button>
                </form>
            </div>
    )
};

export default Register;