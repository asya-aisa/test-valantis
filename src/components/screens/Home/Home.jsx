import cn from 'clsx'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'
import styles from './Home.module.scss'
import Filters from './filters/Filters'
import Pagination from './pagination/Pagination'
import ProductItem from './productItem/ProductItem'
import { useProduct } from './useProduct'

const Home = () => {
	const {
		AllIds,
		isSuccessAllIds,
		Items,
		isLoading,
		isLoadingIds,
		onSubmitBrand,
		onSubmitPrice,
		onSubmitName,
		showAll,
		handlePageClick,
		showFilter,
		filter,
	} = useProduct()

	const products = Items || []
	const allProduct = AllIds || []
	const pages = Math.ceil(allProduct.length / 50) || 1

	return (
		<>
			<div className={styles.containerCenter}>
				<Heading title='Интернет магазин' className={styles.heading} />
			</div>

			<Filters
				onSubmitBrand={onSubmitBrand}
				onSubmitPrice={onSubmitPrice}
				onSubmitName={onSubmitName}
			/>

			<div className={styles.containerCenter}>
				<div
					className={cn(styles.showFilter, {
						[styles.show]: showFilter,
					})}
				>
					поиск по: {filter}
				</div>
			</div>

			<div className={styles.containerCenter}>
				<button className={styles.button} onClick={showAll}>
					Показать все
				</button>
			</div>

			<div className={styles.mainContainer}>
				{isLoading || isLoadingIds ? (
					<SkeletonLoader
						count={1}
						className={styles.SkeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : products.length > 0 ? (
					products.map((item, index) => <ProductItem key={index} item={item} />)
				) : (
					<div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
						На этой странице ничего не найдено
					</div>
				)}

				{isSuccessAllIds && (
					<>
						<Pagination handlePageClick={handlePageClick} pages={pages} />
					</>
				)}
			</div>
		</>
	)
}

export default Home
