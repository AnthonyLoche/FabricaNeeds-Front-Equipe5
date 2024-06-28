import axios from 'axios'

export async function verifyService(token) {
  try {
    const { data } = await axios.post('https://webhook.peraza.live/verifyToken/', token)
    return data
  } catch (error) {
    return error
  }
}
