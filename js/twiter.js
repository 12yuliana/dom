var body=document.querySelector('body')
console.log(body)
var main=document.createElement('main');
body.appendChild(main);
//
const ima= document.querySelectorAll('.demo-class');
var imagen= document.createElement('div');
imagen.classList.add('.image')
main.appendChild(imagen)
var img = document.createElement('img');
imagen.appendChild(img)
img.setAttribute('src', 'img/pajarito.png');
//
const di= document.querySelectorAll('.demo-class');
console.log(di);
var democlass3= document.createElement('div');
democlass3.classList.add('.conty')
console.log(democlass3)
main.appendChild(democlass3)
//
const text= document.querySelectorAll('.demo-class');
var palabras= document.createElement('p');
palabras.classList.add('.container')
main.appendChild(palabras)
const texto=document.createTextNode('Inicia Sesion en Twiter');
palabras.appendChild(texto)
//
const div= document.querySelectorAll('.demo-class');
console.log(div);
var democlass = document.createElement('div');
democlass.classList.add('.cont')
console.log(democlass)
main.appendChild(democlass)

//
const inicio=document.querySelectorAll('demo-class')
var button= document.createElement('button')
button.classList.add('inicio')
democlass.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
//style
imagen.style.textAlign='center'
body.style.backgroundColor='247, 241, 186'
main.style.backgroundColor='black'
main.style.marginLeft='10%'
main.style.marginTop='20px'
main.style.marginRight='10%'
palabras.style.color='white'
palabras.style.fontSize='30px'
palabras.style.textAlign='center'
button.style.backgroundColor='white'
button.style.borderRadius='30px'
button.style.width='20%'
button.style.height='40px'
button.style.marginTop='10px'
button.style.border='transparent'
democlass.style.textAlign='center'
//Iniciar Sesion En Google
const texto1=document.createTextNode('Iniciar Sesion En Google')
button.appendChild(texto1)
//
const div1= document.querySelectorAll('.demo-class');
console.log(div);
var democlass1 = document.createElement('div');
democlass1.classList.add('.contt')
main.appendChild(democlass1)
//button 
const medio=document.querySelectorAll('demo-class')
var button= document.createElement('button')
button.classList.add('inicio')
democlass1.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
//Iniciar secion con Apple
const texto2=document.createTextNode('Iniciar secion con Apple')
button.appendChild(texto2)
button.style.width='20%'
button.style.height='40px'
button.style.borderRadius='30px'
button.style.backgroundColor='white'
button.style.marginTop='15px'
button.style.border='transparent'
democlass1.style.textAlign='center'
//Telefono o Correo Electronico
const div3= document.querySelectorAll('.demo-class');
var democlase = document.createElement('div');
democlase.classList.add('.contenido')
main.appendChild(democlase)
var input= document.createElement('input')
democlase.appendChild(input)
//
democlase.style.textAlign='center'
democlase.style.marginTop='15px'
input.style.backgroundColor='transparent'
input.placeholder='Telefono o Correo Electronico'
democlase.color='white'
input.style.width='20%'
input.style.height='40px'
input.style.textAlign='center'
input.style.color='white'
//siguiente
var demo = document.createElement('div');
demo.classList.add('.appe')
main.appendChild(demo)
//button 
const intermedio=document.querySelectorAll('demo-class')
var button= document.createElement('button')
button.classList.add('sigiente')
demo.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
const wit =document.createTextNode('Siguiente')
button.appendChild(wit)
//
demo.style.textAlign='center'
demo.style.marginTop='15px'
button.style.width='20%'
button.style.height='40px'
button.style.borderRadius='30px'
button.style.backgroundColor='white'

//olvido su contraseña
var forgot = document.createElement('div');
forgot.classList.add('.apple')
main.appendChild(forgot)
//button 
const final=document.querySelectorAll('demo-class')
var button= document.createElement('button')
button.classList.add('final')
forgot.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
const modified =document.createTextNode('¿ Has Olvidado Tu Contraseña?')
button.appendChild(modified)
//
forgot.style.textAlign='center'
forgot.style.marginTop='15px'
button.style.width='20%'
button.style.height='40px'
button.style.borderRadius='30px'
button.style.backgroundColor='transparent'
button.style.color='white'
button.style.borderColor='white'
//no tienes cuenta
var bill = document.createElement('div');
bill.classList.add('.bill')
main.appendChild(bill)
//
const registar=document.querySelectorAll('demo-class')
var letras= document.createElement('p')
letras.classList.add('unregistered')
bill.appendChild(letras)
const cont =document.createTextNode('¿no te has registrado todavia?')
letras.appendChild(cont)

//
const regis=document.querySelectorAll('demo-class')
var letras1= document.createElement('p')
letras1.classList.add('register')
bill.appendChild(letras1)

const conte =document.createTextNode('Registrate')
letras1.appendChild(conte)
//
bill.style.display='flex'
bill.style.marginLeft='40%'
bill.style.marginTop='15px'
letras.style.color='white'
letras.style.fontSize='15px'
letras1.style.color='aqua'
letras1.style.fontSize='15px'

















