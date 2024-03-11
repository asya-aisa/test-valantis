import { useForm } from 'react-hook-form'
import Field from '../../../ui/form-elements/Field'
import styles from './Filters.module.scss'

const FilterPrice = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					register={register}
					name='price'
					options={{
						pattern: {
							value: /[0-9]+/,
							message: 'введите цифры',
						},
					}}
					placeholder='цена'
					error={errors.price}
					type='text'
					className={styles.input}
				/>

				<button className={styles.button}>Найти</button>
			</form>
			{errors.price && (
				<div className={styles.error}>{errors.price.message}</div>
			)}
		</>
	)
}

export default FilterPrice
