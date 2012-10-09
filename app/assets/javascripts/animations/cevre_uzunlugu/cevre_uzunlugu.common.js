var Shape = Class.extend({
    init: function(){
        this.vertexes = [];
        this.edges = [];
    },
    drawShape: function(point){
        var path = new Path();

    },
    removeShape: function(){

    }

});

var Vertex = Class.extend({
    init:function(){
        this.id = Vertex.GetId();
    },
    isEqual:function(other){
        return this.id == other.id;
    }
});
Vertex.GetId = function(){
    if(Vertex._id == undefined)
        Vertex._id = 1;
    return Vertex._id++;
}

var Edge = Class.extend({
    init:function(length){

    },


})