const happyButton = document.getElementById('btn-happiness');
const sadnessButton = document.getElementById('btn-sadness');
const image = document.querySelector('.img');

happyButton.addEventListener("click", function(){
  happyButton.disabled = 'true'
  sadnessButton.disabled = false
  image.style.display = 'inline'
})

sadnessButton.addEventListener("click", function(){
  image.style.display = 'none'
  sadnessButton.disabled = 'true'
  happyButton.disabled = false
})