function myFunction(){
    var x = document.getElementById("mybar");

    if (x.className === "mybar"){
        x.className += "responsive";
    }
    else{
        x.className = "mybar";
    }
}
/*<a href="havascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
font-size: 18px; 
line-height: 25px;
border-radius: 4px;*/