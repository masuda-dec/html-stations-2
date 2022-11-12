function displayList(){
  //alert("test");
  //test = document.getElementById("test");
  var fruits = document.getElementById("fruits");
  //var p_element = fruits.querySelector("p");

  var div_element = document.createElement('div');
  var ul_element = document.createElement('ul');
  var li_element1 = document.createElement('li');
  var li_element2 = document.createElement('li');
  var li_element3 = document.createElement('li');
  li_element1.textContent = "リンゴ";
  li_element2.textContent = "イチゴ";
  li_element3.textContent = "ブドウ";

  ul_element.appendChild(li_element1);
  ul_element.appendChild(li_element2);
  ul_element.appendChild(li_element3);
  div_element.appendChild(ul_element);

  fruits.replaceWith(div_element);
  
}