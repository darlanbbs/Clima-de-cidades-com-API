let min = document.querySelector('.min')
let temp = document.querySelector('.temp')
let max = document.querySelector('.max')
let cidade = document.querySelector('.cidade')
let form = document.querySelector('.forms')
let loader = document.querySelector('.loader')
let hide = document.querySelector('.hide')
let graus = document.querySelector('.graus')

form.addEventListener('submit',async (e)=>{
    var value = document.querySelector('.input').value
    limpar()
    try{
         loading()
    e.preventDefault()
    let site = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`
    let response = await fetch(site)
    let json = await response.json()
    
    let jsonObj = {
        tempMinima:json.main.temp_min,
        temp:json.main.temp,
        tempMax:json.main.temp_max,
        nome:json.name,
        country:json.sys.country,
        cod:json.cod
    }
    hide.style.display = 'flex'
    graus.style.display = 'flex'
    min.innerHTML = jsonObj.tempMinima
    temp.innerHTML = jsonObj.temp
    max.innerHTML = jsonObj.tempMax
    cidade.innerHTML = `${jsonObj.nome},${jsonObj.country}`
    console.log(jsonObj)
    }catch(error){
        erro()
        limpar()
    }
    limparLoading()
})
function limpar(){
    hide.style.display = 'none'
    graus.style.display = 'none'
}
function loading(){
    loader.style.display = 'flex'
}
function limparLoading(){
    loader.style.display = 'none'
}
function erro(){
    cidade.innerHTML = 'Lugar não encontrado'
}
