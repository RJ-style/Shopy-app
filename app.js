const cart = document.getElementById("cart");
const cartBar = document.getElementById("cart-bar");
const cartItems = document.getElementById("cart-items");
const cartedItems = document.getElementById("carted-items");

const sellDescInput = document.getElementById("sell-desc");
const sellCostInput = document.getElementById("sell-cost");
const sellImgINput = document.getElementById("sell-img");

class ProductsMap {
   constructor(img, desc, cost) {
      this.img = img;
      this.desc = desc;
      this.cost = cost;
   }
}
const addedItems = [];
class Products {
   // productItems = [
   //    new ProductsMap("", "Mac", 2),
   //    new ProductsMap("", "Asus", 3),
   // ];
   constructor(img, desc, cost) {
      this.productItems = [];
      this.productItems.push(new ProductsMap(img, desc, cost));
   }
   TotalCost(value) {
      const sum = value.reduce((prev, curr) => {
         return prev + curr.cost;
      }, 0);
      return sum;
   }
   addingCart() {
      const cartedItemsUl = document.createElement("ul");
      cartedItemsUl.className = "carted-Ul";
      for (const i of this.productItems) {
         addedItems.push(i);
         console.log(addedItems);
         const cartedItemsLi = document.createElement("li");
         cartedItemsLi.className = "carted-list";
         if (i.img == "") {
            cartedItemsLi.innerHTML = `
            <p style='color:red'>Sorry! Nothing in Cart</p>
            `;
         } else {
            cartedItemsLi.innerHTML = `Item: ${i.desc} ,Cost: ${i.cost}
            `;
         }
         const removeBtn = document.createElement("button");
         removeBtn.innerHTML = "Remove";
         removeBtn.id = "remove-btn";
         removeBtn.addEventListener("click", () => {
            cartedItemsUl.remove(cartedItemsLi);
            //addedItems.pop();
            addedItems[0].delete;
            cartItems.innerHTML = addedItems.length;
            cart.innerHTML = this.TotalCost(addedItems);
            console.log(addedItems);
         });
         cartedItemsLi.append(removeBtn);
         cartedItemsUl.append(cartedItemsLi);
         cartedItems.append(cartedItemsUl);
         // const addedItems=[...addedItems];
      }
      cart.innerHTML = this.TotalCost(addedItems);
      cartItems.innerHTML = addedItems.length;
   }
   render() {
      const renderingDest = document.getElementById("app");
      const renderList = document.createElement("ul");
      for (const items of this.productItems) {
         const renderProds = document.createElement("li");
         renderProds.className = "render-prod";
         renderProds.innerHTML = `
               <img src='${items.img}' alt='${items.desc}' class='render-img'>
               <h4>${items.desc}</h4>
               <h3>$ ${items.cost}</h3><br>
               `;
         const addCartBtn = document.createElement("button");
         addCartBtn.className = "addCartBtn";
         addCartBtn.innerHTML = `Add To Cart`;
         addCartBtn.addEventListener("click", this.addingCart.bind(this));
         renderProds.append(addCartBtn);
         renderList.append(renderProds);
      }
      renderingDest.append(renderList);
   }
}

const menuBtn = document.getElementById("Menu-btn");
const moreItems = document.getElementById("more-items");
const backDrop = document.getElementById("backdrop");
const showCart = document.getElementById("showCart-btn");
const orderBtn = document.getElementById("order-btn");
const imgBar = document.getElementById("div");
const homeBtn = document.getElementById("Home-btn");

const uploadImg = document.getElementById("act-set-file");
const accImgDiv = document.querySelector("#act-set-img label");
const defaultImg = document.getElementById("defaultImg");

const accSettingBtn = document.getElementById("settings");
const accountSetBar = document.getElementById("act-set");

const profileName = document.getElementById("profile-name");
const accName = document.getElementById("name");

const editBtn1 = document.querySelector(".p button");
const editBtn2 = document.getElementById("p-mail").nextElementSibling;
const editBtn3 = document.getElementById("p-Phone").nextElementSibling;
const editBtn4 = document.getElementById("p-age").nextElementSibling;
const usrName = document.getElementById("p-name");
const usrMail = document.getElementById("p-mail");
const usrPhone = document.getElementById("p-Phone");
const usrAge = document.getElementById("p-age");

const setName = document.getElementById("name");
const setMail = document.getElementById("mail");
const setPhone = document.getElementById("Phone");
const setAge = document.getElementById("DOB");

const fieldSet = document.getElementById("field-div");
const fieldOkBtn = document.getElementById("fld-ok");
const fieldCancelBtn = document.getElementById("fld-cancel");

const nothingCart = document.querySelector("#carted-items").firstChild;

const sellBtn = document.getElementById("Sell-btn");
const sellBar = document.getElementById("sell-bar");
const sellAddBtn = document.getElementById("sell-add");
const sellCancelBtn = document.getElementById("sell-cancel");

const profile_img_arr = [];
const usr_details_arr = [];
const usr_sold_arr=[];

sellBtn.addEventListener("click", () => {
   if (backDrop.className == "" || backDrop.className == "hid") {
      backDrop.className = "show";
   } else {
      backDrop.className = "hid";
   }
   if (sellBar.className == "" || sellBar.className == "rightHid") {
      sellBar.className = "leftShow";
   } else if (sellBar.className == "leftShow") {
      sellBar.className = "leftHid";
   } else if (sellBar.className == "leftHid") {
      sellBar.className = "rightShow";
   } else {
      sellBar.className = "rightHid";
   }
});

sellAddBtn.addEventListener("click", () => {
   if (
      sellImgINput.value == "" ||
      sellDescInput.value == "" ||
      sellCostInput.value == ""
   ) {
      alert("Oops! Your object`s details aren`t enough!");
      return 0;
   } else {
      new Products(
         sellImgINput.value,
         sellDescInput.value,
         parseInt(sellCostInput.value)
      ).render();
      const soldItems={
         Image:sellImgINput.value,
         Description:sellDescInput.value,
         Cost:sellCostInput.value
      }
      usr_sold_arr.push(soldItems)
      console.log(usr_sold_arr);
   }
   sellImgINput.value = "";
   sellDescInput.value = "";
   sellCostInput.value = "";
   if (sellBar.className == "" || sellBar.className == "rightHid") {
      sellBar.className = "leftShow";
   } else if (sellBar.className == "leftShow") {
      sellBar.className = "leftHid";
   } else if (sellBar.className == "leftHid") {
      sellBar.className = "rightShow";
   } else {
      sellBar.className = "rightHid";
   }
   backDrop.className = "hid";
});
sellCancelBtn.addEventListener("click", () => {
   sellImgINput.value = "";
   sellDescInput.value = "";
   sellCostInput.value = "";
   if (sellBar.className == "" || sellBar.className == "rightHid") {
      sellBar.className = "leftShow";
   } else if (sellBar.className == "leftShow") {
      sellBar.className = "leftHid";
   } else if (sellBar.className == "leftHid") {
      sellBar.className = "rightShow";
   } else {
      sellBar.className = "rightHid";
   }
   backDrop.className = "hid";
});

accImgDiv.addEventListener("click", () => {
   if (uploadImg.hidden == 0) {
      uploadImg.hidden = 1;
   } else {
      uploadImg.hidden = 0;
   }
});
uploadImg.addEventListener("change", () => {
   profile_img_arr.push(uploadImg.value);
   console.log(profile_img_arr);
   const accImg = document.createElement("div");
   accImg.innerHTML = `
   <img src='${uploadImg.value}' alt=' ' class='act-set-img-file'>
   `;
   const profileImg = document.createElement("div");
   profileImg.innerHTML = `
   <img src='${uploadImg.value}' alt=' ' class='img' width='100%'>
   `;
   accImgDiv.prepend(accImg);
   imgBar.prepend(profileImg);
});

editBtn1.addEventListener("click", () => {
   // backDrop.className = "show";
   if (fieldSet.className == "" || fieldSet.className == "Bothid") {
      fieldSet.className = "Topshow";
   } else if (fieldSet.className == "Tophid" || fieldSet.className == "") {
      fieldSet.className = "Botshow";
   }
});
editBtn2.addEventListener("click", () => {
   if (fieldSet.className == "" || fieldSet.className == "Bothid") {
      fieldSet.className = "Topshow";
   } else if (fieldSet.className == "Tophid" || fieldSet.className == "") {
      fieldSet.className = "Botshow";
   }
   // backDrop.className = "show";
});
editBtn3.addEventListener("click", () => {
   if (fieldSet.className == "" || fieldSet.className == "Bothid") {
      fieldSet.className = "Topshow";
   } else if (fieldSet.className == "Tophid" || fieldSet.className == "") {
      fieldSet.className = "Botshow";
   }
   // backDrop.className = "show";
});
editBtn4.addEventListener("click", () => {
   if (fieldSet.className == "" || fieldSet.className == "Bothid") {
      fieldSet.className = "Topshow";
   } else if (fieldSet.className == "Tophid" || fieldSet.className == "") {
      fieldSet.className = "Botshow";
   }
   // backDrop.className = "show";
});
// setName.addEventListener("change", () => {
//    usrName.innerHTML = setName.value;
// });
// setMail.addEventListener("change", () => {
//    usrMail.innerHTML = setMail.value;
// });
// setPhone.addEventListener("change", () => {
//    usrPhone.innerHTML = setPhone.value;
// });

// setAge.addEventListener("change", () => {
//    if (new Date(setAge.value) >= new Date()) {
//       alert(`Oops! You can't go to future!`);
//       return 0;
//    } else {
//       let differenceValue = new Date() - new Date(setAge.value);
//       let difference = (differenceValue / 31556900000).toFixed(3);
//       usrAge.innerHTML =
//          difference + " " + " " + `<em style='color:red'>yrs</em>`;
//    }
// });

fieldOkBtn.addEventListener("click", () => {
   if (fieldSet.className == "Topshow") {
      fieldSet.className = "Tophid";
   } else if (fieldSet.className == "Botshow") {
      fieldSet.className = "Bothid";
   }
   if (setName.value != "") {
      usrName.innerHTML = setName.value;
   }
   if (setMail.value != "") {
      usrMail.innerHTML = setMail.value;
   }
   if (setPhone.value != "") {
      usrPhone.innerHTML = setPhone.value;
   }
   if (setAge.value != "") {
      if (new Date(setAge.value) >= new Date()) {
         alert(`Oops! You can't go to future!`);
         setAge.value = new Date();
         return;
      } else {
         let differenceValue = new Date() - new Date(setAge.value);
         let difference = (differenceValue / 31556900000).toFixed(3);
         usrAge.innerHTML =
            difference + " " + " " + `<em style='color:red'>yrs</em>`;
      }
   }
   const usr_detail_obj = {
      UserName: setName.value,
      UserMail: setMail.value,
      UserAge: setAge.value,
      UserPhone: setPhone.value,
   };
   if (
      usr_detail_obj.UserName !== "" ||
      usr_detail_obj.UserMail !== "" ||
      usr_detail_obj.UserAge !== "" ||
      usr_detail_obj.UserPhone !== ""
   ) {
      usr_details_arr.push(usr_detail_obj);
   } else {
      return;
   }
   console.log(usr_details_arr);
   setName.value = "";
   setMail.value = "";
   setPhone.value = "";
   setAge.value = new Date();
});
fieldCancelBtn.addEventListener("click", () => {
   if (fieldSet.className == "Topshow") {
      fieldSet.className = "Tophid";
   } else if (fieldSet.className == "Botshow") {
      fieldSet.className = "Bothid";
   }
   setName.value = "";
   setMail.value = "";
   setPhone.value = "";
   setAge.value = "";
});

accName.addEventListener("change", () => {
   profileName.innerText = accName.value;
});

homeBtn.addEventListener("click", () => {
   accountSetBar.className = "";
   if (backDrop.className == "show" || moreItems.className == "show") {
      backDrop.className = "hid";
      moreItems.className = "hid";
   } else if (moreItems.className == "hid") {
      moreItems.className = "";
   }
   fieldSet.className = "";
   uploadImg.hidden = 1;
   if (sellBar.className == "leftShow") {
      sellBar.className = "leftHid";
      moreItems.className = "";
   } else if (sellBar.className == "rightShow") {
      moreItems.className = "";
      sellBar.className = "rightHid";
   }
});

accSettingBtn.addEventListener("click", () => {
   accountSetBar.classList.toggle("show");
   moreItems.className = "hid";
   backDrop.className = "hid";
});

showCart.addEventListener("click", () => {
   cartedItems.classList.toggle("show");
   nothingCart.hidden = 0;
});

menuBtn.addEventListener("click", () => {
   if (
      moreItems.className == "" ||
      (moreItems.className == "hid" && backDrop.className == "") ||
      backDrop.className == "hid"
   ) {
      moreItems.className = "show";
      backDrop.className = "show";
      sellBar.className='';
   } else{
      moreItems.className = "hid";
      backDrop.className = "hid";
      sellBar.className='';
   }
   if (sellBar.className == "leftShow" || sellBar.className == "rightShow") {
      backDrop.className = "show";
   }
});
backDrop.addEventListener("click", () => {
   moreItems.className = "hid";
   backDrop.className = "hid";
   cartedItems.className = "hid";
   if (sellBar.className == "leftShow") {
      sellBar.className = "leftHid";
   } else if (sellBar.className == "rightShow") {
      sellBar.className = "rightHid";
   }
});

orderBtn.addEventListener("click", () => {
   if (addedItems.length > 0) {
      alert(`Ordering ${addedItems.length} items!..`);
   } else {
      alert("Oops!..Nothing in Cart...");
   }
});

new Products(
   "file:///C:/Users/SOWMIYA/Pictures/Windows.c/astronaut.jpg",
   "Asus",
   2000
).render();
new Products(
   "file:///C:/Users/SOWMIYA/Pictures/Windows.c/5e13e8673467354157e9f4f3a1bbf84f.jpg",
   "Mac",
   3000
).render();
new Products("", "Microsoft", 1000).render();
