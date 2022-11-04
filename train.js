function detectDOMChanges() {
  const mutationObserve = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "class") {
        const changes = {
          oldValue: mutation.oldValue,
          newValue: mutation.target.classList.value,
          element: mutation.target,
        };
        console.log(changes);
      }
    });
  });

  mutationObserve.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
}
