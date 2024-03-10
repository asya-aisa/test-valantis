import { useForm } from 'react-hook-form'
import Field from '../../../ui/form-elements/Field'
import styles from './Filters.module.scss'

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

			<button className={styles.button}>Найти</button>
		</form>
	)
}

export default FilterName
