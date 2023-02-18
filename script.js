

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function getInputFieldValue(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value;
}

function calculateTriangleArea(bhumiId, heightId) {
  let bhumi = getInputFieldValue(bhumiId);
  let height = getInputFieldValue(heightId);
  let triangleAreaValue = 0.5 * bhumi * height;
  return triangleAreaValue.toFixed(2);
}

function calculateRectangleArea(widthId, lengthId) {
  let width = getInputFieldValue(widthId);
  let length = getInputFieldValue(lengthId);
  let rectangleAreaValue = width * length;
  return rectangleAreaValue.toFixed(2);
}

function calculateParallelogramArea(bhumiId, heightId) {
  let bhumi = getInputFieldValue(bhumiId);
  let height = getInputFieldValue(heightId);
  let parallelogramAreaValue = height * bhumi;
  return parallelogramAreaValue.toFixed(2);
}

function calculateRhombusArea(d1Id, d2Id) {
  let d1 = getInputFieldValue(d1Id);
  let d2 = getInputFieldValue(d2Id);
  let rhombusAreaValue = 0.5 * d1 * d2;
  return rhombusAreaValue.toFixed(2);
}

function calculatePentagonArea(pId, bhumiId) {
  let p = getInputFieldValue(pId);
  let bhumi = getInputFieldValue(bhumiId);
  let pentagonAreaValue = 0.5 * p * bhumi;
  return pentagonAreaValue.toFixed(2);
}
function calculateEllipseArea(aId, bId) {
  let a = getInputFieldValue(aId);
  let b = getInputFieldValue(bId);
  let ellipseAreaValue = 3.1416 * a * b;
  return ellipseAreaValue.toFixed(2);
}

document
  .getElementById("triangle-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateTriangleArea(
      "triangle-bhumi",
      "triangle-height"
    );
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("triangle-calculate-button", resultTotal);
  });

document
  .getElementById("rectangle-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateRectangleArea(
      "rectangle-width",
      "rectangle-length"
    );
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("rectangle-calculate-button", resultTotal);
  });

document
  .getElementById("parallelogram-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateRectangleArea(
      "parallelogram-bhumi",
      "parallelogram-height"
    );
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("parallelogram-calculate-button", resultTotal);
  });

document
  .getElementById("rhombus-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateRhombusArea("rhombus-d1", "rhombus-d2");
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("rhombus-calculate-button", resultTotal);
  });

document
  .getElementById("pentagon-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculatePentagonArea("pentagon-p", "pentagon-bhumi");
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("pentagon-calculate-button", resultTotal);
  });

document
  .getElementById("ellipse-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateEllipseArea("ellipse-a", "ellipse-b");
    if (isNaN(resultTotal) || resultTotal < 0) {
      alert("Please provide a valid number");
      return;
    }
    displaySidebar("ellipse-calculate-button", resultTotal);
  });

function displaySidebar(calcBtnId, result) {
  const shapeName =
    document.getElementById(calcBtnId).parentElement.children[0].innerText;
  const container = document.getElementById("order-list-container");
  const elementCreate = document.createElement("li");
  elementCreate.classList.add("mb-4", "items-center");
  elementCreate.innerHTML = `
        <div style="display: inline" class="p-2 col-span-4">${shapeName}</div>
        <div style="display: inline; margin-right: 10px" class="p-2 text-center col-span-4"><span class="cm-result">${result}</span> <span><span class="unit">cm</span><sup>2</sup></span></div>
        <button
        onclick="convertCmToMeter(${result})" type="button" class="convert-button col-span-4 px-2 h-[30px] w-auto py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800">Covert to m<sup>2</sup></button>
        `;
  container.appendChild(elementCreate);
}

function convertCmToMeter(cmValue) {
  const meterValue = cmValue / 100;
  document.querySelector(".cm-result").innerText = meterValue.toFixed(2);
  document.querySelector(
    ".convert-button"
  ).parentElement.children[2].style.opacity = "40%";
  document.querySelector(
    ".convert-button"
  ).parentElement.children[2].style.cursor = "not-allowed";
  document.querySelector(".unit").innerText = "m";
}

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.addEventListener("mouseover", () => {
    card.style.backgroundColor = randomColor();
  });
  card.addEventListener("mouseout", () => {
    card.style.backgroundColor = "#fff";
  });
}
