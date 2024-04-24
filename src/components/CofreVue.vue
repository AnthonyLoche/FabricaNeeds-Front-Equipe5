<script setup>
</script>

<template>
    <section>
        <div id="cofre">
            <img src="../../public/cofre.png" alt="" id="cofrinho">
        </div>
        <div id="cofreInfo">
            <h2>Porquinho Fabricador</h2>
            <p>Dinheiro Contido No Porquinho:</p>
            <h3 id="valor">R$: 00,00</h3>
            <div id="detalhes">
                <div>
                    <p>Valor Contribuido No dia:</p>
                </div>
                <div>
                    <p>Maior Contribuidor:</p>
                </div>
                <div>
                    <p>Meta:</p>
                </div>
            </div>
            <p>Contribua Você Também com o Nosso Amigo</p>
            <button id="contribuir">Contribuir</button>
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    align-items: center;
    padding: 30px;
    gap: 20px;
    width: 65%;
    margin: 10px auto;
}

button#contribuir{
    color: white;
    padding: 10px;
    background-color: #8C52FF;
    border: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
}

section > div {
    width: 50%;
}

h3#valor{
    color: #8C52FF;
    font-size: 4vw;
}

#cofre{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}

#cofreInfo{
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}   


img#cofrinho{
    width: 70%;
}

#detalhes{
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    align-items: center;
    word-wrap: break-word;
}

#detalhes div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 33%;
    align-items: center;
    border-left: 2px solid #8C52FF;
    border-right: 2px solid #8C52FF;
    height: 150px;
    padding: 10px;
    text-align: center;
}
</style>