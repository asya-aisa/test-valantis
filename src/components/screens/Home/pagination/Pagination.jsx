import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({handlePageClick, pages, }) => {
	return (
		<ReactPaginate
		breakLabel='...'
		nextLabel='следующая'
		onPageChange={handlePageClick}
		pageRangeDisplayed={5}
		pageCount={pages}
		previousLabel='предыдущая'
		renderOnZeroPageCount={null}
		containerClassName={styles.paginateCont}
		pageClassName={styles.li}
		previousClassName={styles.prev}
		nextClassName={styles.next}
		activeClassName={styles.active}
		disabledClassName={styles.disabled}
		/>
	)
}

export default Pagination