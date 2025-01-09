function getWordCount(str){
    let splited = str.trim().split(/\s+/);
    if(splited==''){
        return 0;
    }
    return splited.length;
}
function Counter(str){
    let alphabets = 0;
    let numbers = 0;
    let characters = 0;
    for (let i = 0;i<str.length;i++){
        if(str[i]!='' && str[i]!='\n'){
            characters++;
        }
        if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
            alphabets++;
        }
        else if(str[i]>='0' && str[i]<='9'){
            numbers++;
        }
    }
    document.getElementById("characters").value = characters;
    document.getElementById("alphabets").value = alphabets;
    document.getElementById("numbers").value = numbers;
}

function wordCounter(){
    let inputText = document.getElementById("inputText");
    let words = getWordCount(inputText.value);
    document.getElementById("words").value = words;
    Counter(inputText.value);
}