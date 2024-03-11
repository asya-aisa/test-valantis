import styles from './ProductItem.module.scss'

const ProductItem = ({ item }) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.id}>id: {item.id}</span>
			<p className={styles.brand}>{item.brand}</p>
			<div className={styles.product}>{item.product}</div>
			<span className={styles.price}>{item.price} руб.</span>
		</div>
	)
}

export default ProductItem
