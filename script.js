const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const search = document.querySelector(".search");
const body = document.getElementById("body");

let open = false;

button.addEventListener('click', () => {
    search.classList.toggle('active');
    // search.classList.toggle('active2');
    input.focus();
    open = !open;
})


window.addEventListener("click", (e) => {
    if (e.target.id == "body" && open) {
        search.classList.toggle("active");
        open = !open;
    }
  });