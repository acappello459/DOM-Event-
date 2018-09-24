var box1 = document.getElementById('box1')
var message1 = document.getElementById('message1')
var box2 = document.getElementById('box2')
var message2 = document.getElementById('message2')
var box3 = document.getElementById('box3')
var writer = document.getElementById('writer')

// #1
box1.addEventListener('click',function(){
  message1.innerHTML = "I'm right!"
})
box2.addEventListener('click',function(){
  message2.innerHTML = "No, I'm right"
})

// #2
box3.addEventListener('mouseover',function(){
alert("I said don't hover over me!!")
})

document.addEventListener('keypress', function(e){
  writer.innerHTML += e.key
})
