import axios from 'axios'
import md5 from 'md5'

const API_URL = 'http://api.valantis.store:40000/'

const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')

const password = 'Valantis'

const hash = md5(`${password}_${stamp}`)

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		'X-Auth': hash,
	},
})
