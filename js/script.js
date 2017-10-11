var paras = document.getElementsByTagName("p");
for (var i = 0; i<paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if (title_text){
        console.log(title_text);
    }
}