import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-Q5ZMAAQ5.js";
import {
  componentOnReady
} from "./chunk-Y5VUDUTT.js";
import "./chunk-YIRVZL7S.js";
import {
  readTask,
  writeTask
} from "./chunk-KZO45W4F.js";
import "./chunk-PAXKX5KU.js";

// node_modules/@ionic/core/dist/esm/status-tap-Cv9gb3ja.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-Cv9gb3ja-RU4YBHHZ.js.map
