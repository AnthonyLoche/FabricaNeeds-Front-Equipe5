import axios from "axios";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export async function cadastrarService(user) {
    if (user.nome == '') {
        toast.error('Preencha o campo de nome', { autoClose: 1000 })
    }
    else if (user.email == '') {
        toast.error('Preencha o campo de email', { autoClose: 1000 })
    }
    else if (user.senha == '') {
        toast.error('Preencha o campo de senha', { autoClose: 1000 })
    }
    else {

        const { data } = await axios.post('https://fabricaneeds-back-equipe5-3edw.onrender.com/contribuinte/', user)
        await axios.post('https://webhook.peraza.live/sendMail/',  {email: user.email});
        if (data == true) {
            toast.success('Cadastro realizado com sucesso', { autoClose: 1000 })
        }
    }
}

