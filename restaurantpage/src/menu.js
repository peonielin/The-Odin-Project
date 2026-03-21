export function loadMenu() {
  const container = document.querySelector("#content");

  function createHandwrittenP(text) {
    const element = document.createElement("p");
    element.textContent = text;
    element.classList.add("handwritten");
    return element;
  }

  function createH1Element(text) {
    const element = document.createElement("h1");
    element.textContent = text;
    return element;
  }

  container.appendChild(createHandwrittenP("what we're serving"));
  container.appendChild(createH1Element("Our Menu"));
  const menuList = document.createElement("div");
  menuList.classList.add("menuList");
  menuList.appendChild(createIcon("\u2615", "Coffee"));

  menuList.appendChild(menuItem("Latte", "$5.50"));
  menuList.appendChild(menuItem("Cappuccino", "$5.00"));
  menuList.appendChild(menuItem("Espresso", "$3.50"));
  menuList.appendChild(menuItem("Mocha", "$6.50"));
  menuList.appendChild(createIcon("\u{1F370}", "Pastries"));
  menuList.appendChild(menuItem("Croissant", "$5.50"));
  menuList.appendChild(menuItem("Baguette", "$8.50"));
  menuList.appendChild(menuItem("Cookies", "$4.50"));
  menuList.appendChild(menuItem("Lemon Loaf", "$5.00"));
  menuList.appendChild(createIcon("\u{1F375}", "Matcha & Tea"));
  menuList.appendChild(menuItem("English Breakfast", "$4.00"));
  menuList.appendChild(menuItem("Chai Latte", "$5.50"));
  menuList.appendChild(menuItem("Matcha", "$7.50"));
  menuList.appendChild(menuItem("Strawberry Matcha", "$8.00"));
  menuList.appendChild(createIcon("\u2728", "Specials"));
  menuList.appendChild(menuItem("Champagne", "$12.00"));
  menuList.appendChild(menuItem("Yoghurt Parfait", "$7.50"));
  menuList.appendChild(menuItem("Set Menu High Tea", "$35.00"));
  container.appendChild(menuList);

  function createIcon(emoji1, text) {
    const iconContainer = document.createElement("div");
    const emoji = document.createElement("p");
    emoji.classList.add("menuEmoji");
    const emojiLabel = document.createElement("p");
    emojiLabel.classList.add("menuEmojiList");
    iconContainer.classList.add("menuContainer");
    emoji.textContent = emoji1;
    emojiLabel.textContent = text;
    iconContainer.appendChild(emoji);
    iconContainer.appendChild(emojiLabel);
    return iconContainer;
  }

  function menuItem(item, price) {
    const oneMenuItemCon = document.createElement("div");
    oneMenuItemCon.classList.add("oneMenuCon");
    const itemName = document.createElement("p");
    itemName.classList.add("itemName");
    itemName.textContent = item;
    const priceLabel = document.createElement("p");
    priceLabel.classList.add("price");
    priceLabel.textContent = price;
    oneMenuItemCon.appendChild(itemName);
    oneMenuItemCon.appendChild(priceLabel);
    return oneMenuItemCon;
  }

  function createpElement(text) {
    const element = document.createElement("p");
    element.textContent = text;
    element.classList.add("body-text");
    return element;
  }

  function createFooterpElement(text) {
    const element = document.createElement("p");
    element.classList.add("footer-details-item");
    element.textContent = text;
    return element;
  }

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.appendChild(createpElement(" ♥ my home café ♥"));
  const footerRow = document.createElement("div");
  footerRow.classList.add("footer-details");
  footerRow.appendChild(createFooterpElement("Sydney, Australia"));
  footerRow.appendChild(createFooterpElement(" • Weekends Only •"));
  footerRow.appendChild(createFooterpElement("Bookings via Instagram"));
  footer.appendChild(footerRow);
  footer.appendChild(createpElement("made with love & oat milk"));
  container.appendChild(footer);
}
