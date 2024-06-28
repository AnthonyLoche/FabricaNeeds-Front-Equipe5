import axios from 'axios'
import notify from '@/notify/toastify.js'


async function registerService(user) {
  try{
  if (user.nome == '') {
    notify('warning','Preencha o campo de nome')
  } else if (user.email == '') {
    notify('warning','Preencha o campo de email')
  } else if (user.senha == '') {
    notify('warning','Preencha o campo de senha')
  } else {
    const { data } = await axios.post(
      'https://fabricaneeds-back-equipe5-3edw.onrender.com/contribuinte/',
      user
    )
    const result = await axios.post('https://webhook.peraza.live/sendMail/', { email: user.email })
  
      notify('sucess', 'Cadastro realizado com sucesso')
    }
  }
  catch (error) {
    console.log(error)
  }
    
  }

  export {registerService} 