async function getResponse() {
    let table = await fetch('https://city-mobil.ru/api/cars');
    let content = await table.json()

    let list = document.querySelector('.post');
    let row;

    list.innerHTML = '<table id="datatable" class="datatable"></table>'
    let data = document.querySelector('.datatable')
//console.log(content)
    let key

    row = ""
    row += `<tr class="title">
            <th class="th1">Марка и модель
                <svg id="sortTable" class="svgsort" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        row += `<tr id="trow" class="trow"><th class="markamodel">`+content.cars[key].mark+' '+content.cars[key].model+`</th>`

    for (let ttype in content.tariffs_list) {
        row += `<th class="thow">`

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
////////////////////////////// Вывод текста с выбранной пользователем позицией
    let selectedItem = document.getElementById('selectedItem');
    let arrElem = document.querySelectorAll('.trow');
    let arrayElem = [];
    for (let i = 0; i < arrElem.length; i++){
        arrayElem.push(arrElem[i].outerText);
        arrElem[i].addEventListener('click', function(e){
            selectedItem.value = ' Выбран автомобиль '+document.getElementsByClassName("markamodel")[i].innerText +" "+ document.getElementsByClassName("thow")[0].innerText + ' года выпуска'
        });
    }
/////////////////////////////// Поиск по таблице
    document.querySelector("#buttonResearch").onclick = function(){
        let input, filter, found, tr, th, i, j;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        tr = document.getElementsByClassName("trow");
        for (i = 0; i < tr.length; i++) {
            th = tr[i].getElementsByTagName("th");
            for (j = 0; j < th.length; j++) {
                if (th[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
/////////////////////////////// Сортировка по алфавиту
    document.querySelector("#sortTable").onclick = function(){
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("datatable");
        switching = true;
        while (switching) {
            rows = document.getElementsByClassName("trow");
            console.log(rows);
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("th")[0];
                y = rows[i + 1].getElementsByTagName("th")[0];
                if (switching) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }

                } else {

                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }

                }

            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = !switching;;
            }
        }
    }
}
getResponse();


