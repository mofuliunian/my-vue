import axios from 'axios'

const status = (res) => {
  if (res.status === 200) {
    return res
  }
}

export const aWordApi = () => {
  return axios.get('http://47.99.181.207/api/aWord').then(status)
}
