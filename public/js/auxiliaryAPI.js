exports.celsiusToFahrenheit = function (celsius) {
	return celsius * (9 / 5) + 32
}

exports.fahrenheitToCelcius = function (fahrenheit) {
	return (fahrenheit - 32) * (5 / 9)
}

exports.getGreetingDependOnTime = function (date) {
	const minutes = date.getHours() * 60 + date.getMinutes()
	const nowIsEvening = minutes >= 22 * 60 || minutes < 6 * 60
	return nowIsEvening ? "Guten Abend" : "Guten Morgen"
}
