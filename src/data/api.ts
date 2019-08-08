import axios from 'axios'

const baseApi = `https://api.airtable.com/v0/app0ycj8kUgFtfOs4`
const apiKey = 'key0nN2z3W5stk5at'

function getAuthHeaders() {
  return {
    Authorization: `Bearer ${apiKey}`
  }
}

export const getBooks = () => {
  return axios.get(`${baseApi}/Books`, {
    headers: getAuthHeaders()
  })
}
