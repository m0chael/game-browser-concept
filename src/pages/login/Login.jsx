import React, {useEffect} from 'react';
import "./Login.css";
import toast from "react-hot-toast";
import anime from 'animejs';

const Login = (props) => {
    
    useEffect(() => {
        anime({
            targets: '.login',
            scaleX:0.96,
            scaleY:0.96,
            duration: 400
          });
    });

    const handle_login_submit = (evt) => {
        evt.preventDefault();
        toast.success((t) => (
            <span className="toast-dismiss" onClick={() => toast.dismiss(t.id)}>
              Logging in now!
            </span>
          ));  
    };
    
    return (
            <div className="login">
                <form className="login-form" onSubmit={handle_login_submit}>     
                    <div className="search-box">
                        <button tabIndex="-1" className="login-label">Email</button>
                        <input required type="email" autoComplete="email"></input>
                    </div>
                    <div className="search-box">
                        <button tabIndex="-1" className="login-label">Password</button>
                        <input required type="password" autoComplete="current-password"></input>
                    </div>
                    <button type="submit" value="submit" className="button-secondary button">Login</button>
                </form>
            </div>
    )
};

export default Login;