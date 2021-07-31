//C:\"VS CODE FILES and FOLDERS(playground)"\RANDOM\hellohi.txt
//C:\"VS CODE FILES and FOLDERS(playground)"\RANDOM\temporary.txt
let fs = require('fs');

let inputArr = process.argv.slice(2);
let optionArr = []
let filesArr = []

for(let i=0; i < inputArr.length; i++){
    if(inputArr[i][0] == '-')             //check for options in inputArr
        optionArr.push(inputArr[i])     //collecting options in optionArr
    else
        filesArr.push(inputArr[i])      //collecting paths in filesArr
}

for(let i=0; i < filesArr.length; i++){ //checking if valid paths provided
    if(!fs.existsSync(filesArr[i])){
        console.log( "ERR!! one or more file paths entered are invalid" );
        return ;
    }
}

let content = "";
// remember that the text files written in vscode have \r\n at end of every line

for(let i=0; i < filesArr.length ; i++){
    content += fs.readFileSync(filesArr[i]) + '\r\n';
}

let contentArr=content.split('\r\n');
let isSPresent=optionArr.includes('-s')

if (isSPresent){
    for(let i=1; i< contentArr.length; i++){   //marking places which need to be removed as null
        if(contentArr[i] == "" && contentArr[i - 1] == "")
            contentArr[i] = null;
        else if( contentArr[i] == "" && contentArr [i-1] == null)
            contentArr[i]=null;
            
    }
    let tempArr=[];

    for(let i=0; i<contentArr.length; i++){  //adding all other than null
        if(contentArr[i]!==null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr

}
console.log(contentArr.join("\n\r"));

