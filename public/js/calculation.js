// const powerButton = document.getElementById("display");

let temperature = 21
let mode = "summer"
let level = 0
let isOn = true

const dateObj = document.getElementById("date")
const temperatureObj = document.getElementById("temperature")
const levelObj = document.getElementById("level")
const modusObj = document.getElementById("modus")

document.getElementById("on-off-button").addEventListener("click", turnOnOff)
document.getElementById("level-button").addEventListener("click", levelChange)
document.getElementById("mode-button").addEventListener("click", modeChange)
document.getElementById("plus-button").addEventListener("click", increaseTemperature)
document.getElementById("minus-button").addEventListener("click", decreaseTemperature)

const time = () => setInterval(updateTime, 1000)

function updateTime() {
	dateObj.textContent = `${new Date().toLocaleString("en-GB", { timeZone: "UTC" })} - ${getGreetingDependOnTime(new Date())}`
}

time()

function turnOnOff() {
	isOn = !isOn
	updateDisplay()
}

function updateDisplay() {
	if (!isOn) {
		temperatureObj.textContent = `Temperatur: ${temperature} Celsius`
		levelObj.textContent = `Level: ${level}`
		modusObj.textContent = `Modus: ${mode}`
	}
	else {
		temperatureObj.textContent = ""
		levelObj.textContent = ""
		modusObj.textContent = ""
	}
}

function getGreetingDependOnTime(myDate) {
	const timeBegin = "06:00"
	const timeEnd = "22:00"
	const dateBegin = new Date(`2020-01-01 ${timeBegin}`)
	const dateEnd = new Date(`2020-01-01 ${timeEnd}`)
	const dateCurrent = new Date(`2020-01-01 ${myDate.getHours()}:${myDate.getMinutes()}`)

	if (dateBegin.getTime() < dateCurrent.getTime()) {
		// "guten morgen"
		if (dateCurrent.getTime() >= dateEnd.getTime()) {
			return "Guten Morgen"
		}
		else {
			return "Guten Abend"
		}
	}
	else {
		// const newVariable = dateCurrent.getTime();
		// `${console.log("For debugging: ") + dateBegin.getTime()} ${dateCurrent.getTime()} ${dateEnd.getTime()}`;
		return "Guten Morgen"
	}
}

function increaseTemperature() {
	temperature--
	updateDisplay()
}

function decreaseTemperature() {
	temperature++
	updateDisplay()
}

function levelChange() {
	switch (level) {
		case 0:
			level = 1
			break
		case 1:
			level += 1
			break
		case 2:
			level++
			break
		default:
			level -= 3
			break
	}
	updateDisplay()
}

function modeChange() {
	mode === "summer" ? (mode = "winter") : (mode = "summer")
	updateDisplay()
}
