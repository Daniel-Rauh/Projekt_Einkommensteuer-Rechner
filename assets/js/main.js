function show() {
    document.getElementById("labelPerson1").style.display = "block"
    document.getElementById("person1").style.display = "block"
    document.getElementById("labelPerson2").style.display = "block"
    document.getElementById("person2").style.display = "block"
    document.getElementById("zvE").placeholder = "automatisch"
    document.getElementById("zvE").disabled = true
}
function hide() {
    document.getElementById("labelPerson1").style.display = "none"
    document.getElementById("person1").style.display = "none"
    document.getElementById("labelPerson2").style.display = "none"
    document.getElementById("person2").style.display = "none"
    document.getElementById("zvE").placeholder = ""
    document.getElementById("zvE").disabled = false
}
function zurück() {
    document.getElementById("output").innerHTML = ""
    document.getElementById("zvE").value = ""
    document.getElementById("person1").value = ""
    document.getElementById("person2").value = ""
    document.getElementById("footer").innerHTML = ""
    if (document.getElementById("paar").checked == true) {
        document.getElementById("zvE").placeholder = "automatisch"
    } else {
        document.getElementById("zvE").placeholder = ""
    }
    
}
function berechne() {
    let paar = document.getElementById("paar").checked
    document.getElementById("footer").innerHTML = "Einkommensteuer beträgt:"
    if (paar == true) {
        berechnePaar()
    } else {
        berechneAlleine()
    }
}
function berechneAlleine() {
    let y
    let est
    let zve = document.getElementById("zvE").value
    let jahr = document.getElementById("jahr").value
    if (zve <= 0) {
        document.getElementById("output").innerHTML = "Bitte geben Sie einen positiven Wert an"
    } else if ((jahr == 1) && (zve <= 9000)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 1) && (zve >= 9001) && (zve <= 13996)) {
        y = (zve - 9000) / 10000
        est = Math.floor((997.8 * y + 1400) * y)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 13997) && (zve <= 54949)) {
        y = (zve - 13996) / 10000
        est = Math.floor((220.13 * y + 2397) * y + 948.49)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 54950) && (zve <= 260532)) {
        est = Math.floor(.42 * zve - 8621.75)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 260533)) {
        est = Math.floor(.45 * zve - 16437.7)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve <= 9168)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 2) && (zve >= 9169) && (zve <= 14254)) {
        y = (zve - 9168) / 10000
        est = Math.floor((980.14 * y + 1400) * y)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 14255) && (zve <= 55960)) {
        y = (zve - 14254) / 10000
        est = Math.floor((216.16 * y + 2397) * y + 965.58)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 55961) && (zve <= 265326)) {
        est = Math.floor(.42 * zve - 8780.9)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 265327)) {
        est = Math.floor(.45 * zve - 16740.68)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve <= 9408)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 3) && (zve >= 9409) && (zve <= 14532)) {
        y = (zve - 9408) / 10000
        est = Math.floor((972.87 * y + 1400) * y)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 14533) && (zve <= 57051)) {
        y = (zve - 14532) / 10000
        est = Math.floor((212.02 * y + 2397) * y + 972.79)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 57052) && (zve <= 270500)) {
        est = Math.floor(.42 * zve - 8963.74)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 270501)) {
        est = Math.floor(.45 * zve - 17078.74)
        document.getElementById("output").innerHTML = `${est}€`
    } else {
        document.getElementById("output").innerHTML = `Fehler! Bitte überprüfen Sie die Eingabe und versuchen Sie es erneut.`
    }
}
function berechnePaar() {
    let zve = (Number(document.getElementById("person1").value) + Number(document.getElementById("person2").value)) / 2
    document.getElementById("zvE").placeholder = ""
    document.getElementById("zvE").value = zve
    let y
    let est
    let jahr = document.getElementById("jahr").value
    if (zve <= 0) {
        document.getElementById("output").innerHTML = "Bitte geben Sie einen positiven Wert an"
    } else if ((jahr == 1) && (zve <= 9000)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 1) && (zve >= 9001) && (zve <= 13996)) {
        y = (zve - 9000) / 10000
        est = Math.floor(((997.8 * y + 1400) * y) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 13997) && (zve <= 54949)) {
        y = (zve - 13996) / 10000
        est = Math.floor(((220.13 * y + 2397) * y + 948.49) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 54950) && (zve <= 260532)) {
        est = Math.floor((.42 * zve - 8621.75) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 1) && (zve >= 260533)) {
        est = Math.floor((.45 * zve - 16437.7) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve <= 9168)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 2) && (zve >= 9169) && (zve <= 14254)) {
        y = (zve - 9168) / 10000
        est = Math.floor(((980.14 * y + 1400) * y) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 14255) && (zve <= 55960)) {
        y = (zve - 14254) / 10000
        est = Math.floor(((216.16 * y + 2397) * y + 965.58) * 2 )
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 55961) && (zve <= 265326)) {
        est = Math.floor((.42 * zve - 8780.9) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 2) && (zve >= 265327)) {
        est = Math.floor((.45 * zve - 16740.68) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve <= 9408)) {
        document.getElementById("output").innerHTML = "0€"
    } else if ((jahr == 3) && (zve >= 9409) && (zve <= 14532)) {
        y = (zve - 9408) / 10000
        est = Math.floor(((972.87 * y + 1400) * y) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 14533) && (zve <= 57051)) {
        y = (zve - 14532) / 10000
        est = Math.floor(((212.02 * y + 2397) * y + 972.79) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 57052) && (zve <= 270500)) {
        est = Math.floor((.42 * zve - 8963.74) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else if ((jahr == 3) && (zve >= 270501)) {
        est = Math.floor((.45 * zve - 17078.74) * 2)
        document.getElementById("output").innerHTML = `${est}€`
    } else {
        document.getElementById("output").innerHTML = `Fehler! Bitte überprüfen Sie die Eingabe und versuchen Sie es erneut.`
    }
}