const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else {
    moveDodgerRight();
  }
});
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const maxWidth = 400;
  const dodgerWidth = 40;
  if (left + dodgerWidth < maxWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}
