import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { errorCatch } from '../../../../api/api.helpers'
import { ProductService } from '../../../../services/product.service'

export const useFilters = () => {
	const [filterArr, setFilterArr] = useState()
	const [filter, setFilter] = useState('')
	const [showFilter, setShowFilter] = useState(false)

	const { mutate, isSuccess } = useMutation({
		mutationKey: ['get filter'],
		mutationFn: data => ProductService.filter(data),
		onSuccess: data => {
			setFilterArr(data.data.result)
		},
		onError(error) {
			console.log(errorCatch(error))
		},
		retry: 1,
	})

	const onSubmitBrand = data => {
		setShowFilter(true)
		setFilter('брэнду')
		if (data.brand.value === 'No name') {
			mutate({
				brand: null,
			})
		} else {
			mutate({
				brand: data.brand.value,
			})
		}
	}

	const onSubmitPrice = data => {
		setShowFilter(true)
		setFilter('цене')
		mutate({
			price: +data.price,
		})
	}

	const onSubmitName = data => {
		setShowFilter(true)
		setFilter('названию')
		mutate(data)
	}

	return {
		onSubmitBrand,
		onSubmitPrice,
		onSubmitName,
		isSuccess,
		filterArr,
		showFilter,
		setShowFilter,
		filter
	}
}
