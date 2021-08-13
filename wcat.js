let fs = require('fs');     //importing fs module
let inputArr = process.argv.slice(2);   //taking command arguments
let optionArr = []      //initializing list to storing options
let filesArr = []       //initializing list for storing file paths
for(let i=0; i < inputArr.length; i++){     //collecting paths and options/modes
    if(inputArr[i][0] == '-')               //check for options in inputArr
        optionArr.push(inputArr[i])         //collecting options in optionArr
    else
        filesArr.push(inputArr[i])          //collecting paths in filesArr
}
for(let i=0; i < optionArr.length; i++){    //check for invalid options/modes
    if(optionArr[i]!='-s'){
        if(optionArr[i]!='-n')
            if( optionArr[i]!='-b'){
                console.log("ERR!! one or more modes/options entered are invalid")
                return; //terminate
            } 
    }
}
for(let i=0; i < filesArr.length; i++){     //checking for invalid paths
    if(!fs.existsSync(filesArr[i])){
        console.log( "ERR!! one or more file paths entered are invalid" );
        return ;    //terminate
    }
}
let content = "";   //for collecting content
// remember that the text files written in vscode have \r\n at end of every line
//in windows
for(let i=0; i < filesArr.length ; i++){    //adding newline character after reading each file 
    content += fs.readFileSync(filesArr[i]) + '\r\n';   
}

let contentArr=content.split('\r\n');
let isSPresent=optionArr.includes('-s')         //checking if options present

if (isSPresent){    //implemeting option '-s'
    for(let i=1; i< contentArr.length; i++){   //marking places which need to be removed as null
        if(contentArr[i] == "" && contentArr[i - 1] == "")
            contentArr[i] = null;
        else if( contentArr[i] == "" && contentArr [i-1] == null)
            contentArr[i]=null;    
    }
    let tempArr=[];

    for(let i=0; i<contentArr.length; i++){  //adding all to tempArr other than null values
        if(contentArr[i]!==null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr 
}
let indexOfN=optionArr.indexOf('-n');
let indexOfB=optionArr.indexOf('-b');
let finalOption=""  //to select between '-b' and '-n'
if(indexOfB>-1 && indexOfN>-1){  //if both options present
    if(indexOfB > indexOfN)     //if index of b is more than n assign b
        finalOption="-n"
    else                        //if index of n is less than b assign n
        finalOption="-b"
}        
else{   //if either of the two options is present
    if(indexOfB > -1){           //if only option b present
        finalOption="-b"
         
    }
    else if(indexOfN > -1){      //if only option n present
        finalOption="-n"
            
    }
}
if(finalOption != ''){
    if(finalOption == '-n'){
         modifyContentByN(contentArr);  //function fot option a
    }
    else if(finalOption == '-b'){
        modifyContentByB(contentArr);   //function for option b
    }
}
function modifyContentByN(contentArr){  //modifying for '-n'
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+1)+". "+contentArr[i];
    }
}
function modifyContentByB(contentArr){  //modifying for '-b'
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=''){
            contentArr[i]=count+". "+contentArr[i];
            count++;
        }
    }
}
let finalOutput=contentArr.join("\r\n")
console.log(finalOutput)
