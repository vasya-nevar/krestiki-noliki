

let tds = document.querySelectorAll('td')

let result = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let res = 1;
let hod ='X'


for (let td of tds){
    td.addEventListener('click', function() {
        if (res % 2 === 0) {
            hod = 'O'
        } else {
            hod = 'X'
        }
        td.innerHTML = hod
        res++
        func()
    })
}


function func() {
    for (let elem of result) {
        if (tds[elem[0]].innerHTML === hod && tds[elem[1]].innerHTML ===  hod && tds[elem[2]].innerHTML ===  hod) {
            alert('pobedil' + ' ' + hod)
           }
    }
   
}