let cart={}

const placeholder="food_placeholder.png"

const menu=[

{
title:"Pizza",
items:[
["Cheesy Loaded Pizza",180,"cheese_pizza.png"],
["Paneer Pizza",180,"paneer_pizza.png"],
["Veggie Pizza",180,"veggie_pizza.png"],
["Mushroom Pizza",150,"mushroom_pizza.png"],
["Pepprika Cheese Pizza",170,"pepprika_pizza.png"],
["Olive & Corn Pizza",170,"olive_corn_pizza.png"],
["Corn Cheese Pizza",180,"corn_pizza.png"],
["Margarita Pizza",150,"margarita_pizza.png"]
]
},

{
title:"Chef's Special Pizza",
items:[
["Swarga Special Calzone Pizza",210,"calzone_pizza.png"],
["Peri Peri Paneer Pizza",210,"peri_peri_pizza.png"],
["Farm House Pizza",210,"farmhouse_pizza.png"],
["Tandoori Pizza",210,"tandoori_pizza.png"],
["Mushroom Oliv Cheese Pizza",220,"mushroom_olive_pizza.png"],
["Volcano Pizza",220,"volcano_pizza.png"],
["Peppy Paneer Pizza",210,"peppy_paneer_pizza.png"]
]
},

{
title:"Sandwich",
items:[
["Extra Cheese",10,placeholder],
["Veg Grill Sandwich",100,"veg_sandwich.png"],
["Cheese Corn Sandwich",130,placeholder],
["Paneer Schezwan Sandwich",140,placeholder],
["Chilly Cheese Toast",90,placeholder],
["Paneer Peri Peri Sandwich",140,placeholder]
]
},

{
title:"Burger",
items:[
["Veggie Burger",110,placeholder],
["Cheesy Veggie Burger",120,placeholder],
["Paneer Burger",130,placeholder]
]
},

{
title:"Momos",
items:[
["Steamed Veg Momos",80,placeholder],
["Steamed Paneer Momos",120,placeholder],
["Steamed Corn Cheese Momos",129,placeholder],
["Fried Veg Momos",95,placeholder],
["Fried Paneer Momos",110,placeholder],
["Fried Corn Cheese Momos",140,placeholder],
["Peri Peri Veg Momos",100,placeholder],
["Peri Peri Paneer Momos",130,placeholder],
["Peri Peri Corn Cheese Momos",150,placeholder],
["Kurkure Momos",150,placeholder]
]
},

{
title:"Fries and Nachos",
items:[
["Salt and Pepper French Fries",90,placeholder],
["Peri Peri Fries",100,placeholder],
["Cheesy Fries",110,placeholder],
["Veg Nuggets",90,placeholder],
["Aloo Tikki",90,placeholder],
["Onion Rings",100,placeholder],
["Veg Cutlets",80,placeholder],
["Nachos with Salsa",100,placeholder],
["Cheesy Nachos",130,placeholder]
]
},

{
title:"Sweet Corn",
items:[
["Salted Sweet Corn",50,placeholder],
["Salt Pepper Sweet Corn",55,placeholder],
["Peri Peri Sweet Corn",60,placeholder],
["Butter Spicy Sweet Corn",60,placeholder]
]
},

{
title:"Swarga Special Falooda",
items:[
["Rose Falooda",130,placeholder],
["Chocolate Falooda",130,placeholder],
["Strawberry Falooda",130,placeholder],
["Mango Falooda",130,placeholder]
]
},

{
title:"Tortilla Wraps",
items:[
["Tawa Veggie Wrap",100,placeholder],
["Spicy Paneer Wrap",140,placeholder],
["Falafel Wrap",120,placeholder],
["Smoky Mushroom Wrap",120,placeholder],
["Hummus Rainbow Wrap",130,placeholder]
]
},

{
title:"Pasta",
items:[
["White Sauce Pasta",120,placeholder],
["Red Sauce Pasta",120,placeholder],
["Pink Sauce",120,placeholder],
["Mac and Cheese",120,placeholder]
]
},

{
title:"Mojito",
items:[
["Virgin Mojito",119,placeholder],
["Blue Lagoon",139,placeholder],
["Green Apple",149,placeholder]
]
},

{
title:"Cold Drinks",
items:[
["Sprite",50,placeholder],
["Coke",50,placeholder],
["Thums Up",50,placeholder],
["Mazaa",50,placeholder],
["Predator Energy Drink",80,placeholder],
["Masala Coke",60,placeholder]
]
}

]

function buildMenu(){

let container=document.getElementById("menuContainer")

menu.forEach(section=>{

let h=document.createElement("h2")
h.innerText=section.title
container.appendChild(h)

let grid=document.createElement("div")
grid.className="menu-grid"

section.items.forEach(item=>{

let name=item[0]
let price=item[1]
let img=item[2]

let div=document.createElement("div")
div.className="item"

div.innerHTML=`

<div class="food-img">
<img src="assets/${img}">
</div>

<h3>${name}</h3>

<p class="price">₹${price}</p>

<div class="menu-controls">

<button class="add-btn" onclick="addItem('${name}',${price},this)">Add</button>

<div class="qty-control" id="${name}">
<button onclick="decrease('${name}',this)">-</button>
<span class="qty">1</span>
<button onclick="increase('${name}')">+</button>
</div>

</div>
`

grid.appendChild(div)

})

container.appendChild(grid)

})

}

window.onload=function(){

buildMenu()

setTimeout(()=>{
document.getElementById("kannadaName").classList.add("kannada-show")
},500)

setTimeout(()=>{
document.getElementById("woodBoard").classList.add("wood-show")
},1200)

}

function showMenu(){

let home=document.getElementById("home")
let menu=document.getElementById("menuPage")

home.classList.add("fade-out")

setTimeout(()=>{

home.style.display="none"
menu.style.display="block"

setTimeout(()=>{
menu.classList.add("menu-show")
},50)

},600)

document.getElementById("kannadaName").style.display="none"
document.getElementById("woodBoard").style.display="none"

document.getElementById("cartButton").style.display="block"

}

function addItem(name,price,btn){

cart[name]={qty:1,price:price}

btn.style.display="none"

let control=btn.nextElementSibling
control.style.display="flex"

control.querySelector(".qty").innerText=1

updateUI()

}

function increase(name){

cart[name].qty++

document.getElementById(name).querySelector(".qty").innerText=cart[name].qty

updateUI()

}

function decrease(name){

cart[name].qty--

if(cart[name].qty<=0){

delete cart[name]

let control=document.getElementById(name)
control.style.display="none"
control.previousElementSibling.style.display="block"

}else{

document.getElementById(name).querySelector(".qty").innerText=cart[name].qty

}

updateUI()

}

function updateUI(){

let cartItems=document.getElementById("cartItems")
cartItems.innerHTML=""

let count=0

for(let item in cart){

let data=cart[item]
let total=data.qty*data.price

count+=data.qty

let div=document.createElement("div")
div.className="cart-row"

div.innerHTML=`

<div class="cart-info">${item}</div>

<div class="qty-area">

<div class="cart-qty">
<button onclick="decrease('${item}')">-</button>
<span>${data.qty}</span>
<button onclick="increase('${item}')">+</button>
</div>

<div class="item-total">₹${total}</div>

</div>
`

cartItems.appendChild(div)

}

document.getElementById("cart-count").innerText=count

let empty=document.getElementById("emptyCart")
let orderBtn=document.getElementById("orderBtn")

if(count==0){
empty.style.display="block"
orderBtn.style.display="none"
}else{
empty.style.display="none"
orderBtn.style.display="block"
}

}

function openCart(){

document.getElementById("menuPage").style.display="none"
document.getElementById("cartPage").style.display="block"

}

function closeCart(){

document.getElementById("cartPage").style.display="none"
document.getElementById("menuPage").style.display="block"

}

function confirmOrder(){

let table=document.getElementById("tableSelect").value

if(table==""){
alert("Select table")
return
}

let message="*TABLE : "+table+"*%0A%0A"

for(let item in cart){

let data=cart[item]
message+=item+" x"+data.qty+"%0A"

}

let phone="9945556636"

window.open(`https://wa.me/${phone}?text=${message}`)

}

function searchMenu(){

let input=document.getElementById("search").value.toLowerCase()

let items=document.querySelectorAll(".item")

items.forEach(i=>{

let text=i.innerText.toLowerCase()
i.style.display=text.includes(input)?"block":"none"

})

}
