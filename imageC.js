let iter=1, iter2 = 1;

$("#izBu").click(function(){
    if(iter <= 15){
        let currdv = 16-iter;        
        $("#dimg1").html("<img src =" + "img/JC"+currdv+".jpg" + " />");
        $("#dimg2").html("<img src =" + "img/JC"+(currdv+1)+".jpg" + " />");
        $("#dimg3").html("<img src =" + "img/JC"+(currdv+2)+".jpg" + " />");
        $("#bigone").html("<img src =" + "img/JC"+(currdv+2)+".jpg" + " />");
        $("#dimg4").html("<img src =" + "img/JC"+(currdv+3)+".jpg" + " />");
        $("#dimg5").html("<img src =" + "img/JC"+(currdv+4)+".jpg" + " />");
        iter++;
    }else{
        iter=1;
    }
});



$("#derBu").click(function(){
    if(iter >= 1){
        let currdv = 1+iter;        
        $("#dimg1").html("<img src =" + "img/JC"+currdv+".jpg" + " />");
        $("#dimg2").html("<img src =" + "img/JC"+(currdv-1)+".jpg" + " />");
        $("#dimg3").html("<img src =" + "img/JC"+(currdv-2)+".jpg" + " />");
        $("#bigone").html("<img src =" + "img/JC"+(currdv-2)+".jpg" + " />")
        $("#dimg4").html("<img src =" + "img/JC"+(currdv-3)+".jpg" + " />");
        $("#dimg5").html("<img src =" + "img/JC"+(currdv-4)+".jpg" + " />");
        iter--;
    }else{
        iter=15;
    }
});