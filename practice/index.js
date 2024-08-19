let count = 0;
const increaseBtn = document.getElementById("increaseBtn")
const resetBtn = document.getElementById("resetBtn")
const decreaseBtn = document.getElementById("decreaseBtn")

increaseBtn.onclick = function (){
count++
counter.textContent = count
}
decreaseBtn.onclick = function (){
count--
counter.textContent = count
}
resetBtn.onclick = function (){
count = 0
counter.textContent = count
}
 