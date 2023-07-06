(() => {
  const classes = {
    card: "card",
    chartHalfCircle: "chartHalfCircle",
    layer: "layer",
  };

  const strokeStyleHaftCirclePart1 = "#6d72ff";
  const strokeStyleHaftCirclePart2 = "#988ffa";
  const strokeStyleHaftCirclePart3 = "#57c4ff";
  const strokeStyleHaftCirclePart4 = "#37456c";
  const strokeStyleHaftCircleBackground = "#101936";

  class CardData {
    /**
     *
     * @param {Number} part1
     * @param {Number} part2
     * @param {Number} part3
     * @param {Number} part4
     * @param {Number} agvNumber
     * @param {String} ip
     * @param {String} status
     * @param {Number} percent
     *
     *
     */
    constructor(part1, part2, part3, part4, agvNumber, ip, status, percent) {
      this.part1 = part1;
      this.part2 = part2;
      this.part3 = part3;
      this.part4 = part4;
      this.agvNumber = agvNumber;
      this.ip = ip;
      this.status = status;
      this.percent = percent;
    }
  }

  /**
   *
   * @param {HTMLElement} layer
   * @param {HTMLElement[]} chartHalfCircles
   *
   *
   */
  function displayCards(layer, chartHalfCircles) {
    const cardData = getCardData();
    const halfCircleData = [];

    for (let i = 0; i <= cardData.length - 1; ++i) {
      const cardElement = getCardElement(cardData[i]);

      halfCircleData.push({
        part1: cardData[i].part1,
        part2: cardData[i].part2,
        part3: cardData[i].part3,
        part4: cardData[i].part4,
      });

      layer.appendChild(cardElement);
    }

    handleChart(chartHalfCircles, halfCircleData);
  }

  /**
   *
   * @param {CardData} cardData
   */
  function getCardElement(cardData) {
    const element = window.document.createElement("div");
    element.classList.add(classes.card);

    element.innerHTML = `
    <div class="topCard">
      <canvas class="chartHalfCircle"></canvas>
      <div class="batteryInfo">
        <div class="percent">${cardData.percent}%</div>
        <div class="info">AGV Battery Storage</div>
      </div>
    </div>
    <div class="bottomCard">
      <div class="agvNumber section">
        <div class="left">
          <div class="dot"></div>
          <div class="text">AGV Number</div>
        </div>
        <div class="right">
          <div class="content">${cardData.agvNumber}</div>
        </div>
      </div>
      <div class="ip section">
        <div class="left">
          <div class="dot"></div>
          <div class="text">IP</div>
        </div>
        <div class="right">
          <div class="content">${cardData.ip}</div>
        </div>
      </div>
      <div class="status section">
        <div class="left">
          <div class="dot"></div>
          <div class="text">Status</div>
        </div>
        <div class="right">
          <div class="buttonOnline">${cardData.status}</div>
        </div>
      </div>
    </div>
    `;
    return element;
  }

  function getCardData() {
    const data = [
      {
        part1: 50,
        part2: 25,
        part3: 10,
        part4: 15,
        agvNumber: 2709,
        ip: "10.220.72.205",
        status: "Online",
        percent: 34,
      },

      {
        part1: 30,
        part2: 20,
        part3: 30,
        part4: 20,
        agvNumber: 2710,
        ip: "10.220.72.230",
        status: "Online",
        percent: 81,
      },
    ];

    return data;
  }

  /**
   *
   * @param {HTMLCanvasElement[]} chartHalfCircles
   * @param {Array} halfCircleData
   *
   *
   */
  function handleChart(chartHalfCircles, halfCircleData) {
    for (let i = 0; i <= chartHalfCircles.length - 1; ++i) {
      const chartHalfCircle = chartHalfCircles[i];
      const context2d = chartHalfCircle.getContext("2d");

      const halfCirclePart1 = halfCircleData[i].part1;
      const halfCirclePart2 = halfCircleData[i].part2;
      const halfCirclePart3 = halfCircleData[i].part3;
      const halfCirclePart4 = halfCircleData[i].part4;

      // draw background
      {
        // parameter for background
        const xBackground = 150;
        const yBackground = 149;
        const radiusBackground = 140;
        const startAngleBackground = 0;
        const endAngleBackground = Math.PI;
        const counterclockwiseBackground = true;
        const arcParameterBackground = [
          xBackground,
          yBackground,
          radiusBackground,
          startAngleBackground,
          endAngleBackground,
          counterclockwiseBackground,
        ];

        context2d.beginPath();
        context2d.arc(...arcParameterBackground);
        context2d.stroke();

        context2d.lineWidth = 15;
        context2d.strokeStyle = strokeStyleHaftCircleBackground;
        context2d.stroke();
      }

      // draw part 1
      {
        // parameter for part 1
        const xPart1 = 150;
        const yPart1 = 149;
        const radiusPart1 = 140;

        const delta1 = halfCirclePart1 / 100;
        const startAnglePart1 = (1 + delta1) * Math.PI;
        const endAnglePart1 = 1 * Math.PI;

        const counterclockwisePart1 = true;
        const arcParameterPart1 = [
          xPart1,
          yPart1,
          radiusPart1,
          startAnglePart1,
          endAnglePart1,
          counterclockwisePart1,
        ];

        context2d.beginPath();
        context2d.arc(...arcParameterPart1);
        context2d.stroke();

        context2d.lineWidth = 15;
        context2d.strokeStyle = strokeStyleHaftCirclePart1;
        context2d.stroke();
      }

      // draw part 2
      {
        // parameter for part 2
        const xPart2 = 150;
        const yPart2 = 149;
        const radiusPart2 = 140;

        const delta1 = halfCirclePart1 / 100;
        const delta2 = halfCirclePart2 / 100;
        const startAnglePart2 = (1 + delta1 + delta2) * Math.PI;
        const endAnglePart2 = (1 + delta1) * Math.PI;

        const counterclockwisePart2 = true;
        const arcParameterPart2 = [
          xPart2,
          yPart2,
          radiusPart2,
          startAnglePart2,
          endAnglePart2,
          counterclockwisePart2,
        ];

        context2d.beginPath();
        context2d.arc(...arcParameterPart2);
        context2d.stroke();

        context2d.lineWidth = 15;
        context2d.strokeStyle = strokeStyleHaftCirclePart2;
        context2d.stroke();
      }

      // draw part 3
      {
        // parameter for part 3
        const xPart3 = 150;
        const yPart3 = 149;
        const radiusPart3 = 140;

        const delta1 = halfCirclePart1 / 100;
        const delta2 = halfCirclePart2 / 100;
        const delta3 = halfCirclePart3 / 100;

        const startAnglePart3 = (1 + delta1 + delta2 + delta3) * Math.PI;
        const endAnglePart3 = (1 + delta1 + delta2) * Math.PI;

        const counterclockwisePart3 = true;
        const arcParameterPart3 = [
          xPart3,
          yPart3,
          radiusPart3,
          startAnglePart3,
          endAnglePart3,
          counterclockwisePart3,
        ];

        context2d.beginPath();
        context2d.arc(...arcParameterPart3);
        context2d.stroke();

        context2d.lineWidth = 15;
        context2d.strokeStyle = strokeStyleHaftCirclePart3;
        context2d.stroke();
      }

      // draw part 4
      {
        // parameter for part 4
        const xPart4 = 150;
        const yPart4 = 149;
        const radiusPart4 = 140;

        const delta1 = halfCirclePart1 / 100;
        const delta2 = halfCirclePart2 / 100;
        const delta3 = halfCirclePart3 / 100;
        const delta4 = halfCirclePart4 / 100;

        const startAnglePart4 =
          (1 + delta1 + delta2 + delta3 + delta4) * Math.PI;
        const endAnglePart4 = (1 + delta1 + delta2 + delta3) * Math.PI;

        const counterclockwisePart4 = true;
        const arcParameterPart4 = [
          xPart4,
          yPart4,
          radiusPart4,
          startAnglePart4,
          endAnglePart4,
          counterclockwisePart4,
        ];

        context2d.beginPath();
        context2d.arc(...arcParameterPart4);
        context2d.stroke();

        context2d.lineWidth = 15;
        context2d.strokeStyle = strokeStyleHaftCirclePart4;
        context2d.stroke();
      }
    }
  }

  function main() {
    const chartHalfCircles = window.document.getElementsByClassName(
      classes.chartHalfCircle
    );
    const layer = window.document.getElementsByClassName(classes.layer)[0];

    displayCards(layer, chartHalfCircles);
  }

  main();
})();
