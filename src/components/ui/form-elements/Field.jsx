const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<>
			<input {...register(name, options)} {...rest} />
		</>
	)
}

export default Field
