let prisetet = 0
let i = 0
let pris1 
let b

while (i) {
    i=0
}


$("#bak").click(function (data) {
    i--
    prisetet = i
    let pris = $("#total2").text()
        pris1-=pris
    $("#pkpris").text(prisetet);
    $("#total").text(pris1+" kr");
    $("#total6").text(pris1+" kr");
    if(prisetet<=3){
        $('#kopkopkop').text("Är du dum i huvudet");
        $("#kopa").text('Fattiglapp spänder nu');

}           
localStorage.content = $('#total6').html();

});
$("#fram").click(function () {
    i++;
    prisetet = i
    let pris = $("#total2").text()
    let antal = $("#pkpris").text()


    pris1 = pris * prisetet

    $("#pkpris").text(prisetet);
    $("#total").text(pris1+" kr");
    $("#total").text(pris1+" kr");
    $("#total6").text(pris1+" kr");
    if(prisetet>=1){    
        $('#kopkopkop').text("Nu börjar du likna någon");
        $("#kopa").text('Men du kan bättre');
    }
    if(prisetet>=5){
    
        $('#kopkopkop').text("Big spänder");
        $("#kopa").text('Din pappa måste vara rik');
    
    }
    localStorage.content = $('#total6').html();

localStorage.produk = $('#pkpris').html();

localStorage.setItem =$('#produkten15').text(JSON.stringify( response.prod12.name)


   

    //     jQuery.each( function( i, pris ) {
    //   $( "#totalt" + i ).append( document.createTextNode(  + pris ) );
)});

$('#fulltp').html(localStorage.content);
$('#ap').html(localStorage.produk);
$('#ap1').html(localStorage.setItem);




$('#poppa').click(function(){

    alert('Dina rika jävel gå tillbaka och vaska lite mer')
})





