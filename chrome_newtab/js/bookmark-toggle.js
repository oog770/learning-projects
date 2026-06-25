const bookmarkBar = document.querySelector("#bookmark-bar");
const bookmarkOpen = document.querySelector("#bookmark-open");
const bookmarkClose = document.querySelector("#bookmark-close");

const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
if (isBookMarkBarOpen === "close") {
  bookmarkBar.style.display = "none";
  bookmarkOpen.style.display = "none";
  bookmarkClose.style.display = "flex";
} else {
  bookmarkBar.style.display = "block";
  bookmarkOpen.style.display = "flex";
  bookmarkClose.style.display = "none";
}

const bookmarkBarToggle = () => {
  const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");

  if (isBookMarkBarOpen === "close") {
    localStorage.setItem("isBookMarkBarOpen", "open");
    bookmarkBar.style.display = "block";
    bookmarkOpen.style.display = "flex";
    bookmarkClose.style.display = "none";
    return;
  }

  localStorage.setItem("isBookMarkBarOpen", "close");
  bookmarkBar.style.display = "none";
  bookmarkOpen.style.display = "none";
  bookmarkClose.style.display = "flex";
};

document
  .querySelector("#bookmark-open-btn")
  .addEventListener("click", bookmarkBarToggle);
document
  .querySelector("#bookmark-close-btn")
  .addEventListener("click", bookmarkBarToggle);
