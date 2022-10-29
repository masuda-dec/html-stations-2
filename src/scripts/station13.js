function changeBackgroundColor() {
  let btn = document.getElementById('check');
  let target = document.getElementById('text');
  if (btn.checked) {
    target.style.backgroundColor = '#ff0000';
  } else {
    target.style.backgroundColor = '';
  }
}
  /*
function changeBackgroundColor(text) {
  // ここに背景色を変える処理を書く。
  if(check) {
    var obj = document.getElementById(text);
    obj.style.backgroundColor = '#ff0000'
  }
  
}*/
