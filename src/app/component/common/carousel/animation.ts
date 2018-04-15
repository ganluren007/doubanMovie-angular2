import { trigger, state, style } from "@angular/animations";
export const animations = [
  trigger("display", [
    state(
      "fadeOut",
      style({
        display: "none"
      })
    ),
    state(
      "fadeIn",
      style({
        display: "block"
      })
    )
  ])
];

const getStyle = (tag, attr) => {
  return tag.currentStyle
    ? tag.currentStyle[attr]
    : getComputedStyle(tag, null)[attr];
};

export const defineAnimate = (tag, obj, fn = () => {}) => {
  clearInterval(tag.time);
  tag.time = setInterval(function() {
    let flag = true;
    Object.keys(obj).forEach(key => {
      let style = parseInt(getStyle(tag, key)) || 0;
      let result = (obj[key] - style) / 10;
      result = result > 0 ? Math.ceil(result) : Math.floor(result);
      style = style + result;
      tag.style[key] = style + "px";
      if (style != obj[key]) {
        flag = false;
      }
    });
    if (flag) {
      clearInterval(tag.time);
      fn && fn();
      flag = true;
    }
  }, 20);
};

export const isDefined = data => typeof data === "undefined";
