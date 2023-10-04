import styles from './login.module.scss'

export default function Login(signedIn: boolean) {
    
    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm}>
                    <label className={styles.label} htmlFor="userName">Username</label>
                    <input 
                        className={styles.userName} 
                        type={"text"}
                        name={"userName"}>
                    </input>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input 
                        className={styles.password} 
                        type={"password"}
                        name={"password"}>    
                    </input>
                    <button className={styles.signinButton}>Sign in</button>
                </form>
            </div>
            
        </div>
    )
}