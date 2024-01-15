// Delete this whole file if you don't want an alternate theme.

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("alternate")) {
    body.classList.remove("alternate");
  } else {
    body.classList.add("alternate");
  }
}

let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);
