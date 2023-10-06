

function selectPlanet(planetName: string): number  {
    return parseFloat(document.querySelector<HTMLButtonElement>(`#${planetName}`).value)
}

function getAge(): number {
    return parseInt(document.querySelector<HTMLInputElement>('#age').value)
}

function calculateAge(currentAge: number, planetName: string): number {
    return currentAge / selectPlanet(planetName)
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener("click", (e: MouseEvent) => {
        const button: HTMLButtonElement = (e.target as HTMLButtonElement)
        const planetName: string = button.id
        const age: number = getAge()
       document.querySelector('#result').innerHTML =
`You are ${calculateAge(age, planetName).toFixed(1).toString()} years old on ${planetName}`



    })
})