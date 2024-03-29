// import { Vue, isVue3 } from "vue-demi";
import { isVue3 } from "vue-demi";
import staticPic from "./assets/static.png";
import "./assets/index.css";

const defaultProps = {
  position: "right-bottom",
  cssText:
    "display:inline-block; width: 285px; height: 80px; background: rgba(48, 65, 86, 0.2); position: absolute;z-index: 99",
  show: false,
};

// vue-demi在本地调试isVue2和isVue3判断存在问题
// 在vue2的项目打印isVue2 为false
// const isV3 = Object.keys(Vue).length > 10;

const insertHTML = (el: HTMLElement, value: {position: string; cssText: string; show: boolean }) => {
  const { position, cssText, show } = value;
  if (!show) return;
  const staticDom = document.createElement("div");
  staticDom.innerHTML = `<img src="${staticPic}" alt="">`;
  el.style.position = "relative";
  staticDom.setAttribute("class", `static-box_date87234 ${position}`);
  staticDom.style.cssText = cssText;
  el.appendChild(staticDom);
};

const v3 = {
  mounted(el: HTMLElement, { value = defaultProps }) {
    insertHTML(el, value);
  },
};

const v2 = {
  bind(el: HTMLElement, { value = defaultProps }) {
    insertHTML(el, value);
  },
};

export default isVue3 ? v3 : v2;
