let tds =document.querySelectorAll('td')
let victory =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let victory2 =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let hod;
let res = 0;
let arrs = [0,1,2,3,4,5,6,7,8]
let r = [0, undefined,2,undefined,undefined,undefined,6,undefined,8]


function sluchunoeChislo(arrs) {
    let chislo = Math.floor(Math.random() * arrs.length);
    if (arrs[chislo] === undefined) {
 return sluchunoeChislo(arrs)
    }
 return chislo
       }



       function VictorY() {
            
        for (let elem of victory) {
            if (tds[elem[0]].innerHTML === hod && tds[elem[1]].innerHTML === hod && tds[elem[2]].innerHTML === hod) {
                 alert('Победил' + ' ' + hod)
                 res++
                    }
                }
            }
            
function ddd() {
    
            if (tds[4].innerHTML ==='X' && res===1) {
            let perviuHod = sluchunoeChislo(r)
            tds[perviuHod].innerHTML = 'O'
            delete arrs[perviuHod]
            res++
            } 
            

        if (res % 2 !== 0 && tds[4].innerHTML === '') {
            tds[4].innerHTML = 'O'
            delete arrs[4]
            res++
            
         }
           
    for (let i=0; i<=victory2.length-1; i++) {
        if (res % 2 !==0) {
            if  (tds[victory2[i][0]].innerHTML==='X' && tds[victory2[i][1]].innerHTML==='X' && tds[victory2[i][2]].innerHTML !=='O') {
                 tds[victory2[i][2]].innerHTML = 'O'
                 delete arrs[victory2[i][2]]
                 victory2.splice(i,1)
                 res++
                 VictorY()
                 
        }  if (tds[victory2[i][0]].innerHTML==='X' && tds[victory2[i][2]].innerHTML==='X' && tds[victory2[i][1]].innerHTML !=='O') {
                tds[victory2[i][1]].innerHTML = 'O'
                delete arrs[victory2[i][1]]
                victory2.splice(i,1)
                res++
                VictorY()
             
        }  if (tds[victory2[i][1]].innerHTML==='X' && tds[victory2[i][2]].innerHTML==='X' && tds[victory2[i][0]].innerHTML !=='O') {
                tds[victory2[i][0]].innerHTML = 'O'
                delete arrs[victory2[i][0]]
                victory2.splice(i,1)
                res++
                VictorY()
                    } 
                }
            }
        }


function func() {
        if (res % 2 !== 0) {
            hod="O"
        }
let time = setInterval(()=>{
        ddd()
        if (res % 2 !== 0 && res < 9) {
            arrs
        let t = sluchunoeChislo(arrs)
        tds[t].innerHTML = hod
        delete arrs[t]
        VictorY()
        res++
        
    }
        if (res % 2 === 0) {
        clearInterval(time)
    
    }
    
    } ,300)
}

for (let i=0; i<=tds.length-1; i++) {
    tds[i].addEventListener('click', function(){
        if (res % 2 === 0) {
            hod='X'
        } 
        if (tds[i].innerHTML !== 'X' && tds[i].innerHTML !== 'O') {
            tds[i].innerHTML = hod
            VictorY()
            delete arrs[i]
            arrs
            res++
            func()
        } else {
            alert('Вы не можете сюда походить')
        }
     
    })
}