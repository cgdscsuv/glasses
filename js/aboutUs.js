window.onload = function(){
    // 头部
    let head_item = document.querySelector(".store")
    let sub_nav = document.querySelector(".sub-nav")
    head_item.onmouseenter = function(){
        sub_nav.style.display =" block"
    }
    head_item.onmouseleave = function(){
        sub_nav.style.display = "none"
    }
}