import SubHeading from '../../../ui/heading/SubHeading'
import FilterName from './FilterName'
import FilterPrice from './FilterPrice'
import styles from './Filters.module.scss'
import FilterBrand from './filterBrand/FilterBrand'
import { useFilters } from './useFilters'

const Filters = ({ onSubmitBrand, onSubmitPrice, onSubmitName }) => {

	return (
		<div className={styles.wrapper}>
			<SubHeading title='Фильтры:' className={styles.subHeading} />

			<div className={styles.filters}>
				<FilterBrand onSubmit={onSubmitBrand} />
				<FilterPrice onSubmit={onSubmitPrice} />
				<FilterName onSubmit={onSubmitName} />
			</div>
		</div>
	)
}

export default Filters
