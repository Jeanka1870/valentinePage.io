onload = () => {
    const c = setTimeout(() => {
      document.div.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };