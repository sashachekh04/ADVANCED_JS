const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  createHell();
});

function createHell() {
  new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    createHell();
  });
}
