// Agent Filter

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const characters = document.querySelectorAll(".character");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Change button styles
      filterButtons.forEach((btn) => {
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-outline-danger");
      });

      button.classList.remove("btn-outline-danger");
      button.classList.add("btn-danger");

      const filter = button.dataset.filter;

      characters.forEach((character) => {
        if (filter === "all" || character.dataset.category === filter) {
          character.classList.remove("d-none");
        } else {
          character.classList.add("d-none");
        }
      });
    });
  });
});
