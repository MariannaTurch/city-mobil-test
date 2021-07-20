async function getResponse() {
    let table = await fetch('https://city-mobil.ru/api/cars');

    let content = await table.json()
   /* content = content.splice(0, 1)*/
    let list = document.querySelector('.post')
    let row

    list.innerHTML = '<table class="datatable"></table>'
    let data = document.querySelector('.datatable')
console.log(content)
    console.log(content.cars)
   let key;

    row = ""
    row += `<tr class="title"><th>Марка и модель</th>`
    for (let ttype in content.tariffs_list) {
        row += `<th>`
        row += content.tariffs_list[ttype]
        row += `</th>`
    }
    row += `</tr>`
    data.innerHTML += row
    for (key in content.cars)
    {
        row = ""
        row += `<tr class="trow"><th>`+content.cars[key].mark+' '+content.cars[key].model+`</th>`

    for (let ttype in content.tariffs_list) {
        row += `<th>`

        if (content.cars[key].tariffs.hasOwnProperty(content.tariffs_list[ttype])) {
            row += `
            ${content.cars[key].tariffs[content.tariffs_list[ttype]].year}
            `
        } else {
            row += `-`
        }
        row += `</th>`

    }

        row += '</tr>'
        data.innerHTML += row

    }


}
getResponse()
