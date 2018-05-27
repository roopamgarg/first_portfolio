
let el = Array.from(document.querySelectorAll(".navigation__list--item"));
console.log(Array.isArray(el));


for(let i=0;i<el.length;i++){
    el[i].addEventListener("click",function(){
        document.querySelector(".navigation__checkbox").checked = false;
    })
}