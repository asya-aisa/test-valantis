import cn from 'clsx'

const Heading = ({ title, className }) => {
	return <h1 className={cn('heading', className)}>{title}</h1>
}

export default Heading
