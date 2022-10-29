let check3 = true;
const btn = document.querySelector('#check');

btn.addEventListener('click', ( ) => {
let target = document.querySelector('#text');
  if (check3) {
    check3 = false;
    target.style.backgroundColor = '#ff0000';
  } else {
    check3 = true;
    target.style.backgroundColor = '';
  }
});
/*
function changeBackgroundColor(text) {
  // ここに背景色を変える処理を書く。
  if(check) {
    var obj = document.getElementById(text);
    obj.style.backgroundColor = '#ff0000'
  }
  
}*/
