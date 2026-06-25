(function () {
  const searchInput = document.querySelector("#search-input");

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
  };

  const enterKey = (event) => {
    if (event.code === "Enter") {
      showSearchResult();
    }
  };
  searchInput.addEventListener("keypress", (event) => enterKey(event));
  // keypress를 통해 엔터키를 눌렀을 때 검색이 되도록 함
})();
