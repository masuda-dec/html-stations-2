function displayList(){
  //alert("test");
  //test = document.getElementById("test");
  var fruits = document.getElementById("fruits");
  var ul_element = document.createElement('ul');
  var li_element1 = document.createElement('li');
  var li_element2 = document.createElement('li');
  var li_element3 = document.createElement('li');
  const p_list = document.querySelectorAll("p");
  
  li_element1.append('apple');
  li_element2.append('strobery');
  li_element3.append('grape');

  p_list[0].replaceWith(li_element1);
  p_list[1].replaceWith(li_element2);
  p_list[2].replaceWith(li_element3);

  fruits.appendChild(ul_element);
  ul_element.appendChild(li_element1);
  ul_element.appendChild(li_element2);
  ul_element.appendChild(li_element3);
}