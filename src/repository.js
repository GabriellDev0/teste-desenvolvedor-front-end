export default async function getAddresses(cep){
    try{
        const link = `https://viacep.com.br/ws/${cep}/json/`

        const response = await fetch(link)
        const responseJSON = await response.json();

        return responseJSON;
    }catch(error){
        alert("Algum do(s) endereço(s) não foram encontrado(s)")
    }
}