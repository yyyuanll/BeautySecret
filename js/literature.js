window.onload = function(){
    //获取需要悬浮的对象
    let show = document.getElementById("origin");
    let show2 = document.getElementById("order");
    //获取被隐藏的菜单
    let menu = document.getElementById("menu");
    let menu2 = document.getElementById("menu2");

    //给show添加鼠标悬浮事件
    show.onmouseover = function(){
        //改变菜单的内联样式display为block
        menu.style.display = "block";
    }
    show2.onmouseover = function(){
        //改变菜单的内联样式display为block
        menu2.style.display = "block";
    }
    //
    show.onmouseout = function(){
        //获取菜单栏的坐标值
        let menuX = menu.offsetLeft+menu.offsetWidth;
        let menuY = menu.offsetTop+menu.offsetHeight;

        //获取鼠标的坐标值
        let event = window.event;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        if(mouseX<menuX || mouseX>menuX || mouseY<menuY || mouseY>menuY){
            menu.style.display = "none";
        }
    }

    show2.onmouseout = function(){
        let menuX = menu2.offsetLeft+menu2.offsetWidth;
        let menuY = menu2.offsetTop+menu2.offsetHeight;

        let event = window.event;
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        if(mouseX<menuX || mouseX>menuX || mouseY<menuY || mouseY>menuY){
            menu2.style.display = "none";
        }
    }
    //分别给menu对象绑定鼠标悬浮和鼠标离开事件
    menu.onmouseover = function(){
        menu.style.display = "block";
    }
    menu.onmouseleave = function(){
        menu.style.display = "none";
    }
    menu2.onmouseover = function(){
        menu2.style.display = "block";
    }
    menu2.onmouseleave = function(){
        menu2.style.display = "none";
    }
}