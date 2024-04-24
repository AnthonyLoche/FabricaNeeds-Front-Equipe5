<script setup>
</script>

<template>
    <header>
        <div>
            <h1 id="titulo">Fabrica Needs</h1>
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">Cofre</router-link>
            <router-link to="/about">Estoque</router-link>
            <router-link to="/about">Fábrica</router-link>
        </nav>
        <div id="botoes">
            <router-link id="github" to="/">
                <img src="../../public/github.svg" alt="">
            </router-link>
            <router-link id="singup" to="/">Sing Up</router-link>
            <router-link id="login" to="/">Log in</router-link>
        </div>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: white;
    align-items: center;
    padding: 30px;
    border-bottom: 2px solid #8C52FF;
}

h1#titulo{
    color: #8C52FF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a{
    color: white;
    text-decoration: none;
    border-bottom: 2px solid white;
    opacity: 0.8;
}

a:hover{
    opacity: 1;
    border-bottom: 2px solid #8C52FF;
    transition: 0.5s;
    color: #8C52FF;
}

nav{
    display: flex;
    gap: 20px;
}

#botoes{
    display: flex;
    gap: 20px;
}

a#github{
    color: white;
    padding: 10px;
    background-color: #8C52FF;
    border: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

a#singup{
    color: white;
    padding: 10px;
    background-color: rgb(46 46 46);
    border: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

a#login{
    color: white;
    padding: 10px;
    background-color: #8C52FF;
    border: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

a#github img{
    width: 30px;
    height: 30px;
}

</style>