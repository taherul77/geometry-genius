function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function getInputFieldValue(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value
}

function calculateTriangleArea(bhumiId, heightId) {
  let bhumi = getInputFieldValue(bhumiId);
  let height = getInputFieldValue(heightId);
  let triangleAreaValue = 0.5 * bhumi * height;
  return triangleAreaValue;
}

function calculateRectangleArea(widthId, lengthId) {
  let width = getInputFieldValue(widthId);
  let length = getInputFieldValue(lengthId);
  let rectangleAreaValue = width * length;
  return rectangleAreaValue;
}

function calculateParallelogramArea(bhumiId, heightId) {
  let bhumi = getInputFieldValue(bhumiId);
  let height = getInputFieldValue(heightId);
  let parallelogramAreaValue = height * bhumi;
  return parallelogramAreaValue;
}

function calculateRhombusArea(d1Id, d2Id) {
  let d1 = getInputFieldValue(d1Id);
  let d2 = getInputFieldValue(d2Id);
  let rhombusAreaValue = 0.5 * d1 * d2;
  return rhombusAreaValue;
}

function calculatePentagonArea(pId, bhumiId) {
  let p = getInputFieldValue(pId);
  let bhumi = getInputFieldValue(bhumiId);
  let pentagonAreaValue = 0.5 * p * bhumi;
  return pentagonAreaValue;
}
function calculateEllipseArea(aId, bId) {
  let a = getInputFieldValue(aId);
  let b = getInputFieldValue(bId);
  let ellipseAreaValue = 3.1416 * a * b;
  return ellipseAreaValue;
}

document
  .getElementById("triangle-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = calculateTriangleArea(
      "triangle-bhumi",
      "triangle-height"
    );
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
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
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
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
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
    }
    displaySidebar("parallelogram-calculate-button", resultTotal);
  });

document
  .getElementById("rhombus-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = (calculateRhombusArea("rhombus-d1", "rhombus-d2"));
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
    }
    displaySidebar("rhombus-calculate-button", resultTotal);
  });

document
  .getElementById("pentagon-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = (calculatePentagonArea("pentagon-p", "pentagon-bhumi"));
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
    }
    displaySidebar("pentagon-calculate-button", resultTotal);
  });

document
  .getElementById("ellipse-calculate-button")
  .addEventListener("click", () => {
    let resultTotal = (calculateEllipseArea("ellipse-a", "ellipse-b"));
    if (isNaN(resultTotal) || (resultTotal < 0)) {
      alert("Please provide a valid number");
      return
    }
    displaySidebar("ellipse-calculate-button", resultTotal);
  });

function displaySidebar(calcBtnId, result) {
  const shapeName =
    document.getElementById(calcBtnId).parentElement.children[0].children[0]
      .innerText;
  console.log(shapeName);
  const container = document.getElementById("order-list-container");
  const elementCreate = document.createElement("li");
  elementCreate.classList.add("grid", "grid-cols-12", "mb-4", "items-center");
  elementCreate.innerHTML = `
        <div class="p-2 col-span-4">${shapeName}</div>
        <div class="p-2 text-center col-span-4"><span id="cm-result">${result}</span> <span>cm<sup>2</sup></span></div>
        <button id="meter-convert-button" type="button" class="col-span-4 px-1 h-[30px] w-auto py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Covert to m<sup>2</sup></button>
        `;
  container.appendChild(elementCreate);
}

document.getElementById("meter-convert-button").addEventListener("click",() =>{
  // getInnerText("cm-result")
console.log(getInnerText("cm-result"));
})