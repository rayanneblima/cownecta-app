const btnAddNote = document.querySelector(".fa-plus");

btnAddNote.addEventListener("click", () => {
  const popupAddNote = document.querySelector(".add-note");
  popupAddNote.style.display = "block";
});

const btnEditNote = document.querySelectorAll(".fa-edit");

btnEditNote[0].addEventListener("click", () => {
  const popupEditNote = document.querySelector(".edit-note");
  popupEditNote.style.display = "block";
});
