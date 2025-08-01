// Dark mode toggle (optional feature)
const toggleDark = () => {
  document.body.classList.toggle("dark");
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Toggle Dark Mode";
  btn.style.position = "fixed";
  btn.style.top = "1rem";
  btn.style.right = "1rem";
  btn.onclick = toggleDark;
  document.body.appendChild(btn);
});
