import cn from 'clsx'

const SubHeading = ({ title, className }) => {
	return <h1 className={cn('subHeading', className)}>{title}</h1>
}

export default SubHeading
