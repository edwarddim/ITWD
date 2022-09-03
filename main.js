$(document).ready(function(){
    generateTime()
    setInterval(generateTime, 5000)
    function generateTime(){
        var dt = new Date();
        document.getElementById("datetime").innerHTML = dt.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' });
    }

    $("#internet_title").click(function(){
        $("#req_res").toggle();
    })

    $("#big_3").click(function(){
        $("#html_css_js").toggle();
    })

    $("#box_model").click(function(){
        $("#pic_frame").toggle();
    })
})

