const fullUrl = 'http://localhost:8000/get-data';
fetch(fullUrl)
    .then(response => response.json())
    .then(data => start(data.data))
    .catch(error => console.error(error));

function start(data) {
    fillData(data)
    changeTheme();
}
function fillData(data) {
    let container = document.getElementById("tofill");
    let code = "";
    data.forEach((ele, index) => {
        code += `<tr>
         <th scope="row">${index + 1}</th>
         <td>${ele['name']}</td>
         <td>${ele['last']}</td>
         <td>${ele['buy']} / ${ele['sell']}</td>
         <td>${ele['volume']} </td>
         <td>${ele['base_unit']} </td>
        </tr>`;
    });

    container.innerHTML = code;
}
function changeTheme() {
    let toggleSwitch = document.getElementById("theme-toggle");
    let r = document.querySelector(":root");
    toggleSwitch.addEventListener("click", function () {
        console.log("clicked");
        if (!toggleSwitch.checked) {
            r.style.setProperty("--background-color", "white");
            r.style.setProperty("--text-color", "black");
            r.style.setProperty("--row-background", "#F6F6F6");
            r.style.setProperty("--table-heading", "#7B8FA1");
        }
        else {
            r.style.setProperty("--background-color", "#191d28");
            r.style.setProperty("--text-color", "white");
            r.style.setProperty("--row-background", "#2e3241");
            r.style.setProperty("--table-heading", "#676971");
        }
    })

}