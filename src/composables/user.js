import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()

export async function getUserInfoComposable() {
    const getUserInfo = async () => {
        try {
          const authToken = authStore.token;
          const passageUser = new PassageUser(authToken);
          const user = await passageUser.userInfo(authToken);
          if (user) {
            await authStore.setToken(authToken);
          } else {
            authStore.unsetToken();
          }
        } catch (error) {
          authStore.unsetToken();
        }
      };
    onMounted(() => {
        getUserInfo()
      })
  }
  
