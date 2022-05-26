<template>
    <header class='header'>
         <div class='header-left'>
             <img class='header-left-logo' src="@/assets/logo.svg" alt="Logo da Empresa">
             <div class='header-left-company'>
                 <h1 class='header-left-company-pole'>Surreal São Paulo</h1>
                 <p class='header-left-comapny-name'>VTEX</p>
             </div>
         </div>
         <div class='header-right'>
                <img @click="click" class='header-right-notification-icon' src="@/assets/icone-bell.svg" alt="Ícone onde recebem as notificações">
                <div class='header-right-user'>
                    <p class='header-right-user-message'>Olá, Joaquim</p>
                    <img class='header-right-user-img' src="@/assets/usuario.svg" alt="">
                </div>
         </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader",
}
</script>

<style scoped>
.header{
    background-color: var(--tertiary-color);
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    position: relative;
}
.header::after{
    content: '';
    width: 20px;
    height: 100%;
    position: absolute;
    border-left: 1px solid  var(--neutral-color-primary);
    right: 245px;
    top: 0px;
}

.header-left{
    display: flex;
    gap: 60px;
}

.header-left-company{
    border: 2px solid var(--neutral-color-primary);
    padding: 15px 160px 15px 15px;;
    border-radius: 10px;
}

.header-left-company-pole{
    font-size: var(--font-sizeM);
    color: var(--neutral-color-primary);
    font-weight: var(--font-bold);
}
.header-left-comapny-name{
    font-size: var(--font-sizeP);
    color: var(--neutral-color-primary);
    font-weight: var(--font-normal);
}

.header-right{
    display: flex;
}
.header-right-notification-icon{
    max-width: 30px;
    margin-right: 40px;
}
.header-right-user{
    display: flex;
    gap: 20px;
    width: 250px;
    justify-content: center;
}
.header-right-user-message{
    font-size: var(--font-sizeM);
    color: var(--neutral-color-primary);
    align-self: center;
}

/* Animations */
.header-right-notification-icon:hover{
    animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>