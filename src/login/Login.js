import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function loginHandler(){
        console.log('username is:',username);
        console.log('password is:',password);
        if(username && password){
            navigate("/main")
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container }>
                <h2>Business Management Console</h2>
                <table className={styles.tableContainer}>
                    <tbody>
                    <tr>
                        <td><label className={''}>Username*: </label></td>
                        <td><input type="text" className={styles.inputText} value={username} onChange={e=> setUsername(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td><label>Password*: </label></td>
                        <td><input type="password" value={password} onChange={e => setPassword(e.target.value)}/></td>
                    </tr>
                    </tbody>
                </table>

                <div className={styles.marginTop70}>
                    <button className={styles.button18} onClick={loginHandler}>Login</button>
                </div>
            </div>
        </div>
    );
}