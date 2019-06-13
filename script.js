var pos = $("img").offset();
$("#speech").offset({top:500, left:200});
console.log(pos);
$("body").keydown(function(key){
    if(key.which === 37){
        $("img").offset({top:130, left:20});
    }else if(key.which === 39){
        $("img").offset({top:150, left:650});
    }else if(key.which === 40){
        $("img").offset({top:550, left:250});
    }
});