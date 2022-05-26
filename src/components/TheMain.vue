<template>
        <main class='main'>
            <TheSideBar/>
            <div class='main-content'>
                <div class='main-content-form'>
                    <div class='main-content-form-info'>
                        <input class='main-content-input-cep' v-model="cep" type="number" placeholder="Insira o CEP">
                        <button class='main-content-form btn' @click.prevent="addCep">Adicionar Endereço</button>
                        <div  v-for="(item) in ceps" v-bind:key = "item" class="main-content-form-cep">
                                <img src="@/assets/icone-lugar.svg" alt="Ícone de Localização">
                                <p class='main-content-form-cep-text'><span>CEP </span>{{item}}</p>
                        </div>
                        <button class='main-content-form-gerate-address btn' @click.prevent="getCep">Gerar Endereços</button>
                    </div>
                </div>
                <div class='main-content-result'>
                        <div class="main-content-result-card" v-for="(item, index) in address" v-bind:key = "item">
                            <div class='main-content-result-card-left'>
                                <img src="@/assets/icone-lugar.svg" alt="Ícone de Localização">
                               <div class='main-content-result-card-left-info'>
                                   <h3>{{item.logradouro}}, {{item.complemento}}, {{item.bairro}}</h3>
                                   <p>{{item.localidade}} - {{item.uf}}</p>
                               </div> 
                            </div>
                            <div class='main-content-result-card-right'>
                                <p>{{item.cep}}</p>
                                <img @click.prevent="deleteAddress(index)" src="@/assets/icone-lixo.svg" alt="Ícone de demonstração para excluir o item. Uma lixeira.">
                            </div>      
                        </div>
                </div>  
            </div>
        </main>
</template>

<script>
import TheSideBar from "@/components/TheSideBar.vue";

export default {
    name: "TheMain",
    components:{
        TheSideBar
    },
    data(){
        return{
            cep: null,
            ceps: [],
            address: [],
        }
    },
    methods:{
        addCep(){
               this.ceps.push(this.cep)
        },
        getCep(){
                for(const cep of this.ceps){
                    this.getAddress(cep)
                }       
        },
        async getAddress(cep){
            const link = `https://viacep.com.br/ws/${cep}/json/`

            const response = await fetch(link)
            const responseJSON = await response.json();

            return this.address.push(responseJSON) ;
        },
        deleteAddress(index){
            this.address.splice(index)
        }
    }
}
</script>

<style scoped>
.main{
    display: grid;
    grid-template-columns: auto 1fr;   
}

.main-content{
    background-color: var(--neutral-color-primary);
    padding: 60px 60px;
    display: flex;
    flex-direction: column;
    gap: 130px;
}

.main-content-form-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
    gap: 30px;
    position: relative;
}   

.main-content-form-info::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--single-color);
    bottom: -80px;
}   

.main-content-input-cep{
    padding: 15px 60px 15px 15px;
    border-radius: 10px;
    border: 1px solid var(--neutral-color-tertiary);
    outline: 1px solid var(--neutral-color-tertiary);
    text-align: start;
    -webkit-appearance: none;
    color: var(--neutral-color-tertiary2);
    font-size: var(--font-sizeM);
    font-weight: var(--font-normal);    
}
.main-content-form .btn{
    position: relative;
}

.main-content-form.btn::before{
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    background: url('@/assets/icone-plus.svg') no-repeat;
    left: 30px;
    top: 13px;
}
.main-content-form-cep{
    display: flex;
    align-items: center;
    gap: 15px;
    grid-column: span 2;
}
.main-content-form-cep-text > span{
    color: var(--single-color);
    font-weight: var(--font-bold);
}

.main-content-form-cep-text{
    color: var(--neutral-color-tertiary2);
    font-weight: var(--font-bold);
}

.main-content-form-gerate-address{
    grid-column: 2;
}
/* RESULT */
.main-content-result-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    box-shadow: 2px 10px 10px 1px rgb(0 0 0 / 10%);
    max-width: 600px;
}

.main-content-result-card-left{
   display: flex;
   gap: 30px;
   padding: 30px;
}
.main-content-result-card-left-info h3{
    color: var(--single-color);
    font-weight: var(--font-bold);
    font-size: var(--font-sizeG);
}
.main-content-result-card-left-info p{
    color: var(--single-color);
    font-weight: var(--font-normal);
    font-size: var(--font-sizeM);
}
.main-content-result-card-right{
  display: flex;
  gap: 60px;
  padding-left: 30px;
  width: 230px;
}
.main-content-result-card-right p{
    color: var(--primary-color);
    position: relative;
}

.main-content-result-card-right p::after{
    content: '';
    position: absolute;
    width: 1px;
    height: 100px;
    background-color: var(--neutral-color-tertiary2);
    top: -40px;
    right: -30px;
}

/* CHROME AND OTHERS...*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* FIREFOX */
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>