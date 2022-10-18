function getRandomColour(){
    var newColor = Math.floor(Math.random()*16777215).toString(16);
    return newColor;
  }
  
  function changeColor1(){
    var elem1 = document.getElementById("films");
    elem1.style.color = "#" + getRandomColour();
    elem1.style.background = "#" + getRandomColour();
  }
  function changeColor2(){
    var elem2 = document.querySelector('#kyiv');
    elem2.style.color = "#" + getRandomColour();
    elem2.style.background = "#" + getRandomColour();
  }
   
  function add() {
    document.getElementById("photo").innerHTML = "<img src = \"https://unsplash.com/photos/iMhFpP0laGw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8a3lpdnxlbnwwfHx8fDE2NjMxMDA3MTg&force=true\" alt=\"Photo of Kyiv\"" +
        "height =\"500\" width=\"800\">";
    document.getElementById("add").value = "Add";
  }
  
  function max() {
    document.getElementById('photo').innerHTML = "<img src = \"https://unsplash.com/photos/iMhFpP0laGw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8a3lpdnxlbnwwfHx8fDE2NjMxMDA3MTg&force=true\"" +
        "alt=\"Photo of Kyiv\" height = \"700\" width = \"1000\">";
    document.getElementById("increase").value = "Increase";
  }
  
  function min(){
    document.getElementById('photo').innerHTML = "<img src = \"https://unsplash.com/photos/iMhFpP0laGw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8a3lpdnxlbnwwfHx8fDE2NjMxMDA3MTg&force=true\"" +
        "alt=\"Photo of Kyiv\" height = \"300\" width = \'600\'>";
    document.getElementById("reduce").value = "Reduce";
  }
  
  function del() {
    document.getElementById("photo").innerHTML = "<img src=\"\">";
    document.getElementById("delete").value = "Delete";
  }
  
  