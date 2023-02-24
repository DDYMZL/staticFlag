import staticPic from "./assets/static.png";
const staticDom = document.createElement("div");
staticDom.setAttribute("class", "static-box_date87234");
staticDom.innerHTML = `<img src="${staticPic}" alt="">`;

export default {
  mounted(el: HTMLElement) {
    el.style.position = "relative";
    el.appendChild(staticDom);
  },
};
