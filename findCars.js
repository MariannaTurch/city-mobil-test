/*function searchTable() {
    let input, filter, found, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tr = document.getElementsByClassName("trow");
    console.log(tr.length)
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        console.log(td)
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
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
}*/