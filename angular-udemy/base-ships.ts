class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHyperspace() {
        console.log(`Entrando no hiperespaço com ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}

//exportar essas classes (ou deixar publico)
export{Spacecraft, Containership}