function displayList(){
  //alert("test");
  //test = document.getElementById("test");
  var fruits = document.getElementById("fruits");
  var p_element = fruits.querySelector("p");
  var li_element = document.createElement('li');
  //console.log("test");
  fruits.replaceChild(li_element, p_element);
}