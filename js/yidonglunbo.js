// 两城一家无缝轮播

{
    let bannerinner=document.querySelector(".banner-inner");
    let n=4;
    let banner=document.querySelector(".banner");
    let prev=document.querySelector(".prev");
    let next=document.querySelector(".next");
    // console.log(n);
    let dir="r";
    let t=setInterval(fn,2000);
        function fn(){
        if(dir==="r"){
            n++;
        }else if(dir==="l"){
            n--;
        };
        bannerinner.style.transition="all .5s";
        bannerinner.style.marginLeft=-295*n+"px";
    };

    bannerinner.addEventListener("transitionend",function(){
        if(n==12){
            bannerinner.style.transition="none";
            bannerinner.style.marginLeft="-1180px";
            n=4;
        }
        if(n===0){
            n=8;
            bannerinner.style.transition="none";
            bannerinner.style.marginLeft="-2360px";
        }
        flag=true;
        window.onblur=banner.onmouseover=function(){
        clearInterval(t);
        };
        window.onfocus=banner.onmouseout=function(){
            t=setInterval(fn,2000);
        };
    });
    let flag=true;
    next.onclick=rfn;
    function rfn(){
        dir="r";
        if(flag){
            flag=false;
            fn();
        }
    }
    prev.onclick=lfn;
    function lfn(){
        dir="l";
        if(flag){
            flag=false;
            fn();
        }
    }
}
//文字切换
{
    let one=document.querySelectorAll(".one li")
    let two=document.querySelectorAll(".two li")
    let per=document.querySelector(".per")
    let next=document.querySelector(".nex")

    let num=0;
    next.onclick=function () {
        num++;
        if(num==one.length){
            num=0;
        }
        one.forEach(function (ele,index) {
            ele.style.display="none";
            two[index].style.display="none";
        })
        one[num].style.display="block";
        two[num].style.display="block";
    }

    per.onclick=function () {
        num--;
        if(num==-1){
            num=one.length-1;
        }
        one.forEach(function (ele,index) {
            ele.style.display="none";
            two[index].style.display="none";
        })
        one[num].style.display="block";
        two[num].style.display="block"
    }
}


//双下标轮播
{
    let imgs=document.querySelectorAll(".min2-middle li");
    let dians=document.querySelectorAll("#scale li");
    let bannerbox=document.querySelector(".min2");
    let prev=document.querySelector(".jt1");
    let next=document.querySelector(".jt2");

    let now=0;
    let z=10;


    let flag1=true;
    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            flag1=false;
            var t=1;
            if(index<now){
                t=-1;
            }
            animate(imgs[now],{left:-740*t},1000);
            imgs[index].style.left=t*740+"px";
            imgs[index].style.zIndex=z++;
            animate(imgs[index],{left:0},1000,function () {
                flag1=true;
            });
            dians[now].style.background="#D3D3D3";
            dians[index].style.background="#DA248B"
            now=index;
        }
    })

    let dir="right";
    let st=setInterval(move,3000)
    function move() {
        let t=1;

        if(dir=="right"){
            var next=now+1;
        }else {
            var next=now-1;
            t=-1;
        }

        if(next==imgs.length){
            next=0;
        }
        if(next==-1){
            next=imgs.length-1;
        }

        animate(imgs[now],{left:-740*t},1000);
        imgs[next].style.left=t*740+"px";
        imgs[next].style.zIndex=z++;
        animate(imgs[next],{left:0},1000,function () {
            flag=true;
        });

        dians[now].style.background="#D3D3D3";
        dians[next].style.background="#DA248B"
        now=next;
    }

    bannerbox.onmouseover=function () {
        clearInterval(st);
    }
    window.addEventListener("blur",function () {
        clearInterval(st);
    })

    bannerbox.onmouseout=function () {
        st=setInterval(move,3000)
    }
    window.addEventListener("focus",function () {
        st=setInterval(move,3000)
    })


    var flag=true;
    next.onclick=function () {
        if(flag){
            dir="right";
            flag=false;
            move();
        }
    }
    prev.onclick=function () {
        if(flag){
            dir="left";
            flag=false;
            move();
        }
    }



}