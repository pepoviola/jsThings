$(document).ready(function(){ // Script del Slider
    
	$('a.opcion1,a.opcion2,a.opcion3') . addClass('control');
	$("div.destacada2, div.destacada3") . hide();
	$('a.opcion1') . addClass('active');
	 


	 
// var Muestra1 = function(){
    $("a.opcion1").click(function(e){
        $('a.opcion2, a.opcion3').removeClass('active');
        $(this).addClass('active');
		
        $('div.destacada1').show();
        $('div.destacada2, div.destacada3') . hide();
        return false;
        e.preventDefault();
    });
//};
 
//var Muestra2 = function(){
    $("a.opcion2").click(function(e){
        $('a.opcion1, a.opcion3').removeClass('active');
        $(this).addClass('active');
		
        $('div.destacada2').show();
        $('div.destacada1, div.destacada3') . hide();
        return false;
        e.preventDefault();
    });
 //};

//var Muestra3 = function(){
    $("a.opcion3").click(function(e){
         $('a.opcion2, a.opcion1').removeClass('active');
        $(this).addClass('active');
		
        $('div.destacada3').show();
        $('div.destacada1, div.destacada2') . hide();
        return false;
        e.preventDefault();
    });
//};
	
//setInterval 
var index = 1;
var Muestreo = setInterval(function(){
						if (index == 3){
							//Muestra3;
							$("a.opcion3").click()
							//console.log(3);
							index = 1;
						}
						else if(index == 2){
							//Muestra2;
							$("a.opcion2").click()
							//console.log(2);
							index++;
						}
						else{
							//Muestra1;
							$("a.opcion1").click()
							//console.log(1);
							index++;
						}
		},3 * 1000 /* 3 segundos */);

 });


