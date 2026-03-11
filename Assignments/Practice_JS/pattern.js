//Square pattern
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         ("*")
//     }
//     console.log
// }


// function printSquare(n){
//     for(i=1;i<=n;i++){
//          line =' ';
//         for(j=1;j<=n;j++){
//             line+="* "
//         }
//         console.log(line)
//     }
// }

// printSquare(5)


// function printTriangle(n){
//     for(i=1;i<=n;i++){
//          line =' ';
//         for(j=1;j<=i;j++){
//             line+="* "
//         }
//         console.log(line)
//     }
// }

// printTriangle(5)


// function printRevTriangle(n){
//     for(i=1;i<=n;i++){
//          line =' ';
//         for(j=1;j<=n-i+1;j++){
//             line+="* "
//         }
//         console.log(line)
//     }
// }

// printRevTriangle(5)


//Star Pyramid
// function pyramidPattern(n){

//     for(i=1;i<=n;i++){
//          let line =' ';
//         for(j=1;j<=n-i;j++){
//             line+=" ";
//         }
//             for(k=1;k<=i;k++){
//                 line+="* ";
//             }
//              console.log(line)
//         }
       
//     }


// pyramidPattern(5)



// function RevpyramidPattern(n){

//     for(i=1;i<=n;i++){
//          let line =' ';
//         for(j=1;j<=n-i;j++){
//             line+=" ";
//         }
//             for(k=1;k<=i;k++){
//                 line+="* ";
//             }
//              console.log(line)
//         }
       
    

//     for(i=1;i<=n;i++){
//          let line =' ';
//         for(j=1;j<=i;j++){
//             line+=" ";
//         }
//             for(k=1;k<=n-i;k++){
//                 line+="* ";
//             }
//              console.log(line)
//         }
       
//     }
// RevpyramidPattern(5)


//Number pyramid Pattern
// function NumberpyramidPattern(n){

//     for(i=1;i<=n;i++){
//          let line =' ';
//         for(j=1;j<=n-i;j++){
//             line+=" ";
//         }
//             for(k=1;k<=i;k++){
//                 line+=" "+i;
//             }
//              console.log(line)
//         }
//     }

// NumberpyramidPattern(4)


//Number pyramid Pattern - 2
// function printPascalsTriangle(n){

//     for(let i = 0; i < n; i++){

//         let line = "";
//         let value = 1;

//         for(j=1;j<=n-i;j++){
//              line+=" ";
//          }

//         for(let k = 0; k <= i; k++){

//             line += value + " ";

//             value = value * (i - k) / (k + 1);
//         }

//         console.log(line);
//     }
// }

// printPascalsTriangle(5);


//Hallow Square

// function hallowSquare(n){
// for(let i=1;i<=n;i++){
//     let line="";
//     for(let j=1;j<=n;j++){
//         if(i==1 || i==n || j==1 || j==n){
//             line+="* ";
//         }else{
//             line+="  ";
//         }
//     }
//     console.log(line)
// }
// }

// hallowSquare(5)


//Task 9 - Hourglass Pattern

// function HourglassPattern(n){

    
//     for(let i = n; i >= 1; i--){

//         let line = "";

//         for(let j = 1; j <= (n - i) * 2; j++){
//             line += " ";
//         }

//         for(let k = 1; k <= (2*i - 1); k++){
//             line += "* ";
//         }

//         console.log(line);
//     }

//     // Bottom part
//     for(let i = 2; i <= n; i++){

//         let line = "";

//         for(let j = 1; j <= (n - i) * 2; j++){
//             line += " ";
//         }

//         for(let k = 1; k <= (2*i - 1); k++){
//             line += "* ";
//         }

//         console.log(line);
//     }
// }

// HourglassPattern(4);


//ZigZag Pattern
function printZigZag(n) {

    for (let i = 1; i <= 3; i++) {   
        let row = "";

        for (let j = 1; j <= n; j++) {

            if ((i == 1 && j % 4 == 1) ||
                (i == 2 && j % 2 == 0) ||
                (i == 3 && j % 4 == 3)) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}

printZigZag(10);







