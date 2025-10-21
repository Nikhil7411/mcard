// === Edit your offers here daily ===
const todayOffers = [
  "Chicken Biryani + Thums Up Combo🍗🥤 135",
  "Paneer Biryani + Butter Naan🍛 ₹149",
  "Veggie Wrap + Soft Drink 🌯🥤 ₹99",
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