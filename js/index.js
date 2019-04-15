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

    // banner
    function Banner_transform(img,content,dot, ban, active = "active", time = 2000) {
        // 获取元素
        let imgs = document.querySelectorAll(img);
        let cont = document.querySelectorAll(content)
        let dots = document.querySelectorAll(dot);
        let banner = document.querySelector(ban);
        // 获取轮播图的宽度
        let widths = parseInt(getComputedStyle(banner).width);
        // 定义双下标,now:当前页面下标,next:下一张页面下标
        let now = 0;
        let next = 0;
        // 定义开关
        let flag = true;
        // 设置图片默认显示第一张
        imgs.forEach(val => {
            val.style.left = widths + "px";
        });
        imgs[0].style.left = 0;
        cont[0].style.opacity = 1;
        // 设置轮播点默认显示第一个
        dots[0].classList.add(active);
        // 自动轮播
        let t = setInterval(move, time);

        function move() {
            next = next === imgs.length - 1 ? 0 : ++next;
            imgs[now].style.left = 0;
            imgs[next].style.left = widths + "px";
            animate(imgs[now], {left: -widths});
            animate(imgs[next], {left: 0}, () => {
                dots.forEach(val => {
                    val.classList.remove(active);
                });
                dots[next].classList.add(active);
                cont.forEach(function(item){
                    item.style.opacity = 0
                })
                cont[next].style.opacity = 1;
            });
            now = next;
        }
        // 鼠标移入时停止轮播
        banner.onmouseenter = function(){
            clearInterval(t)
        }
        // 鼠标移出时继续轮播
        banner.onmouseleave = function(){
            t = setInterval(move, time);
        }
        // 点击轮播点，会出现对应的图片
        dots.forEach((val, index) => {
            val.onclick = () => {
                dots.forEach((val, index) => {
                    imgs[index].style.left = widths + "px";
                    val.classList.remove(active);
                });
                imgs[index].style.left = 0;
                val.classList.add(active);
                now = next = index;
            };
        });
        
    }
    Banner_transform(".banner-box",".banner-content",".banner-dot",".big-banner")

    //轮播文字


}