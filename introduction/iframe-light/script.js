(function () {
  const classes = {
    title: "title",
    contact: "contact",
    contactContent: "contact-content",
    active: "active",
    iconCopy: "icon-copy",
    copySuccessClipboard: "copy-success-clipboard",
    sectionContact: "section-contact",
    buttonOpenNetworks: "buttonOpenNetworks",
    socialNetworkIcon: "social-network-icon",
    foundSearchKeyword: "foundSearchKeyword",
  };

  const allowSearchKeyword = [
    "introduction",
    "brief",
    "experience",
    "education",
    "contact",
  ];

  const responsiveNumber = {
    width768px: 768,
  };

  function getDefaultContactSectionCode() {
    const ret = `
    <div class="title">Contact Information</div>
      <div class="contact">
        <div class="contact-content">tcvduc.io@gmail.com</div>
        <div class="icon-copy">
          <svg height="100%" width="100%" viewBox="0 0 100 100">
            <defs>
              <rect fill="#fff" id="canvas" width="100%" height="100%" />

              <polygon
                id="polygon1"
                style="
                  stroke: #111;
                  stroke-linejoin: round;
                  stroke-linecap: round;
                "
                points="40 20, 40 55, 85 55, 85 20"
              ></polygon>

              <polygon
                id="polygon2"
                style="
                  stroke: #111;
                  stroke-linejoin: round;
                  stroke-linecap: round;
                "
                points="20 35, 20 70, 65 70, 65 35"
              ></polygon>

              <mask id="polygon1-cutout">
                <use href="#canvas" />
                <use href="#polygon1" />
              </mask>

              <mask id="polygon2-cutout">
                <use href="#canvas" />
                <use href="#polygon2" />
              </mask>
            </defs>

            <use href="#polygon1" fill="  none" stroke="#111" />

            <use
              mask="url(#polygon1-cutout)"
              href="#polygon2"
              fill="none"
              stroke="#fff"
            />
          </svg>
        </div>
      </div>
      <div class="contact">
        <div class="contact-content">https://www.linkedin.com/in/tcvduc/</div>
        <div class="icon-copy">
          <svg height="100%" width="100%" viewBox="0 0 100 100">
            <defs>
              <rect fill="#fff" id="canvas" width="100%" height="100%" />

              <polygon
                id="polygon1"
                style="
                  stroke: #111;
                  stroke-linejoin: round;
                  stroke-linecap: round;
                "
                points="40 20, 40 55, 85 55, 85 20"
              ></polygon>

              <polygon
                id="polygon2"
                style="
                  stroke: #111;
                  stroke-linejoin: round;
                  stroke-linecap: round;
                "
                points="20 35, 20 70, 65 70, 65 35"
              ></polygon>

              <mask id="polygon1-cutout">
                <use href="#canvas" />
                <use href="#polygon1" />
              </mask>

              <mask id="polygon2-cutout">
                <use href="#canvas" />
                <use href="#polygon2" />
              </mask>
            </defs>

            <use href="#polygon1" fill="  none" stroke="#111" />

            <use
              mask="url(#polygon1-cutout)"
              href="#polygon2"
              fill="none"
              stroke="#fff"
            />
          </svg>
        </div>
      </div>
    `;
    return ret;
  }

  function createAnCopyToClipboardSVG() {
    const ret = `
    <svg height="100%" width="100%" viewBox="0 0 100 100">
    <defs>
      <rect fill="#fff" id="canvas" width="100%" height="100%" />

      <polygon
        id="polygon1"
        style="
          stroke: #111;
          stroke-linejoin: round;
          stroke-linecap: round;
        "
        points="40 20, 40 55, 85 55, 85 20"
      ></polygon>

      <polygon
        id="polygon2"
        style="
          stroke: #111;
          stroke-linejoin: round;
          stroke-linecap: round;
        "
        points="20 35, 20 70, 65 70, 65 35"
      ></polygon>

      <mask id="polygon1-cutout">
        <use href="#canvas" />
        <use href="#polygon1" />
      </mask>

      <mask id="polygon2-cutout">
        <use href="#canvas" />
        <use href="#polygon2" />
      </mask>
    </defs>

    <use href="#polygon1" fill="  none" stroke="#111" />

    <use
      mask="url(#polygon1-cutout)"
      href="#polygon2"
      fill="none"
      stroke="#fff"
    />
  </svg>
    `;
    return ret;
  }

  /**
   *
   * @param {string} searchKeyword
   */
  function wasFoundKeywordInAllowList(searchKeyword) {
    for (let i = allowSearchKeyword.length - 1; i >= 0; --i) {
      if (allowSearchKeyword[i].toLowerCase() === searchKeyword.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  function createAnSuccessCheckSVG() {
    const ret = `
    <svg height="100%" width="100%" viewBox="0 0 100 100">
    <polyline
      points="35 50, 50 70, 70 30"
      style="
        stroke: #57ab5a;
        stroke-width: 5px;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      "
    />
  </svg>
    `;
    return ret;
  }

  /**
   *
   * @param {HTMLElement[]} contacts
   * @param {HTMLElement[]} iconCopies
   * @param {HTMLElement} sectionContact
   *
   *
   */
  function handleContactOnclick(contacts, iconCopies, sectionContact) {
    const svgSuccessCheckIcon = createAnSuccessCheckSVG();
    const svgCopyToClipboardIcon = createAnCopyToClipboardSVG();
    const screenWidth = window.innerWidth;

    if (screenWidth < responsiveNumber.width768px) {
      for (let i = contacts.length - 1; i >= 0; --i) {
        contacts[i].ontouchstart = function () {
          for (let j = contacts.length - 1; j >= 0; --j) {
            if (j !== i) {
              iconCopies[j].classList.remove(classes.copySuccessClipboard);
              iconCopies[j].innerHTML = svgCopyToClipboardIcon;
              contacts[j].classList.remove(classes.active);
            }
          }
          contacts[i].classList.add(classes.active);
          const contactInformation = contacts[i].children[0].textContent;

          // copy text to clipboard
          navigator.clipboard.writeText(contactInformation);

          // change color copy icon
          iconCopies[i].classList.add(classes.copySuccessClipboard);
          iconCopies[i].innerHTML = svgSuccessCheckIcon;
        };
      }
      return;
    }

    if (screenWidth >= responsiveNumber.width768px) {
      for (let i = contacts.length - 1; i >= 0; --i) {
        contacts[i].onclick = function () {
          for (let j = contacts.length - 1; j >= 0; --j) {
            if (j !== i) {
              iconCopies[j].classList.remove(classes.copySuccessClipboard);
              iconCopies[j].innerHTML = svgCopyToClipboardIcon;

              contacts[j].classList.remove(classes.active);
            }
          }

          contacts[i].classList.add(classes.active);

          const contactInformation = contacts[i].children[0].textContent;

          // copy text to clipboard
          navigator.clipboard.writeText(contactInformation);

          // change color copy icon
          iconCopies[i].classList.add(classes.copySuccessClipboard);
          iconCopies[i].innerHTML = svgSuccessCheckIcon;
        };
      }
    }
  }

  /**
   *
   * @param {HTMLElement} buttonOpenNetworks
   * @param {HTMLElement[]} socialNetworkIcons
   *
   *
   */
  function handleButtonOpenNetworksOnclick(
    buttonOpenNetworks,
    socialNetworkIcons
  ) {
    buttonOpenNetworks.onclick = function () {
      for (let i = socialNetworkIcons.length - 1; i >= 0; --i) {
        const aTag =
          socialNetworkIcons[socialNetworkIcons.length - i - 1].children[0];

        aTag.click();
      }
    };
  }

  /**
   *
   * @param {HTMLElement[]} titles
   */
  function thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(titles) {
    window.onmessage =
      /**
       *
       * @param {MessageEvent} event
       */
      function (event) {
        const { data: searchKeyword } = event;
        // console.log(window.innerHeight);
        const searchKeywordLowercased = searchKeyword.toLowerCase();

        for (let j = titles.length - 1; j >= 0; --j) {
          titles[j].classList.remove(classes.foundSearchKeyword);
        }

        for (let i = titles.length - 1; i >= 0; --i) {
          const titleText = titles[i].textContent.toLowerCase();

          if (titleText.includes(searchKeywordLowercased)) {
            const element = titles[i];
            const y1 = element.getBoundingClientRect().y;

            const y2 = element.getBoundingClientRect().top;

            element.classList.add(classes.foundSearchKeyword);

            console.log(y1);
            console.log(y2);

            if (y1 < 0 && i === 0) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }

            if (y1 < 0 && i !== 0) {
              // window.scrollTo({
              //   top: 100,
              //   behavior: "smooth",
              // });
            }
          }
        }
      };
  }

  function main() {
    const contacts = document.getElementsByClassName(classes.contact);
    const iconCopies = document.getElementsByClassName(classes.iconCopy);
    const sectionContact = document.getElementsByClassName(
      classes.sectionContact
    )[0];
    const buttonOpenNetworks = document.getElementsByClassName(
      classes.buttonOpenNetworks
    )[0];
    const socialNetworkIcons = document.getElementsByClassName(
      classes.socialNetworkIcon
    );
    const titles = document.getElementsByClassName(classes.title);

    handleContactOnclick(contacts, iconCopies, sectionContact);

    handleButtonOpenNetworksOnclick(buttonOpenNetworks, socialNetworkIcons);

    thisIsIntroductionIframeLightGetPostMessageFromHtmlParent(titles);

    console.log(
      window.document.getElementsByClassName("input-search-portfolio")[0]
    );
  }

  main();
})();
