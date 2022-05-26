<template>
  <router-view/>
</template>

<style>
:root{
  --neutral-color-primary: #FFFFFF;
  --neutral-color-secundary: #F6F6F6;
  --neutral-color-tertiary: #E5E5E5;
  --neutral-color-tertiary2: #75818C;

  --primary-color: #B600EE;
  --tertiary-color: #9206E9;

  --single-color: #20272C;

  --font-normal: 400;
  --font-bold:  700;

  --font-sizeP: font-size: 0.75rem;
  --font-sizeM: font-size: 1rem;
  --font-sizeG: font-size: 1.25rem;
}
#app {
  font-family: 'Open Sans';
}

*{
  box-sizing: border-box;
}

body, ul, li, h1, h2, p{
  padding: 0px;
  margin: 0px;
}

ul{
  list-style: none;
}

img{
  max-width: 100%;
  display: block;
}

.btn{
    padding: 15px 60px 15px 60px;
    font-size: var(--font-sizeM);
    color: var(--neutral-color-primary);
    background-color: var(--primary-color);
    border-radius: 10px;
    border: none;
    text-align: center;
    cursor: pointer;
}


</style>
