function detectWhetherClassListHasNewClassOrNot() {
  const mutationObserve = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      const mutationTarget = mutation.target;
      const classList = mutationTarget;

      for (const key in mutationTarget) {
        if (key === "classList") {
          console.log("key = classList");
          console.log("value: ", mutationTarget[key]);
          break;
        }
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
