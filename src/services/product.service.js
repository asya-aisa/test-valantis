import { axiosClassic } from '../api/api'

export const ProductService = {
	async getIds(offset, limit) {
		return axiosClassic.post('', {
			action: 'get_ids',
			params: { offset: offset, limit: limit },
		})
	},

	async getItems(ids) {
		return axiosClassic.post('', {
			action: 'get_items',
			params: { ids: ids },
		})
	},

	async getFields() {
		return axiosClassic.post('', {
			action: 'get_fields',
			params: { field: 'brand' },
		})
	},

	async filter(data) {
		return axiosClassic.post('', {
			action: 'filter',
			params: data,
		})
	},
}
