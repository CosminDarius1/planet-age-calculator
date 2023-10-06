function selectPlanet(planetName) {
    return parseFloat(document.querySelector("#".concat(planetName)).value);
}
function getAge() {
    return parseInt(document.querySelector('#age').value);
}
function calculateAge(currentAge, planetName) {
    return currentAge / selectPlanet(planetName);
}
document.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var button = e.target;
        var planetName = button.id;
        var age = getAge();
        document.querySelector('#result').innerHTML =
            "You are ".concat(calculateAge(age, planetName).toFixed(1).toString(), " years old on ").concat(planetName);
    });
});
