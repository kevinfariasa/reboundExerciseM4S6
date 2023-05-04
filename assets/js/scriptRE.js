function formatoDato(valor) {
    if (valor < 10) {
        return "0" + valor;
    }
    return valor;
}

const mostrar = (pais, horas) => {
    let fecha = new Date();

    let hora = formatoDato(fecha.getHours());

    let minutos = formatoDato(fecha.getMinutes());

    let segundos = formatoDato(fecha.getSeconds());

    document.getElementById(pais).innerText = `${parseInt(hora) + parseInt(horas)
        }:${minutos}:${segundos}`;
};

const paises = () => {
    setInterval(() => {
        mostrar("relojCl", 0);
    });
    let array = [
        { name: "relojIt", hora: 6 },
        { name: "relojUk", hora: 5 },
        { name: "relojUs", hora: 0 },
        { name: "relojRu", hora: 7 },
        { name: "relojCh", hora: -12 },
        { name: "relojKo", hora: -13 },
    ];

    array.forEach((pais, index) => {
        let { name, hora } = pais;

        console.log(name, hora);

        setTimeout(() => {
            setInterval(() => {
                mostrar(name, hora);
            });
        }, (index + 1) * 4000);
    });
};

paises();
