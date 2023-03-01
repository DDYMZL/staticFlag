import staticPic from "./assets/static.png";
import "./assets/index.css";
const staticDom = document.createElement("div");
staticDom.innerHTML = `<img src="${staticPic}" alt="">`;

const defaultProps = {
  position: "right-bottom",
  cssText:
    "display:inline-block; width: 285px; height: 80px; background: rgba(48, 65, 86, 0.2); position: absolute;z-index: 99",
};
export default {
  mounted(el, { value = defaultProps }) {
    const { position, cssText } = value;
    el.style.position = "relative";
    staticDom.setAttribute("class", `static-box_date87234 ${position}`);
    staticDom.style.cssText = cssText;
    el.appendChild(staticDom);
  },
};
