import photo from "./img/images.png"
import styles from "./User.css"

export default function User({name}) {
  const li = document.createElement("li");
  li.classList.add("user")
  li.innerHTML = `
  <img class="photo" src="${photo}" alt="${name}" />
  ${name}
  `;
  return li;
}