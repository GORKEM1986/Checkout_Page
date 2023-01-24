// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

window.addEventListener("load", () => {
  // localStorage.setItem("taxRate", taxRate);
  // localStorage.setItem("shippingPrice", shippingPrice);
  // localStorage.setItem("shippingFreePrice", shippingFreePrice);
  calculateCartPrice();
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (e) => {
  // alert(e.target.tagName);
  // alert(e.eventTarget.className)
  if (e.target.className == "fa-solid fa-minus") {
    alert("minus btn clicked");
    calculateProductPrice();
    calculateCartPrice();
  } else if (e.target.classList.contains("fa-plus")) {
    alert("plus btn clicked");
    calculateProductPrice();
    calculateCartPrice();
  } else if (e.target.getAttribute("class") == "remove-product") {
    alert("remove btn clicked");
    calculateCartPrice();
  } else {
    alert("other element clicked");
  }
});

const calculateProductPrice = (target) => {
  const productInfoDıv = target.closest(".product-info");
  console.log(productInfoDıv);
};

const calculateCartPrice = () => {};
