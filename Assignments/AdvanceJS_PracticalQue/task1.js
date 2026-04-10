
function fetchData(callback){
    setTimeout(()=>{
        const data={name : "Anushka", age:23}
        callback(data);
    },2000);
}

function displayData(data){
    console.log("Data : ",data)
}

fetchData(displayData)


function readFile(callback){
    setTimeout(()=>{
        const fileData="Reading the file";
        callback(fileData)
    },1500)
}

readFile((data)=>{
    console.log("File Read", data)
});

// function displayRead(fileData){
//     console.log("Reading data",fileData)
// }

// readFile(displayRead)