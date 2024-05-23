const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/"

async function getIBGE() {
    let name = document.getElementById("nameSelect").value
    let sexo = document.getElementById("sexoSelect").value
    let params
    if (sexo == 'F') {
        params = new URLSearchParams({ sexo: "F" })
    } else if (sexo == 'M') {
        params = new URLSearchParams({ sexo: "M" })
    } else if (sexo == 'U') {
        params = ""
    }
    await fetch(url + name + "?" + params)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            preencheTabela(data[0]['res'])
        })
        .catch((err) => console.log(err))
    console.log(sexo)
}

var tbody = document.querySelector('tbody');

function preencheTabela(relatorios) {
    tbody.innerHTML = '';
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = "Periodo";
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.innerHTML = "Frequência";
    tr.appendChild(td2);
    tbody.appendChild(tr);

    relatorios.forEach(function (relatorio) {

        var tr = document.createElement('tr');
        for (var campo in relatorio) {
            var td = document.createElement('td');
            td.innerHTML = relatorio[campo];
            tr.appendChild(td);
        };
        tbody.appendChild(tr);
    });
}