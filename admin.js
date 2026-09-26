const MascotaOriginal = {
    nombre: "Martin",
    color: "Rojo",
    tipo: "Zorro",
};


const lugar = document.getElementById("lugar");


lugar.innerHTML = `Mi mascota es un ${MascotaOriginal.tipo} llamado ${MascotaOriginal.nombre} y es de color ${MascotaOriginal.color}.<br><br>`;



class Acme {
    constructor(nombre, color, tipo) {
        this.nombre = nombre;
        this.color = color;
        this.tipo = tipo;
    }

    jugar() {
        return "Hola soy " + this.nombre + " un " + this.tipo + " y soy de color " + this.color;
    }
}

const Mascota1 = new Acme("Martin", "Rojo", "Zorro");
const Mascota2 = new Acme("Luna", "Blanco", "Perro");
const Mascota3 = new Acme("Michi", "Negro", "Gato");


lugar.innerHTML += Mascota1.jugar() + "<br>" + Mascota2.jugar() + "<br>" + Mascota3.jugar();