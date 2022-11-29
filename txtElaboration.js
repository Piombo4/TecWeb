var totMaiusc;
var counter = 0;
var nomeFile;
var totChars=0;
function receiveElements(){
    var txt = document.querySelector("#txt").value;
    nomeFile = document.querySelector("#nomeFile").value;
    var x;

    if (txt.length % 2 == 0) {
        x = (txt.length / 2);
      } else {
        x = (txt.length / 2) - 1;
      }
      const firstHalf = txt.toString().substring(0, x);
      const secondHalf = txt.toString().substring(x, txt.length);
    for(let i=0;i<2;i++){
        if(i==0){
            toServlet(firstHalf);            
        }
        toServlet(secondHalf);
    }
    
}
function toServlet(half){
    var argument = "txt=" + half;
    fetch("./Convert", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: argument,})
        .then(response => response.json())
        .then(data => {check(data)})
        .catch((error) =>console.log("ERRORE"))
}
function downloadContent(name, content) {
    var atag = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
}
  
function check(data){
    counter++;
    totChars +=data[1].length;
    console.log(data +"\n" + totChars);
    if(counter==2){
        totMaiusc +=data[0].toString();
        downloadContent(nomeFile,totMaiusc);
        document.querySelector("#result").value = totChars.toString();
    }
    else{
        totMaiusc = data[0].toString();

    }
}
