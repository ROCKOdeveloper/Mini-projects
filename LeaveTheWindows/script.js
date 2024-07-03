let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "come back :c";
})
window.addEventListener("focus", () => {
  document.title = docTitle
})