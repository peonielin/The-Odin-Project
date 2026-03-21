export function loadAbout() {
  const container = document.querySelector("#content");

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

  function createH1Element(text) {
    const element = document.createElement("h1");
    element.classList.add("AboutTitle");
    element.textContent = text;
    return element;
  }

  function createHandwrittenP(text) {
    const element = document.createElement("p");
    element.textContent = text;
    element.classList.add("handwritten");
    return element;
  }

  container.appendChild(createHandwrittenP("welcome to"));
  container.appendChild(createH1Element("Our Story"));

  const roundedContainer = document.createElement("div");
  roundedContainer.classList.add("rounded-container");
  const heart = document.createElement("div");
  heart.classList.add("heart-top");
  heart.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" fill="#E8B4B8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  roundedContainer.appendChild(heart);
  const blurbTitle = document.createElement("p");
  blurbTitle.classList.add("blurbTitle");
  blurbTitle.textContent =
    "Our Home Café started as a weekend ritual — making fancy coffee for friends who came over and always ended up staying longer than planned.";

  const blurbContent = document.createElement("p");
  blurbContent.classList.add("blurbContent");
  blurbContent.textContent = `It began with a second-hand KitchenAid espresso machine, a few cute mugs from the op shop, and an obsession with getting the perfect latte art. Friends started saying "you should open a café" — so we kind of did, just from home.
Every weekend, we transform our kitchen into a cozy little café. We bake everything fresh that morning — croissants, cookies, lemon loaf — and brew specialty coffee with locally roasted beans. There's always a handwritten menu on kraft paper and a matcha whisk on standby.
It's not just about the coffee (though the Spanish latte is pretty amazing). It's about slowing down, creating something beautiful, and sharing it with the people you love.`;

  roundedContainer.appendChild(blurbTitle);
  roundedContainer.appendChild(blurbContent);
  container.appendChild(roundedContainer);

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
