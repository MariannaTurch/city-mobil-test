async function getResponse() {
    let table = await fetch('https://city-mobil.ru/api/cars');
    let content = await table.json()

    let list = document.querySelector('.post')
    let row

    list.innerHTML = '<table class="datatable"></table>'
    let data = document.querySelector('.datatable')
//console.log(content)
    let key

    row = ""
    row += `<tr class="title">
            <th class="th1">Марка и модель
                <svg onclick="sortTable()" class="svgsort" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8333 5.5H8.49996V0.5H3.49996V5.5H0.166626L5.99996 11.3333L11.8333 5.5ZM0.166626 13V14.6667H11.8333V13H0.166626Z" fill="#7B8395"/>
                </svg>
            </th>`
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
        row += `<tr onclick=F() id="trow" class="trow"><th>`+content.cars[key].mark+' '+content.cars[key].model+`</th>`

    for (let ttype in content.tariffs_list) {
        row += `<th id="thow">`

        if (content.cars[key].tariffs.hasOwnProperty(content.tariffs_list[ttype])) {
            row += `${content.cars[key].tariffs[content.tariffs_list[ttype]].year}`
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

//Нажатие на строку таблицы и вывод в поле под таблицей
function F() {
alert('')
}