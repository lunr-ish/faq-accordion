const faqHeaders = document.querySelectorAll("[data-faq-header]");

const ICON_PLUS = "./assets/images/icon-plus.svg";
const ICON_MINUS = "./assets/images/icon-minus.svg";

faqHeaders.forEach((faqHeaderElem) => {
  let target = faqHeaderElem.parentElement.nextElementSibling;

  let icon = faqHeaderElem.children[1];

  faqHeaderElem.addEventListener("click", (e) => {
    let expanded =
      faqHeaderElem.getAttribute("aria-expanded") === "true" ?? false;
    faqHeaderElem.setAttribute("aria-expanded", !expanded);
    target.hidden = expanded;
    icon.src = expanded ? ICON_PLUS : ICON_MINUS;
  });
});
