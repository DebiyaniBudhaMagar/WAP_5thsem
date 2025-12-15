/*const btn_click_me = document.getElementById('btn_click_me')
const nav = document.getElementById('nav')
const burger = document.getElementById('menu')
const modal_btn = document.querySelector('.modal_container')
const modal_close = document.getElementById('modal')
const inactive = document.querySelector('.modal_overlay')
*/

const $btn_click_me = $('btn_click_me')
const $modal_btn = $('.modal_container')
const $modal_close = $('modal')
const $inactive = $('.modal_overlay')

btn_click_me.addEventListener("mouseover",function(){
    btn_click_me.style.backgroundColor = "lightblue"
})
//hover effect
$btn_click_me.addEventListener("mouseout",function(){
    btn_click_me.style.backgroundColor = ""
})
//dyanamic menues
burger.addEventListener("click",function(){
    if(nav.style.display === "flex")
        nav.style.display = "none"
    else
        nav.style.display = "flex"

})

//modal 

btn_click_me.addEventListener("click",function(){
    modal_btn.style.display = 'flex'
    inactive.style.display = 'flex'
})

modal_close.addEventListener("click",function(){
    modal_btn.style.display = 'none'
    inactive.style.display = 'none'
})

