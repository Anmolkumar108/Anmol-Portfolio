window.addEventListener("scroll",()=>{

    const header=document.getElementById("header");

    if(window.scrollY>50){

        header.style.background="rgba(5,8,22,.92)";

    }

    else{

        header.style.background="rgba(5,8,22,.65)";

    }

    const winScroll=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("progress-bar").style.width=scrolled+"%";

});