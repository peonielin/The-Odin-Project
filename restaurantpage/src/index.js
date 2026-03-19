import "./styles.css";

const container = document.querySelector("#content");

function createpElement(text) {
  const element = document.createElement("p");
  element.textContent = text;
  element.classList.add("body-text");
  return element;
}

function createHandwrittenP(text) {
  const element = document.createElement("p");
  element.textContent = text;
  element.classList.add("handwritten");
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
  element.textContent = text;
  return element;
}

function createIcon(text) {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.textContent = text;
  return icon;
}

container.appendChild(createpElement("\u{1F3E0}"));
container.appendChild(createHandwrittenP("welcome to"));
container.appendChild(createH1Element("my home café"));
container.appendChild(
  createpElement(
    "A cozy home café serving handcrafted coffee, fresh pastries & good vibes — right from our kitchen to yours.",
  ),
);

const menuIcons = document.createElement("div");
menuIcons.classList.add("menu-icons");
menuIcons.appendChild(createIcon("\u2615 Specialty Coffee"));
menuIcons.appendChild(createIcon("\u{1F370} Fresh Pastries"));
menuIcons.appendChild(createIcon("\u{1F375} Matcha & Tea"));
container.appendChild(menuIcons);

const footer = document.createElement("div");
footer.classList.add("footer");
footer.appendChild(createpElement("my home café"));
const footerRow = document.createElement("div");
footerRow.classList.add("footer-details");
footerRow.appendChild(createFooterpElement("Sydney,Australia"));
footerRow.appendChild(createFooterpElement(" • Weekends Only •"));
footerRow.appendChild(createFooterpElement("Bookings via Instagram"));
footer.appendChild(footerRow);
footer.appendChild(createpElement("made with love & oat milk"));
container.appendChild(footer);
