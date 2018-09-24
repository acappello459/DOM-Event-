var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')

// #1
box1.addEventListener('click',function(){
  box1.innerHTML = "I'm right!"
})
box2.addEventListener('click',function(){
  box2.innerHTML = "No, I'm right"
})

// #2
box3.addEventListener('mouseover',function(){
  box3.innerHTML = "Hey I said don't hover me"
})
