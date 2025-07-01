let cartCount = 0;
const cartCountSpan = document.querySelector("#cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.innerText = cartCount;
    alert("✅ Item added to cart!");
  });
});
