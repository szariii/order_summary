export const loader = () => {
  console.log("test");
  document.getElementById("btn").onclick = () => {
    const btn = document.getElementById("btn");
    btn.innerHTML = `<i class="fa fa-circle-o-notch fa-spin"></i>`;
  };
};
