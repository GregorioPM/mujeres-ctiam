$(document).ready(function(){
    var imgPost=1;
    var imgItems= $('.slider li').length; //numero slides
    for (let i = 1; i <= imgItems; i++) {
        $('.pagination').append(' <li class="pagination-item" for="1"> <img src="images/slider/ctiam'+i+'.jpg">  </li>');
        
    }
    
    $('.slider li').hide(); // ocultar slide
    $('.slider li:first').show(); // muestra primes slide
    $('.pagination li').show(); // muestra paginacion slide
    $('.pagination .pagination-item:first').css({'background-color':'#fff'}); // Selecciona slide

    $('.pagination li').click(pagination);
    $('.prueba span').click(nextSlider);

    ny = setInterval( nextSlider , 10000);

    //Funciones

    function pagination(){
        var paginationPos = $(this).index() + 1;    

        $('.slider li').hide();
        $('.slider li:nth-child('+paginationPos+')').show();
        $('.pagination .pagination-item').css({'background-color':'#ffffff80'});
        $('.pagination li:nth-child('+paginationPos+')').css({'background-color':'#fff'});

       imgPost= paginationPos;
    }

    function nextSlider(){
       
console.log(imgPost);
     if( imgPost >= imgItems) {imgPost = 1;}
        else{imgPost++;}
    
    $('.pagination li').css({'background-color':'#ffffff80'});
        $('.pagination li:nth-child('+imgPost+')').css({'background-color':'#fff'});

    $('.slider li').hide();
    $('.slider li:nth-child('+imgPost+')').fadeIn(500);

    } 
})