import Heading from '../../ui/heading/Heading'
import styles from './Home.module.scss'
import Filters from './filters/Filters'
import ProductItem from './productItem/ProductItem'
import { useProduct } from './useProduct'

const Home = () => {
	const {
		AllIds,
		isSuccessAllIds,
		page,
		setPage,
		Items,
		isLoading,
		isLoadingIds,
		onSubmitBrand,
		onSubmitPrice,
		onSubmitName,
		showAll,
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
				<button className={styles.button} onClick={showAll}>
					Показать все
				</button>
			</div>

			<div className={styles.containerCenter}>
				<span>Страница №{page}</span>
			</div>

			<div className={styles.mainContainer}>
				{isLoading || isLoadingIds ? (
					<div>Loading...</div>
				) : (
					products.map((item, index) => <ProductItem key={index} item={item} />)
				)}

				{isSuccessAllIds && (
					<>
						<button
							onClick={() => setPage(prev => prev - 1)}
							disabled={page === 1}
						>
							prev
						</button>

						<button
							onClick={() => setPage(prev => prev + 1)}
							disabled={page === pages}
						>
							next
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default Home
