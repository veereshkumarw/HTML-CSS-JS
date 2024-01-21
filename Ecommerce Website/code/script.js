const menu = document.getElementById('menu');
// console.log(typeof(menu));
const nav = document.getElementById('navBar');
const close = document.getElementById('close');

const productClass = document.querySelectorAll(".product");
// const productC = document.querySelector(".product");

const handleClick=(e)=>{

    console.log(e.target.src);
    localStorage.setItem("clickedImg", e.target.src);
    // localStorage.setItem("clickedImgDiv", productC.innerHTML);
    window.location.href="product.html";
    
};

for(const ele of productClass){
    // console.log(ele)
   ele.addEventListener('click', handleClick);
}
// console.log(imgTag);





if(menu){
    menu.addEventListener('click',()=>{
        nav.classList.add('active');
        // console.log(document.getElementsByClassName('active'));
    });
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        
    });
}

