import axios from "axios";

export async function verificarService(token) {
    try {
        console.log(token)
        const { data } = await axios.post('https://webhook.peraza.live/verifyToken/', token)
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}