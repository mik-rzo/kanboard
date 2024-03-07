import styles from './LoginForm.module.css'

function LoginForm() {
	return (
		<>
			<h3 className={styles.placeholder}>username</h3>
			<h3 className={styles.placeholder}>email</h3>
			<h3 className={styles.placeholder}>password</h3>
			<button className={styles.button} onClick={() => console.log('clicked')}>
				Log in
			</button>
		</>
	)
}

export default LoginForm
