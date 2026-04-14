export function createElement(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
}

export const createImage = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};
export function createHeader(headerType, text, dataCy) {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
}

export function createToggleButton(text, element) {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });

  return button;
}

export function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
}

export function createInput(name) {
  const input = document.createElement("input");
  input.name = name;
  input.id = name;
  return input;
}

export function createSubmitButton(value) {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;
  return submit;
}