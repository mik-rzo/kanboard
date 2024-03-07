import styles from './LoginPage.module.css'
import LoginForm from './LoginForm'

function LoginPage() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h1 className={styles.h1}>Title</h1>
				<h2 className={styles.h2}>Please log in or sign up</h2>
				<LoginForm />
			</section>
		</main>
	)
}

export default LoginPage
