import { Controller, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'
import styles from '../Filters.module.scss'
import { useFilterBrand } from './useFilterBrand'

const FilterBrand = ({ onSubmit }) => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		mode: 'onChange',
	})

	const { data, isLoading } = useFilterBrand()

	const brands = data || []

	if (isLoading) return <div>Loading...</div>

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formBrand}>
				<Controller
					name='brand'
					control={control}
					rules={{
						required: 'это поле нужно заполнить',
					}}
					render={({ field: { value, onChange } }) => (
						<ReactSelect
							classNamePrefix='select2_selection'
							placeholder='брэнд'
							title='Brand'
							options={brands.map(brand => ({
								value: brand,
								label: brand,
							}))}
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<button className={styles.button}>Найти</button>
			</form>
			{errors.brand && (
				<div className={styles.error}>{errors.brand.message}</div>
			)}
		</>
	)
}

export default FilterBrand
