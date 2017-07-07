import axios from 'axios'
// axios.defaults.baseURL = '../json'

export const getImg = () => axios.get('http://localhost:8080/static/json/imge.json')
