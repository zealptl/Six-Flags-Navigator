let modal = document.getElementById("howToModal");
let btn = document.getElementById("howToBtn");
let closeBtn = document.getElementById("closeBtn");

btn.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
