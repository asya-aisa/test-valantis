export const makeUniq = arr => {
	const seen = {}
	const result = []
	let j = 0

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i]

		const key = item.id
		if (!seen[key]) {
			seen[key] = 1
			result[j++] = item
		}
	}

	return result
}
export const makeUniqFields = (arr) => [...new Set(arr)]

export const arrayBrands = arr => {
	if(!arr.includes(null))return

	if(arr.includes(null)) {
		const index = arr.indexOf(null)
		arr[index] = 'No name'
	}

	return arr
}
