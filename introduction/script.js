(function () {
  const classes = {
    contact: "contact",
    contactContent: "contact-content",
    active: "active",
    iconCopy: "icon-copy",
    copySuccessClipboard: "copy-success-clipboard",
  };

  /**
   *
   * @param {HTMLElement[]} contacts
   * @param {HTMLElement[]} iconCopies
   */
  function handleContactOnclick(contacts, iconCopies) {
    for (let i = contacts.length - 1; i >= 0; --i) {
      contacts[i].onclick = function () {
        for (let j = contacts.length - 1; j >= 0; --j) {
          if (j !== i) {
            iconCopies[j].classList.remove(classes.copySuccessClipboard);

            contacts[j].classList.remove(classes.active);
          }
        }

        contacts[i].classList.add(classes.active);

        const contactInformation = contacts[i].children[0].textContent;

        // copy text to clipboard
        navigator.clipboard.writeText(contactInformation);

        // change color copy icon
        iconCopies[i].classList.add(classes.copySuccessClipboard);
      };
    }
  }

  function main() {
    const contacts = document.getElementsByClassName(classes.contact);
    const iconCopies = document.getElementsByClassName(classes.iconCopy);

    handleContactOnclick(contacts, iconCopies);
  }

  main();
})();
