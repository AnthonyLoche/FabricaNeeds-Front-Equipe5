import axios from "axios";
import notify from '@/notify/toastify.js'

export async function cadastrarService(user) {
    console.log(user.email)
    if (user.nome == '') {
        notify('error', 'Preencha o campo de nome')
    }
    else if (user.email == '') {
        notify('error', 'Preencha o campo de email')
    }
    else if (user.senha == '') {
        notify('error', 'Preencha o campo de senha')
    }
    else {

        const { data } = await axios.post('https://fabricaneeds-back-equipe5-3edw.onrender.com/contribuinte/', user)
        const { sendEmail } = await axios.post('https://webhook.peraza.live/sendMail/',  {email: user.email});
        console.log({sendEmail: sendEmail})
        console.log(data)
        if (data == true) {
            notify('success', 'Cadastro realizado com sucesso')
        }
    }
}

