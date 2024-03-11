import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { errorCatch } from '../../../api/api.helpers'
import { ProductService } from '../../../services/product.service'
import { useFilters } from './filters/useFilters'
import { makeUniq } from '../../../utils/array/array-helpers'

export const useProduct = () => {
	const { onSubmitBrand, onSubmitPrice, onSubmitName, isSuccess, filterArr } =
		useFilters()

	const [offset, setOffset] = useState(0)
	const [products, setProducts] = useState([])

	let limit = 50

	const {data: AllIds, isSuccess: isSuccessAllIds} = useQuery({
		queryKey: ['get all ids'],
		queryFn: () => ProductService.getIds(),
		select: ({ data }) => data.result,
		retry: 1
	})

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % AllIds.length;
    setOffset(newOffset)
		window.scrollTo(0, 0)
  }

	const {
		error: errorIds,
		data: Ids,
		isSuccess: isSuccessIds,
		isLoading: isLoadingIds,
	} = useQuery({
		queryKey: ['get ids', offset, limit],
		queryFn: () => ProductService.getIds(offset, limit),
		select: ({ data }) => data.result,
		retry: 1,
	})

	useEffect(() => {
		if (errorIds) {
			console.log(errorCatch(errorIds))
		}

		if (isSuccessIds) {
			setProducts(Ids)
		}
	}, [errorIds, Ids, isSuccessIds])

	useEffect(() => {
		if (isSuccess & isSuccessIds) {
			const intersection = Ids.filter(element => filterArr.includes(element))

			setProducts(intersection)
		}
	}, [isSuccess, filterArr, Ids, isSuccessIds])

	const {
		data: Items,
		isLoading,
		error: errorItems,
	} = useQuery({
		queryKey: ['get items', products],
		queryFn: () => ProductService.getItems(products),
		select: ({ data }) => makeUniq(data.result),
	})

	useEffect(() => {
		if (errorItems) {
			console.log(errorCatch(errorItems))
		}
	}, [errorItems])

	const showAll = () => setProducts(Ids)

	return {
		AllIds,
		isSuccessAllIds,
		Items,
		isLoading,
		isLoadingIds,
		onSubmitBrand,
		onSubmitPrice,
		onSubmitName,
		showAll,
		handlePageClick
	}
}
