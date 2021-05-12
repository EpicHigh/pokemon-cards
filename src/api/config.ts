import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { ApiBaseResponse } from '../types'

const config: AxiosRequestConfig = {
  baseURL: 'https://api.pokemontcg.io/v2',
  responseType: 'json',
  withCredentials: false,
  headers: { 'X-Api-Key': 'a1b90de1-4446-4524-bd6f-7dd8b8d1cfe6\n' },
}

const defaultApi: AxiosInstance = axios.create(config)

defaultApi.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error)
)

defaultApi.interceptors.response.use(
  (res: AxiosResponse<ApiBaseResponse<undefined>>) => {
    // I'm not sure whether the service would return status 200 with an error object.
    // To be sure, I write this if statement to ensure that the JSON response is not an error object.
    if (res.data?.error) {
      return Promise.reject(res.data?.error)
    }
    return res
  },
  (err: AxiosError<ApiBaseResponse<undefined>>) => {
    if (err.message) {
      return Promise.reject(err.message)
    }
    if (err.response?.data?.error) {
      return Promise.reject(err.response?.data?.error)
    }
    return Promise.reject(new Error('Unexpected circumstances'))
  }
)

export default defaultApi
