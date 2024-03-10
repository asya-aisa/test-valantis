import Heading from '../../ui/heading/Heading'
import styles from './Home.module.scss'
import Filters from './filters/Filters'
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
				<button className={styles.button} onClick={showAll}>Показать все</button>
			</div>

			<span>Страница №{page}</span>

			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{isLoading || isLoadingIds ? (
					<div>Loading...</div>
				) : (
					products.map((item, index) => (
						<ul key={index} style={{ border: '1px red solid', margin: '5px' }}>
							<li>Id: {item.id}</li>
							<li>Name: {item.product}</li>
							<li>Price: {item.price}</li>
							<li>Brand: {item.brand}</li>
						</ul>
					))
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
