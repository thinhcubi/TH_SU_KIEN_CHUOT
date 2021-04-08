let imgObj = null;
  //bien khai bao tren la bien rong
window.onload = init;
function init() {
    imgObj = document.getElementById("myimage")
    imgObj.style.position= "relative" ;
    imgObj.style.left=0
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';
}