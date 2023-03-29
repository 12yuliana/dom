var body = document.querySelector('body')
console.log(body)
var header= document.createElement('header')
body.appendChild(header)
// body.style.backgroundColor="red"
var div = document.createElement('div')
console.log(div)
header.appendChild(div)
console.log(header)
body.appendChild(header)
// header.style.border = "4px solid yellow"

var h1 = document.createElement('h1')
console.log(h1);
div.appendChild(h1)
const texto = document.createTextNode('Tienda Virtual')
h1.appendChild(texto)
h1.style.marginTop = '30px'
h1.style.color = "white"
var p = document.createElement('p')
console.log(p)
div.appendChild(p)
const herramienta = document.createTextNode('Herramientas')
p.appendChild(herramienta)
p.style.color = 'white'
p.style.fontSize = '30px'
p.style.marginLeft = '50px'
var p = document.createElement('p')
div.appendChild(p)
const portal = document.createTextNode('Portal')
p.appendChild(portal)
p.style.color = 'white'
p.style.fontSize = '30px'
p.style.marginLeft = '50px'
var p = document.createElement('p')
div.appendChild(p)
const ferias = document.createTextNode('Ferias')
p.appendChild(ferias)
var p = document.createElement('p')
div.appendChild(p)
const contantenos = document.createTextNode('Contantenos')
p.appendChild(contantenos)
p.style.color = 'white'
p.style.fontSize = '30px'
var p = document.createElement('p')
div.appendChild(p)
const capacitaciones = document.createTextNode('Capacitaciones')
p.appendChild(capacitaciones)
p.style.color = 'white'
p.style.fontSize = '30px'
div.style.display = 'flex'
p.style.marginLeft = '50px'
p.style.color = 'white'
div.style.marginLeft = '50px'
div.style.marginRight = '50px'
header.style.marginLeft = '30px'
header.style.marginRight = '30px'
header.style.backgroundColor = 'black'
// div.style.backgroundImage=url("img/yulianaa.png")
var input1 = document.createElement('input')
div.appendChild(input1)
var button = document.createElement('button')
div.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
// button.placeholder='enviar'
button.style.height = '40px'
button.style.width = '25px'
button.style.marginTop = '29px'
input1.style.marginLeft = '20px'
// input1.style. borderRadius='30%'
// input1.style.width='80px'
input1.style.height = '30px'
input1.style.marginTop = '30px'
input1.style.backgroundColor = 'transparent'
input1.placeholder = 'Buscar Mercancia Nueva  '
input1.style.color = 'white'
// input1.style.marginTop='px'
//main
var main = document.querySelector('main')
console.log(main)
body.appendChild(main)
main.style.marginLeft='40px'
main.style.marginRight='40px'
// main.style.backgroundColor = 'gray'

var p =document.createElement('p')
main.appendChild(p)
const inicio=document.createTextNode('Inicio/Resgistro/Login')
p.appendChild(inicio)
p.style.color='gray'
p.style.fontSize='12px'
var h2 = document.createElement('h2')
console.log(h2)
main.appendChild(h2)
const resgistro = document.createTextNode('Registro/Login')
h2.appendChild(resgistro)
// var nuevo=document.querySelector('div')
// body.appendchild(nuevo)
var div=document.createElement('div')
main.appendChild(div)

// '''p0o'''
div.style.marginLeft='60px'
div.style.marginRight='400px'
var p = document.createElement('p')
console.log(p)
div.appendChild(p)
const numero = document.createTextNode('Numero de usuario o Direccion de Correo Electronico ')
p.appendChild(numero)
p.style.fontSize='20px'
var input = document.createElement('input')
div.appendChild(input)
var p = document.createElement('p')
div.appendChild(p)

const contraseña = document.createTextNode('Contraseña *')
p.appendChild(contraseña)
var input1 = document.createElement('input')
div.appendChild(input1)
input1.type='passeword'
h2.style.fontSize = '40px'
h2.style.fontFamily = 'arial'
// div.style.border = '6px solid yellow'
p.style.fontSize='20px'
input.style.width='80%'
input.style.height='30px'
input1.style.width='80%'
input1.style.height='30px'
var div=document.createElement('div')
main.appendChild(div)
div.style.marginLeft='30px'
// div.style.border='2px solid gray'
var radio=document.createElement('input')
div.appendChild(radio)
div.style.display='flex'
radio.type='checkbox'
radio.style.marginLeft='50px'
var p=document.createElement('p')
 div.appendChild(p)
const recuermade=document.createTextNode('Recuerdame')
p.appendChild(recuermade)
p.style.marginTop='22px'
var p=document.createElement('p')
div.appendChild(p)
const acceso=document.createTextNode('Acceso')
p.appendChild(acceso)
p.style.marginLeft='500px'
p.style.backgroundColor='blue'
p.style.height='30px'
var div=document.createElement('div')
main.appendChild(div)
// div.style.border='2px solid gray'
var p=document.createElement('p')
div.appendChild(p)
const olvidado=document.createTextNode('¿Has perdido tu contraseña?')
p.appendChild(olvidado)
p.style.color='blue'
var p=document.createElement('p')
div.appendChild(p)
const miembri=document.createTextNode('¿No eres miembro todavia? Registrate Ahora')
p.appendChild(miembri)
p.style.color='blue'
div.style.marginLeft='60px'
div.style.marginRight='200px'
div.style.backgroundImage=url(img/yuliana.png)







