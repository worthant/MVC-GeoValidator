import inputValidator from "./inputValidator.js";

"use strict";

document.addEventListener("DOMContentLoaded", () => {
        // Update Date and Time Function
    function updateDateTime() {
        const now = new Date();
        document.getElementById("date").innerText = now.toDateString();
        document.getElementById("time").innerText = now.toTimeString().substring(0, 8);
    }

    // Initial Date Time Update
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

window.onload = function () {
    // const savedData = JSON.parse(localStorage.getItem('tableData')) || [];
    // savedData.forEach(data => {
    //     addToTable(data.x, data.y, data.r, data.result, data.curr_time, data.exec_time);
    // })
    console.log(localStorage.getItem("session"));
    document.getElementById("output").innerHTML = localStorage.getItem("session");
}

const mainForm = document.querySelector('input[value="Check"]');
mainForm.addEventListener('click', function (e) {
    // default action is to send the form data to the server and reload the page
    // by calling .preventDefault() I am stopping the browser from doing this,
    // which allows me to handle the form submission programmatically in your JavaScript code instead.
    e.preventDefault();

    const xElement = document.querySelector('input[name="x"]:checked');
    const yElement = document.querySelector('#y');
    const rElement = document.querySelector('#r');

    if (xElement && yElement && rElement) {
        const xVal = parseFloat(xElement.value);
        const yVal = parseFloat(yElement.value.substring(0, 8));
        const rVal = parseFloat(rElement.value.substring(0, 8));
        console.log(`X: ${xVal}, Y: ${yVal}, R: ${rVal}`);

        let validator = new inputValidator();
        validator.validate(xVal, yVal, rVal);

        if (validator.getResponseCode() === 1) {
            console.log(`everything is ok`);

            fetch("controller", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    "x": xVal,
                    "y": yVal,
                    "r": rVal
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Server responded with bad getaway status: ${response.status} ${response.text()}`);
                    }
                    return response.text();
                })
                .then(function (serverAnswer) {
                    let tbody = document.getElementById("output");
                    tbody.innerHTML = serverAnswer;
                })
                .catch(error => {
                    alert(`There was an error processing your request: ${error.message}`);
                });
        } else {
            Toastify({
                text: validator.getMessage(),
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    border: "1px solid white"
                },
                offset: {
                    x: 240,
                    y: 60
                },
                position: "right",
            }).showToast();
        }
    } else {
        Toastify({
            text: "You should fill the form before submitting it :)",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                border: "1px solid white"
            },
            offset: {
                x: 240,
                y: 60
            },
            position: "right",
        }).showToast();
    }
});

const svgElement = document.querySelector("svg");
svgElement.addEventListener("click", function(event) {
    // Проверяем, установлен ли радиус
    const rElement = document.querySelector('#r');
    if (!rElement || !rElement.value || isNaN(parseFloat(rElement.value))) {
        alert("Не возможно определить координаты точки без радиуса");
        return;
    }

    const rect = svgElement.getBoundingClientRect();
    const svgCenterX = rect.left + rect.width / 2; // Центр SVG по X
    const svgCenterY = rect.top + rect.height / 2; // Центр SVG по Y
    const r = parseFloat(rElement.value);

    console.log(`svgCenterX: ${svgCenterX}, svgCenterY: ${svgCenterY}, svgCenterY: ${svgCenterY}`)

    // Получаем координаты клика относительно документа и пересчитываем их относительно центра SVG
    let x = event.clientX - svgCenterX;
    let y = svgCenterY - event.clientY;

    // Нормализуем координаты относительно заданного радиуса R
    x = Math.round((x / 150) * r);
    y = (y / 150) * r;

    console.log(`X: ${x}, Y: ${y}, R: ${r}`);

    let validator = new inputValidator();
    validator.validate(x, y, r);

    if (validator.getResponseCode() === 1) {
        console.log(`everything is ok`);

        fetch("controller", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                "x": x,
                "y": y,
                "r": r
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Server responded with bad getaway status: ${response.status} ${response.text()}`);
                }
                return response.text();
            })
            .then(function (serverAnswer) {
                let tbody = document.getElementById("output");
                tbody.innerHTML = serverAnswer;
                transformIntoDot(x, y, r, serverAnswer)
            })
            .catch(error => {
                alert(`There was an error processing your request: ${error.message}`);
            });
    } else {
            Toastify({
                text: validator.getMessage(),
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    border: "1px solid white"
                },
                offset: {
                    x: 240,
                    y: 60
                },
                position: "right",
            }).showToast();
        }
});

function transformIntoDot(x, y, r, data) {
    const success = data.lastIndexOf("Hit") > data.lastIndexOf("Didnt hit");
    const color = success ? "green" : "red";

    // Перевод в координаты SVG
    const svgX = (x / r) * 100 + 150;
    const svgY = 150 - (y / r) * 100;

    // Добавляем точку
    addDotToSvg(svgX, svgY, color, 5);
}

function addDotToSvg(x, y, color, r) {
    const svgElement = document.querySelector("svg");

    const newDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newDot.setAttribute("cx", x);
    newDot.setAttribute("cy", y);
    newDot.setAttribute("r", r);
    newDot.setAttribute("fill", color);
    svgElement.appendChild(newDot);
}

function updateSVG(r) {
    // Update text
    document.querySelector('text[x="195"]').textContent = `${r/2}`;
    document.querySelector('text[x="248"]').textContent = `${r}`;
    document.querySelector('text[x="40"]').textContent = `-${r}`;
    document.querySelector('text[x="90"]').textContent = `-${r/2}`;
    document.querySelector('text[y="105"]').textContent = `${r/2}`;
    document.querySelector('text[y="55"]').textContent = `${r}`;
    document.querySelector('text[y="205"]').textContent = `-${r/2}`;
    document.querySelector('text[y="255"]').textContent = `-${r}`;

    // Update rectangle (left bottom)
    const rect = document.querySelector("rect");
    rect.setAttribute('width', 100 * r / 2);
    rect.setAttribute('height', 100 * r);

    // Update triangle (right bottom)
    const triangle = document.querySelector("polygon");
    const trianglePoints = `150,250 150,${250 - 100 * r} ${150 - 100 * r / 2},150`;
    triangle.setAttribute('points', trianglePoints);

    // Update semi-circle (left top)
    const semiCircle = document.querySelector("path");
    const semiCirclePath = `M ${150 - 100 * r} 150 A ${100 * r} ${100 * r}, 0, 0, 1, 150 ${150 - 100 * r} L 150 150 Z`;
    semiCircle.setAttribute('d', semiCirclePath);
}

const rElement = document.querySelector('#r');

rElement.addEventListener('input', function() {
    const r = parseFloat(rElement.value);
    updateSVG(r);
});
