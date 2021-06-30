import { setGlobal } from "reactn";
import { dark, light } from "./constants";

export default function ({ isDark }) {
  setGlobal({
    user: null,
    constants: isDark ? dark : light,
  });
}
