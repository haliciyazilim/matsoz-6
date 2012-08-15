function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
    images:[
        {
            id:'rect_back',
            src:'/assets/animations/uzay/rect_back.png'
        },
        {
            id:'rect_front',
            src:'/assets/animations/uzay/rect_front.png'
        },
        {
            id:'ball',
            src:'/assets/animations/uzay/ball.png'
        },
        {
            id:'earth',
            src:'/assets/animations/uzay/earth.png'
        },
        {
            id:'solar_system',
            src:'/assets/animations/uzay/solar_system.jpg'
        },

    ],
	init:function(container){
			Animation.container = container;
            var center = new Point($(container).width()*0.5,$(container).height()*0.5);
            Animation.centerPoint = center;
            Animation.rect_back = new Raster('rect_back');
            Animation.rect_back.position = center.add(0,2);
            Animation.ball = new Raster('ball');
            Animation.ball.position = center;
            Animation.rect_front = new Raster('rect_front');
            Animation.rect_front.position = center.add(0,2);
            Animation.traverseBall();
		},
   traverseBall : function(){
            Animation.ball.scale(0.4);
            Animation.ball.position = Animation.ball.position.add(120,30)
            Animation.ball.animate({
                style:{position:Animation.ball.position.add(-240,10)},
                duration:1000,
                animationType:'easeInEaseOut',
                callback:function(){
                Animation.ball.animate({
                    style:{position:Animation.ball.position.add(120,10)},
                    duration:1000,
                animationType:'easeInEaseOut',
                    callback:function(){
                    Animation.ball.animate({
                        style:{position:Animation.ball.position.add(120,-20)},
                        duration:1000,
                animationType:'easeInEaseOut',
                        callback:function(){
                        Animation.ball.animate({
                            style:{position:Animation.ball.position.add(20,20)},
                            duration:500,
                animationType:'easeInEaseOut',
                            callback:function(){
                            Animation.ball.animate({
                                style:{position:Animation.centerPoint},
                                duration:1000,
                                animationType:'easeInEaseOut',
                                callback:function(){
                                    Animation.rect_front.animate({
                                        style:{opacity:0},
                                        duration:1000,
                                        update:function(){
                                            Animation.rect_back.opacity = this.opacity;
                                        } ,
                                        callback:function(){
                                            Animation.rect_back.remove();
                                            Animation.rect_front.remove();
                                            Animation.zoomToBall();
                                        }
                                    })
                                    
                                    
                                }
                            });
                            }
                        });
                        }
                    });
                    }
                });
                }
            });
        },
    zoomToBall : function(){
            
            var animHelper = new AnimationHelper({
                scale:0.4
            });
            
            animHelper.animate({
                style:{scale:1},
                duration:1000,
                animationStyle:'easeOut',
                update:function(){
                    var matrix;
                    matrix = Animation.ball.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    Animation.ball.setMatrix(matrix);
                    Animation.ball.position = Animation.centerPoint;
                },
                callback:Animation.transformBallToEarth
            })
        },
    transformBallToEarth:function(){
            Animation.earth = new Raster('earth');
            Animation.earth.position = Animation.centerPoint;
            Animation.earth.set_style({opacity:0});

            Animation.ball.animate({
                style:{opacity:0},
                duration:1000,
                delay:500
            });
            Animation.earth.animate({
                style:{opacity:1},
                duration:1000,
                delay:500,
                callback:Animation.placeEarthInTheSolarSystem
            });
        },
    placeEarthInTheSolarSystem : function() {
            Animation.solar_system = new Raster('solar_system');
            Animation.solar_system.position = Animation.centerPoint.add(325,-112);
            Animation.solar_system.set_style({opacity:0});
            Animation.earth.insertAbove(Animation.solar_system);
            Animation.earth.scale = 1;
            Animation.earth.animate({
                style:{scale:0.4450},
                duration:1000,
                init:function(){
                  Animation.solar_system.animate({
                        style:{opacity:1},
                        duration:1000
                    });  
                },
                update:function(){
                    var matrix = this.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    this.setMatrix(matrix);
                    this.position = Animation.centerPoint;
                },
                callback:function(){
                      Animation.zoomOutSolarSystem();
                      this.position = new Point(200,100);
                      this.opacity = 0;  
                }
            });

        },
    zoomOutSolarSystem : function(){

            Animation.solar_system._p = Animation.solar_system.position;
            Animation.solar_system.scale = 1;
            Animation.solar_system.animate({
                style:{_p:Animation.centerPoint.add(0,0),scale:0.5},
                duration:1000,
                delay:500,
                animationType:'easeOut',
                update:function(){
                    var matrix = this.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    this.setMatrix(matrix);
                    this.position = this._p;
                },
                callback:Main.animationFinished
            })

        }
}

var Interaction = {
    images : [
            {
                id:'class',
                src:'/assets/animations/uzay/class.jpg',
                name:'Sınıf',
                isSpace:true
            },
            {
                id:'room',
                src:'/assets/animations/uzay/room.jpg',
                name:'Evin bir odası',
                isSpace:true
            },
            {
                id:'pencil',
                src:'/assets/animations/uzay/pencil.jpg',
                name:'kalem',
                isSpace:false
            },
            {
                id:'school',
                src:'/assets/animations/uzay/school.jpg',
                name:'Okul',
                isSpace:true
            },
            {
                id:'matchbox',
                src:'/assets/animations/uzay/matchbox.jpg',
                name:'Kibrit kutusu',
                isSpace:true
            },
            {
                id:'stadium',
                src:'/assets/animations/uzay/stadium.jpg',
                name:'Futbol Stadı',
                isSpace:true
            },
            {
                id:'apple',
                src:'/assets/animations/uzay/apple.jpg',
                name:'Elma',
                isSpace:false
            },
            {
                id:'bus',
                src:'/assets/animations/uzay/bus.jpg',
                name:'Otobüs',
                isSpace:true
            },
            {
                id:'pencilbox',
                src:'/assets/animations/uzay/case.jpg',
                name:'Kalem kutusu',
                isSpace:true
            },
            {
                id:'staple',
                src:'/assets/animations/uzay/staple.jpg',
                name:'Raptiye',
                isSpace:false
            },
            {
                id:'refrigerator',
                src:'/assets/animations/uzay/refrigerator.jpg',
                name:'Buzdolabı',
                isSpace:true
            },
        ],
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
            Interaction.container = container;
            Main.setObjective('Yandaki verilenlerin uzay olup olmadığını belirtiniz.');
            Interaction.paper = {
                width:$(container).width(),
                height:$(container).height()
            }
            Interaction.appendStatus({
                bottom:'40px',
                width:'230px',
                left:'350px',
                textAlign:'center'
            });
            Interaction.appendButton({
                left:'415px',
                top:'50%',
                marginTop:'-20px'
            });
			Interaction.imageContainer = document.createElement("div");
            $(Interaction.container).append(Interaction.imageContainer);
            $(Interaction.imageContainer)
                .css({
                    position:'absolute',
                    top:'50%',
                    height:'200px',
                    width:'200px',
                    lineHeight:'200px',
                    left:'0px',
                    marginTop:'-144px'
                });
            Interaction.questionDiv = document.createElement("div");
            $(Interaction.container).append(Interaction.questionDiv);
            $(Interaction.questionDiv)
                .css({
                    position:'absolute',
                    textAlign:'center',
                    top:'90px',
                    height:'50px',
                    width:'230px',
                    lineHeight:'25px',
                    fontSize:'20px',
                    left:'350px',
                    marginTop:'-25px'
                });
            Interaction.yesButton = document.createElement("input");
            Interaction.yesButton.setAttribute('type','button');
            $(Interaction.container).append(Interaction.yesButton);
            $(Interaction.yesButton)
                .click(function(){
                    Interaction.answer = true;
                    Interaction.button.click();
                })
                .css({
                    background:'none',
                    backgroundImage:'url(/assets/btn_gray_yes_text.png)',
                    
                    position:'absolute',
                    top:'50%',
                    border:'none',
                    height:'30px',
                    width:'70px',
                    left:'390px',
                    marginTop:'-15px'
                });

            Interaction.noButton = document.createElement("input");
            Interaction.noButton.setAttribute('type','button');
            $(Interaction.container).append(Interaction.noButton);
            $(Interaction.noButton)
                .click(function(){
                    Interaction.answer = false;
                    Interaction.button.click();
                })
                .css({
                    background:'none',
                    backgroundImage:'url(/assets/btn_gray_no_text.png)',
                    position:'absolute',
                    top:'50%',
                    border:'none',
                    height:'30px',
                    width:'70px',
                    left:'470px',
                    marginTop:'-15px'
                });
            
            Interaction.setRandomGenerator(11);
            Interaction.prepareNextQuestion();
		},
	nextQuestion: function(shape){
            Interaction.toggleButtons();
            Interaction.trial = 1;
            $("head").append($("img",Interaction.imageDiv));
            /*<[[TEST*/
//                shape = 0;
            /*TEST]]>*/

            Interaction.shape = shape;
            var image = Interaction.images[shape];
            $(Interaction.imageContainer).append($("#"+image.id).get(0));
            $('img',Interaction.imageContianer)
                .css({
                    maxWidth:'350px',
                    width:'auto',
                    maxHeight:'288px',
                    height:'auto'
                });
            $(Interaction.questionDiv).html('<strong>'+image.name + "</strong> <br/> bir uzay mıdır?");
		},

	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

		},
	isAnswerCorrect : function(){
            
            var image = Interaction.images[Interaction.shape];
            if(Interaction.answer == image.isSpace)
                return true;
            return false;
            
		},
	onCorrectAnswer : function(){
            Interaction.toggleButtons();
		},
	onWrongAnswer : function(){

		},
	onFail : function(){
            Interaction.pause();
            Interaction.toggleButtons();
            Interaction.setStatus('Doğru cevap: <span id="correct_answer"></span>',false);
            var image = Interaction.images[Interaction.shape];
            $('#correct_answer',Interaction.status)
                .css({fontSize:'larger'})
                .html(image.isSpace?'uzaydır':'uzay değildir')
                .delay(500)
                .animate({opacity:0},100)
                .animate({opacity:1},100)
                .delay(500)
                .animate({opacity:0},100)
                .animate({opacity:1},100)
                .delay(500)
                .animate({opacity:0},100)
                .animate({opacity:1},100,Interaction.resume)
		},
    toggleButtons:function(){
        if($(Interaction.button).css('display')=='none'){
            $(Interaction.noButton).css({display:'none'});
            $(Interaction.yesButton).css({display:'none'});
            $(Interaction.button).css({display:'block'});
        }
        else{
            $(Interaction.noButton).css({display:'block'});
            $(Interaction.yesButton).css({display:'block'});
            $(Interaction.button).css({display:'none'});
        }
        
    }
}