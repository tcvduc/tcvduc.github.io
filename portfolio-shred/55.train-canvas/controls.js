class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    this.addKeyboardListeners();
  }

  addKeyboardListeners = () => {
    document.onkeydown =
      /**
       *
       * @param {KeyboardEvent} event
       */
      (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = true;

            break;

          case "ArrowRight":
            this.right = true;
            break;

          case "ArrowUp":
            this.forward = true;
            break;

          case "ArrowDown":
            this.reverse = true;
            break;

          default:
            break;
        }
      };

    document.onkeyup =
      /**
       *
       * @param {KeyboardEvent} event
       */
      (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = false;
            break;

          case "ArrowRight":
            this.right = false;
            break;

          case "ArrowUp":
            this.forward = false;
            break;

          case "ArrowDown":
            this.reverse = false;
            break;

          default:
            break;
        }
      };
  };
}

const c = new Controls();
c.addKeyboardListeners();
