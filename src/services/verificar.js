import axios from "axios";

export async function verificarService(token) {
    try {
        (token)
        const { data } = await axios.post('https://webhook.peraza.live/verifyToken/', token)
        (data)
        return data

    } catch (error) {
        (error)
    }
}