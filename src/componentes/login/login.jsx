import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) => {
    const history=useHistory();

    const goToMaker=(userId)=>{
        history.push({
            pathname: '/maker',
            state:{id: userId},
        });
    }

    const onLogin=(event)=>{
        authService
        .login(event.currentTarget.textContent)
        .then(data=>goToMaker(data.user.uid));
    };

    useEffect(()=>{
        authService.onAuthChange(user=>{
            user&&goToMaker(user.uid);
        })
    })
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.login}>
                        <button className={styles.button} onClick={onLogin}>
                            <i className="fab fa-github"></i>
                            <span className={styles.span}>Github</span>
                        </button>
                    </li>
                    <li className={styles.login}>
                        <button className={styles.button} onClick={onLogin}>
                            <i className="fab fa-google"></i>   
                            <span className={styles.span}>Google</span>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Login;