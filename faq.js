const clickBtns=document.querySelectorAll(".click-button");
const collapseContent=document.getElementsByClassName("collapse-content");


clickBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.currentTarget.children[1].classList.remove("make-hide");
    })
})