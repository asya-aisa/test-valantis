import { useForm } from 'react-hook-form'
import Button from '../../../ui/form-elements/Button'
import Field from '../../../ui/form-elements/Field'
import Heading from '../../../ui/heading/Heading'
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

				<Button className={styles.button}>Найти</Button>
			</form>
	)
}

export default FilterPrice
