export const scrollTop = () => {
  window.scrollTo({ top: 0 });
};

export const scrollBottom = () => {
  const windowHeight = document.documentElement.scrollHeight;
  window.scrollTo({ top: windowHeight });
};
