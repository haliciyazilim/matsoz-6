function __Styles(){
    fillColor = '#f3b93e'//'#bfe8ef';
    rectStyle = {
        fillColor: '#f3b93e', //'#bfe8ef',
        strokeWidth:1,
        strokeColor:'#af762f'//'#255b63'
    },
        animationSubtractCss = {
            width:120,
            position:'absolute',
            top:'35px',
            left:'250px',
            fontSize:'24px',
            textAlign:'right',
            fontWeight:'bold',
            fontFamily:"cursive",
            zIndex:1,
            color:'#fff'
        }

    if(navigator.appName == "Microsoft Internet Explorer"){
        animationSubtractCss.fontFamily = "arial";
    }
}
;
