
// async function getUser(){
//     try{
//         let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=ca018df54353f065aaed7d802825b8be`) 
//         let data=await res.json();
//         console.log(data);
//     }catch(error){
//         console.log("Error:",error);
//     }
// }

// getUser();



async function getUser() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user=await response.json();
        console.log("User : ",user);
    }catch(err){
        console.log("Failed to fetch user : ",err);
    }
}

getUser();