const mon = document.getElementById("monedas")
const sele = document.getElementById("monedaConv");
const peso = document.getElementById("clp");
const tot = document.getElementById("total")
let dolar;
let euro;
let ipc;
let utm;
let bit;
let uf;
let valor = 0;

const getMonedas = async() => {
    try{
        let res = await fetch("https://mindicador.cl/api")
        let data = await res.json()
        
        mon.innerHTML =`
            <option value="${data.dolar.codigo}">${data.dolar.nombre}</option>
            <option value="${data.euro.codigo}">${data.euro.nombre}</option>
            <option value="${data.ipc.codigo}">${data.ipc.nombre}</option>
            <option value="${data.utm.codigo}">${data.utm.nombre}</option>
            <option value="${data.bitcoin.codigo}">${data.bitcoin.nombre}</option>
            <option value="${data.uf.codigo}">${data.uf.nombre}</option>
        `;
        dolar = data.dolar.valor;
        euro = data.euro.valor;
        ipc = data.ipc.valor;
        utm = data.utm.valor;
        bit = data.bitcoin.valor;
        uf = data.uf.valor;
       

    }catch(error){
        alert(error)
    }

}
getMonedas();

peso.addEventListener("input",calcular)
mon.addEventListener("change", calcular)

function calcular(){
    let pesosCLP = peso.value;
    if(mon.value == 'dolar'){

       valor = (pesosCLP / dolar).toFixed(2);
        tot.innerHTML = valor

    }else if(mon.value == 'euro'){

        valor = (pesosCLP / euro).toFixed(2);
        tot.innerHTML = valor
    
    }else if(mon.value == 'ipc'){

        valor = (pesosCLP / ipc).toFixed(2);
        tot.innerHTML = valor
        
    }else if(mon.value == 'utm'){

        valor = (pesosCLP / utm).toFixed(2);
        tot.innerHTML = valor
    
    }else if(mon.value == 'bitcoin'){
        valor = (pesosCLP / bit).toFixed(2);
        tot.innerHTML = valor
    }else{
        valor = (pesosCLP / uf).toFixed(2);
        tot.innerHTML = valor
    }


}
