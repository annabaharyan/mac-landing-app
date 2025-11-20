import { create } from "zustand";

const useMacbookStore = create((setState) => ({
  color: "#2e2c2e",
  setColor: (color) => setState({ color }),
  scale: 0.08,
  setScale: (scale) => setState({ scale }),
  reset: () => setState({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacbookStore;
