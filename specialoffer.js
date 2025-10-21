// === Edit your offers here daily ===
const todayOffers = [
  "Chicken Biryani + Thums Up Combo 135🍗🥤",
  "₹149 Paneer Biryani + Butter Naan 🍛",
  "₹99 Veggie Wrap + Soft Drink 🌯🥤",
];

// === Script to display offers ===
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("specialOffers");
  
  if (list) {
    list.innerHTML = todayOffers
      .map(offer => `<li>${offer}</li>`)
      .join("");
  }
});