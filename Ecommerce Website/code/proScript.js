
var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("sm-img");
// console.log(mainImg.src);

smallImg[0].addEventListener("click", () => {
  mainImg.src = smallImg[0].src;
});

smallImg[1].addEventListener("click", () => {
  mainImg.src = smallImg[1].src;
});

smallImg[2].addEventListener("click", () => {
  mainImg.src = smallImg[2].src;
});

smallImg[3].addEventListener("click", () => {
  mainImg.src = smallImg[3].src;
});



var clickedImg = localStorage.getItem("clickedImg");

mainImg.src = clickedImg;


// prodImg.setAttribute("src",clickedImg);

//    we can also make img clickable using onclick as mentioned below.

// smallImg[1].onclick= function()
// {
//     mainImg.src = smallImg[1].src;
// }


// -------------------------------------for cart related------------------------------------------------------------------

const proDetails = document.querySelector(".single-pro-des");
const proImg = document.querySelector(".single-pro-img");

const cartBtn = document.getElementById("addToCartBtn");

const proName = proDetails.children[1];
const proCost = proDetails.children[2];
const proQuan = proDetails.children[4];

let proArray = [];

const handleBtn = () => {
  proArray = [
    ...proArray, {name : proName.innerHTML, cost : proCost.innerHTML, quantity :  proQuan.value, image : mainImg.src}
  ]
  // proArray["name"] = proName.innerHTML;
  // proArray["cost"] = proCost.innerHTML;
  // proArray["quantity"] = proQuan.value;
  // proArray["image"] = mainImg.src;

  console.log(proArray);
 
  localStorage.setItem("proInfo",JSON.stringify(proArray));
};


// proArray.push(proName.innerHTML);
// proArray.push(proCost.innerHTML);
// proArray.push(proQuan.value);

cartBtn.addEventListener("click", handleBtn);



// console.log(proArray)

// document.querySelector("#product-details").children[0].querySelector("#main-img")-------to get img tag