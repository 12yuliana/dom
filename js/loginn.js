var body = document.querySelector('body')
var main= document.createElement('main')
body.appendChild(main)
//
const div= document.querySelectorAll('.demo-class')
var democlass= document.createElement('div')
democlass.classList.add('.conty')
main.appendChild(democlass)
//
democlass.style.display='flex'
democlass.style.marginTop='30px'

const ima= document.querySelectorAll('.demo-class');
var imagen= document.createElement('div');
imagen.classList.add('.image')
democlass.appendChild(imagen)
var img = document.createElement('img');
imagen.appendChild(img)
img.setAttribute('src', 'img/logo.png');
//
const div1= document.querySelectorAll('.demo-class')
var democlas= document.createElement('div')
democlas.classList.add('.contenido')
democlass.appendChild(democlas)
const tienda=document.querySelectorAll('demo-class')
var p=document.createElement('p')
p.classList.add('.tienda')
democlas.appendChild(p)
const store=document.createTextNode('Tienda Virtual')
p.appendChild(store)
//


//
const div2=document.querySelectorAll('.demo-class')
var tool=document.createElement('div')
tool.classList.add('.herramienta')
democlass.appendChild(tool)
const herramienta=document.querySelectorAll('demo-class')
var p=document.createElement('p')
p.classList.add('.herramiesntas')
tool.appendChild(p)
const dh=document.createTextNode('Incio')
p.appendChild(dh)
//

//
const div3=document.querySelectorAll('.demo-class')
var portal=document.createElement('div')
portal.classList.add('.portal')
democlass.appendChild(portal)
const portales=document.querySelectorAll('demo-class')
var p=document.createElement('p')
p.classList.add('.porta')
portal.appendChild(p)
const porcta=document.createTextNode('Productos')
p.appendChild(porcta)
//

//
const div4=document.querySelectorAll('.demo-class')
var contacto=document.createElement('div')
contacto.classList.add('.contacto')
democlass.appendChild(contacto)
const conct=document.querySelectorAll('demo-class')
var p=document.createElement('p')
p.classList.add('.conctatos')
contacto.appendChild(p)
const contantenos=document.createTextNode('Info de envios')
p.appendChild(contantenos)

//
const mas=document.querySelectorAll('.demo-class')
var contacto=document.createElement('div')
contacto.classList.add('.contacto')
democlass.appendChild(contacto)
const concte=document.querySelectorAll('demo-class')
var p=document.createElement('p')
p.classList.add('.con')
contacto.appendChild(p)
const conta=document.createTextNode('Mas')
p.appendChild(conta)

//
const foto= document.querySelectorAll('.demo-class');
var imagen= document.createElement('div');
imagen.classList.add('.image')
democlass.appendChild(imagen)
var img = document.createElement('img');
imagen.appendChild(img)
img.setAttribute('src', 'img/whas.webp');
//
imagen.style.display='flex'
imagen.style.marginLeft='50%'
img.style.height='40%'
img.style.margin='10%'
var img = document.createElement('img');
imagen.appendChild(img)
img.setAttribute('src', 'img/facebook.webp');
img.style.height='40%'
img.style.margin='10%'
var img = document.createElement('img');
imagen.appendChild(img)
img.setAttribute('src', 'img/instagram.webp');

img.style.margin='10%'
img.style.height='40%'
//


const buton= document.querySelectorAll('.demo-class');
var dclass= document.createElement('div');
dclass.classList.add('.botoon')
democlass.appendChild(dclass)
var img = document.createElement('img');
dclass.appendChild(img)
img.setAttribute('src', 'img/person.svg');
//button
const divi= document.querySelectorAll('.demo-class');
var democlase = document.createElement('div');
democlase.classList.add('.contenido')
dclass.appendChild(democlase)
//

const medio=document.querySelectorAll('demo-class')
var button= document.createElement('button')
button.classList.add('inicio')
dclass.appendChild(button)
button.addEventListener('click', () => {
    console.log('hisites click');
})
const texto2=document.createTextNode('Iniciar Sesion')
button.appendChild(texto2)
//style
// imagen.style.marginLeft='100%'
button.style.backgroundColor='transparent'
button.style.border='transparent'
dclass.style.marginLeft='auto'
dclass.style.display='flex'
img.style.width='20%'



