import axios from 'axios'
// axios.defaults.baseURL = '../json'

export const getImg = () => axios.get('http://localhost:8080/static/json/Data.json')
export const getHot = () => axios.get('http://localhost:8080/static/json/Data.json')
export const getdoubanTime = () => axios.get('http://localhost:8080/static/json/Data.json')
export const getYike = () => axios.get('http://localhost:8080/static/json/Data.json')
export const gethomRecommend = () => axios.get('http://localhost:8080/static/json/Data.json')
export const getFind = () => axios.get('http://localhost:8080/static/json/Data.json')
