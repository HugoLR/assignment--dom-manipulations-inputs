document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1
      var clearText = document.querySelector('.ex1-text').value
      if(clearText.length > 0){
        document.querySelector('.ex1-text').value = " "
      }
  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
    var paragraph = document.querySelector('.flash-message')
    var inputModify = document.querySelector('.ex2-text').value
    if(inputModify.length < 6) {
      paragraph.classList.add('invalid')
      paragraph.textContent = 'Input no longer enough'
    } else {
      paragraph.classList.remove('invalid')
      paragraph.classList.add('valid')
      paragraph.textContent = 'Field Valid'
    }
})



document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
  var sum = 0;
  var checkBoxes = document.querySelectorAll('.item-input')
  for(var i = 0; i < checkBoxes.length; i++){
    if (checkBoxes[i].checked == true) {
      sum = sum + parseInt(checkBoxes[i].value);
     var total = document.querySelector('.sum-total');
     total.textContent =  "$ " + sum
    }
  }
})

document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
  var imgContainer = document.querySelector('.img-box')
  var data = document.querySelector('.selection')
  var model = document.querySelector('.model')
  var msrp = document.querySelector('.msrp')
  var mpg = document.querySelector('.mpg')
  var edmund = document.querySelector('.edmunds')
  var optionArray = document.querySelectorAll('option')


  for (var i = 0; i < optionArray.length; i++) {

    if(data.selectedIndex === 0 && optionArray[i].value === "Mini Cooper"){
      imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
      model.textContent = optionArray[i].value
      msrp.textContent = optionArray[i].dataset.msrp
      mpg.textContent = optionArray[i].dataset.mpg
      edmund.textContent = optionArray[i].dataset.edmunds
    } else if (data.selectedIndex == 1 && optionArray[i].value === "Mazda 3" )  {
      imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
      model.textContent = optionArray[i].value
      msrp.textContent = optionArray[i].dataset.msrp
      mpg.textContent = optionArray[i].dataset.mpg
      edmund.textContent = optionArray[i].dataset.edmunds
    }else if (data.selectedIndex == 2 && optionArray[i].value === "Dodge Charger") {
      imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
      model.textContent = optionArray[i].value
      msrp.textContent = optionArray[i].dataset.msrp
      mpg.textContent = optionArray[i].dataset.mpg
      edmund.textContent = optionArray[i].dataset.edmunds
    }
  }

})
