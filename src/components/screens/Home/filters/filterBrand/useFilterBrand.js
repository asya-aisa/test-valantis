import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { errorCatch } from '../../../../../api/api.helpers'
import { ProductService } from '../../../../../services/product.service'
import { arrayBrands, makeUniqFields } from '../../../../../utils/array/array-helpers'


export const useFilterBrand = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['get field brand'],
		queryFn: () => ProductService.getFields(),
		select: ({ data }) => arrayBrands(makeUniqFields(data.result)),
	})

	useEffect(() => {
		if (error) {
			console.log(errorCatch(error))
		}
	}, [error])

	return { data, isLoading }
}
