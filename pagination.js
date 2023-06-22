let main_div = document.createElement("div")
main_div.setAttribute("class", "container")
main_div.style.margin = "10px 100px";
main_div.style.height = "70vh";
main_div.style.width = "70vw";
document.body.appendChild(main_div)

// function get_records(obj) {
//     obj.forEach((value) => {
//         // console.log(Object.values(value))
//         let tr = document.createElement("tr")

//         value_arr = Object.values(value)
//         value_arr.forEach((element) => {
//             let td = document.createElement("td")
//             td.innerText = element
//             td.style.border = "1px solid black"
//             tr.appendChild(td)
//         })
//         table.appendChild(tr)
//     })
// }


data = new XMLHttpRequest();
data.responseType = 'text';
data.open('get', 'pagination.json', true);
data.send();
let no_of_pages = 0;
let info;
let table;
data.onload = function () {
    if (data.status === 200) {
        info = JSON.parse(data.responseText);
        // info_arr = Array.from(info)
        no_of_pages = info.length;
        console.log(info.length);
        // console.log(info)
        // console.log(Object.fromEntries(Object.entries(info).slice[0, 11]))
        console.log(Object.values(info).slice(0, 11))

        table = document.createElement("table")
        table.setAttribute("class", "main_table")
        table.style.border = "1px solid black"
        table.style.borderCollapse = "collapse"
        table.style.textAlign = "center"
        table.style.margin = "0 auto"

        let cols = Object.keys(info[0])
        // console.log(cols)

        let thead = document.createElement("thead")
        let tr = document.createElement("tr")

        cols.forEach((value) => {
            let th = document.createElement("th")
            th.innerText = value
            th.style.border = "1px solid black"
            tr.appendChild(th)
        })
        thead.appendChild(tr)
        table.appendChild(thead)
        main_div.appendChild(table)

        Object.values(info).slice(0, 10).forEach((value) => {
            // console.log(Object.values(value))
            let tr = document.createElement("tr")

            value_arr = Object.values(value)
            value_arr.forEach((element) => {
                let td = document.createElement("td")
                td.innerText = element
                td.style.border = "1px solid black"
                tr.appendChild(td)
            })
            table.appendChild(tr)
        })
        main_div.appendChild(table)
    }
}


let page_bar = document.createElement("footer")
page_bar.setAttribute("class", "paging")
page_bar.setAttribute("id", "page")
document.body.appendChild(page_bar)

page_bar.style.height = "50px";
page_bar.style.background = "lightgreen";
page_bar.style.marginTop = "10vh";
// page_bar.style.alignContent = "center"
// page_bar.style.justifyContent = "center"

const button_height = "40px";
const button_width = "55px";
const button_margin = "5px";

let page_button_function = (no_of_buttons) => {
    let i = 1
    while (i <= no_of_buttons) {
        // button_name = i + "_button"
        let button_name = document.createElement("button")
        button_name.setAttribute("class", "page_button")
        button_name.setAttribute("id", "button_name")
        button_name.innerText = i
        page_bar.appendChild(button_name)
        button_name.style.height = button_height
        button_name.style.width = button_width
        button_name.style.margin = button_margin
        i++
    }

}

let first_button = document.createElement("button")
first_button.setAttribute("class", "page_button")
first_button.setAttribute("id", "first_button")
first_button.innerText = "First"
page_bar.appendChild(first_button)
first_button.style.height = button_height
first_button.style.width = button_width
first_button.style.margin = button_margin

let next_button = document.createElement("button")
next_button.setAttribute("class", "page_button")
next_button.setAttribute("id", "next_button")
next_button.innerText = "Next"
page_bar.appendChild(next_button)
next_button.style.height = button_height
next_button.style.width = button_width
next_button.style.margin = button_margin

page_button_function(10)


