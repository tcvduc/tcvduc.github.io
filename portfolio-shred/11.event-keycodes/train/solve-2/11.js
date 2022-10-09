const insert = window.document.getElementById("insert");

window.addEventListener(
  "keydown",
  /**
   *
   * @param {KeyboardEvent} event
   */
  function (event) {
    insert.innerHTML = `
    <div class="key" >
        ${event.key === " " ? "Space" : event.key} 
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
  `;
  }
);
