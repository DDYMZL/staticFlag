import { Vue } from "vue-demi";
import staticPic from "./assets/static.png";
import "./assets/index.css";

const staticDom = document.createElement("div");
staticDom.innerHTML = `<img src="${staticPic}" alt="">`;

const defaultProps = {
  position: "right-bottom",
  cssText:
    "display:inline-block; width: 285px; height: 80px; background: rgba(48, 65, 86, 0.2); position: absolute;z-index: 99",
  show: false,
};

// vue-demi中isVue2和isVue3判断不生效，所以采用下面这种方式
const isV3 = Object.keys(Vue).length > 10;

const v3 = {
  mounted(el, { value = defaultProps }) {
    const { position, cssText, show } = value;
    if (!show) return;
    el.style.position = "relative";
    staticDom.setAttribute("class", `static-box_date87234 ${position}`);
    staticDom.style.cssText = cssText;
    el.appendChild(staticDom);
  },
};

const v2 = {
  bind(el, { value = defaultProps }) {
    const { position, cssText, show } = value;
    if (!show) return;
    el.style.position = "relative";
    staticDom.setAttribute("class", `static-box_date87234 ${position}`);
    staticDom.style.cssText = cssText;
    el.appendChild(staticDom);
  },
};

export default isV3 ? v3 : v2;
