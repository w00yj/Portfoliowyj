// tab menu

$(".log-con1>div").hide();
$("#appcard").show();
$(".tbtn li a").click(function(){
    $(".log-con1>div").hide();
    $($(this).attr("href")).show();
    return false;
});





// log in/out 설정

$(".inlog").hide();
$("#s2con2").hide();
$(".log-con2").hide();


$(".cbtn").click(function(){
    $(".log-con2").show();
    $(".log-con1").hide();
    $(".s2con1").hide();
    $("#s2con2").show();
    $(".logout").hide();
    $(".inlog").show();
    $(".cbtn").hide();
});

$(".outlog").click(function(){
    $(".log-con2").hide();
    $(".log-con1").show();
    $(".s2con1").show();
    $("#s2con2").hide();
    $(".logout").show();
    $(".inlog").hide();
    $(".cbtn").show();
});


// gnb 드롭다운
$(".dep2").hide();

$(".gnb>ul>li").hover(function(){
    $(this).children(".dep2").stop().slideToggle();
});
