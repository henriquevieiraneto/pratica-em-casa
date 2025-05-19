let contador01 = 0

const resultado01 = document.querySelector("#resultado01")

const btnAdiciona01 = document.querySelector("#btnAdicionar01")

btnAdiciona01.addEventListener("click", ()=>{
    if(contador01 <10){
    contador01++
    resultado01.textContent = `Nota 01: ${contador01}`}
})

const btnRemove01 = document.querySelector("#btnRemover01")

btnRemove01.addEventListener("click", ()=>{
    if(contador01 > 0){
    contador01--
    resultado01.textContent = `Nota 01: ${contador01}`}
})


let contador02 = 0

const resultado02 = document.querySelector("#resultado02")

const btnAdiciona02 = document.querySelector("#btnAdicionar02")

btnAdiciona02.addEventListener("click", ()=>{
    if(contador02 <10){
    contador02++
    resultado02.textContent = `Nota 02: ${contador02}`}
})

const btnRemove02 = document.querySelector("#btnRemover02")

btnRemove02.addEventListener("click", ()=>{
    if(contador02 > 0){
    contador02--
    resultado02.textContent = `Nota 02: ${contador02}`}
})


let contador03 = 0

const resultado03 = document.querySelector("#resultado03")

const btnAdiciona03 = document.querySelector("#btnAdicionar03")

btnAdiciona03.addEventListener("click", ()=>{
    if(contador03 <10){
    contador03++
    resultado03.textContent = `Nota 03: ${contador03}`}
})

const btnRemove03 = document.querySelector("#btnRemover03")

btnRemove03.addEventListener("click", ()=>{
    if(contador03 > 0){
    contador03--
    resultado03.textContent = `Nota 03: ${contador03}`}
})

//aqui adicionei uma variável para armazenar o elemento com o id mediaFinal
const mediaFinal = document.querySelector("#mediaFinal")

const btnResultado = document.querySelector("#btnResultado")
btnResultado.addEventListener("click" , () =>{
    //troquei o escopo do cálculo. Ele estava retornando o valor 0, porque fora do escopo, seu valor ainda era 0
    const total = (contador01 + contador02 + contador03)/3
    //aqui estou adicionando o texto junto com o resultado do total ao elemento armazenando na variável mediaFinal. O toFixed é para arredondar duas casas decimais apenas após a vírgula
    mediaFinal.textContent = `Média final: ${total.toFixed(2)}`
})