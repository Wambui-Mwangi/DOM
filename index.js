document.body.style.backgroundColor='silver'           //changed background color to silver

document.getElementById('title').style.color='green'   //changed h1 title to green

const h3Elements = document.querySelectorAll('h3');    //changed h3 to uppercase
h3Elements.forEach((h3) => {
  h3.style.textTransform = 'uppercase';
});


// Add one more fruit to the fruits list
var fruits = document.getElementById('fruList')
var newFruit = document.createElement('li')
newFruit.textContent = 'PawPaw';
fruits.appendChild(newFruit)

// Add one more vegetable to the vegetables list
var vegies = document.getElementById('vegList')
var newVegie = document.createElement('li');
newVegie.textContent = 'Carrots';
vegies.appendChild(newVegie)