function displayList(){
  //alert("test");
  //test = document.getElementById("test");
  var fruits = document.getElementById("fruits");
  const p_list = document.querySelectorAll("p");
  console.log(p_list);
  for (i in p_list){
    p_list[i].innerHTML = "<li>リンゴ</li>";
  }
}