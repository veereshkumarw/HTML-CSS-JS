var cartItem = document.querySelector("#cart");

const item = document.createElement("tr");

var productInfo = JSON.parse(localStorage.getItem("proInfo"));

var costt;
var quan;
var total;
var proName;
var proImage;

// var costt = productInfo.
// var quan = productInfo.


const addToCart = () => {

  item.innerHTML = 
  `
     <td>
        <a href="#"><i class="fa-regular fa-circle-xmark"></i></a>
     </td>
     <td><img src=${proImage} alt=""></td>
     <td>${proName}</td>
     <td>$${costt}</td>
     <td><input type="number" value=${quan}></td>
     <td>$${total}</td>
        `;
  cartItem.children[0].children[1].appendChild(item);
};

productInfo.map((product)=>{
        proName = product.name;
        proImage = product.image;
        costt = product.cost.replace(/\D/g, "");
        quan = product.quantity.replace(/\D/g, "");
        total = costt * quan;
        console.log(costt);
        addToCart();
})



