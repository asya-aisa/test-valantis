import { useForm } from 'react-hook-form'
import Button from '../../../ui/form-elements/Button'
import Field from '../../../ui/form-elements/Field'
import Heading from '../../../ui/heading/Heading'
import styles from './Filters.module.scss'
import SubHeading from '../../../ui/heading/SubHeading'

const FilterName = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					register={register}
					name='product'
					placeholder='название'
					error={errors.product}
					type='text'
					className={styles.input}
				/>

				<Button className={styles.button}>Найти</Button>
			</form>
	)
}

export default FilterName
