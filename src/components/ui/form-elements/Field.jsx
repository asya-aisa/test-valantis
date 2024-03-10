import styles from './form.module.scss'

const Field = ({ register, name, options, error, style, ...rest }) => {
	return (
		<>
			<input {...register(name, options)} {...rest} />
			{error && <div className={styles.error}>{error.message}</div>}
		</>
	)
}

export default Field
