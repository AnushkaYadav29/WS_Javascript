
function printTriangle(n){
    for(i=1;i<=n;i++){
         line =' ';
        for(j=1;j<=i;j++){
            line+="* "
        }
        console.log(line)
    }
}

printTriangle(5)