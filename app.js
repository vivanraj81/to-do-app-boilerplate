const inp =document.getElementById('input')
const cont = document.getElementById('todolist')


const arr =[] ;

function del(index){
    console.log("dele"+index);
    arr.splice(index,1);
    create();
}

function edit(index){
    console.log(index);
    console.log("edit");
    const text = prompt("Enter the text here");
    arr.splice(index,1,text);
    create()
}

function create(){
    cont.innerHTML = "";
    arr.forEach((ele,index) =>{
        let temp =""
        temp = "<li>"+ ele+ `<a onclick = 'edit(${index})'>` + "Edit" + "</a>" + `<a onclick = 'del(${index})'>` + "<pre>"+ "&#10060; | " + "</pre>" +"</a>" +"</li>"
        cont.innerHTML += temp;
    })
}


inp.onchange= () =>{
    console.log(inp.value);
    arr.push(inp.value)
    console.log(arr);
    create()
}