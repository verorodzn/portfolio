const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("modal-close");

document.querySelectorAll(".gallery-img img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add("open");
  });
});

closeBtn.addEventListener("click", () => modal.classList.remove("open"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.remove("open");
});
