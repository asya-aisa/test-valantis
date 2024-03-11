const Field = ({ register, name, options, ...rest }) => {
	return (
		<>
			<input {...register(name, options)} {...rest} />
		</>
	)
}

export default Field
