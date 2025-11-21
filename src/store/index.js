import { create } from "zustand";

const useMacbookStore = create((setState) => ({
  color: "#2e2c2e",
  setColor: (color) => setState({ color }),
  scale: 0.08,
  setScale: (scale) => setState({ scale }),
  texture: `${import.meta.env.BASE_URL}/videos/feature-1.mp4`,
  setTexture: (texture) => setState({ texture }),
  reset: () =>
    setState({
      color: "#2e2c2e",
      scale: 0.08,
      texture: `${import.meta.env.BASE_URL}/videos/feature-1.mp4`,
    }),
}));

export default useMacbookStore;
