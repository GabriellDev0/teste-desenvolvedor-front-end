<template>
    <div class='main-side-bar'>
                <div>
                    <img class='main-side-bar-icon-search' src="@/assets/icone-busca.svg" alt="Ícone de Busca, onde podemos fazer buscas pelo site.">
                    <img class='main-side-bar-icon-folder' src="@/assets/icone-folder2.svg" alt="Ícone de uma Pasta, onde estarão guardados nossos arquivos.">
                </div>
                <div class='main-side-bar-icon-adjustment'>
                       <img src="@/assets/icone-ajuste.svg" alt="Íconde de configurações, onde podemos fazer alguns ajustes na página.">
                </div>     
            </div>
</template>

<script>
export default {
    name: "TheSideBar"
}
</script>

<style scoped>
    .main-side-bar{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 400px;
        background-color: var(--neutral-color-secundary);
        padding: 30px;
    
    }

    .main-side-bar-icon-search{
        padding-bottom: 60px;
    }

    .main-side-bar-icon-adjustment{
        background-color: var(--single-color);
        padding: 10px;
        border-radius: 10px;
    }
</style>