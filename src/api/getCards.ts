import defaultApi from './config'
import { AxiosResponse } from 'axios'
import { ApiBaseResponse, Card, Params } from '../types'

async function getCards(
  params: Params
): Promise<AxiosResponse<ApiBaseResponse<Card[]>>> {
  return defaultApi.get('/cards', { params })
}

export default getCards
