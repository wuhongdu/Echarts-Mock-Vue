import request from '@/utils/request'

export function getProvince(query) {
  return request({
    url: '/api/province/list',
    method: 'get',
    params: query
  })
}
