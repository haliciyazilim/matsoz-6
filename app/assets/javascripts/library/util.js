
var Util = {

    isInteger: function (value) {
        var intRegex = /^\d+$/;
        return intRegex.test(value);
        //	return value == Math.floor(value)
    },

    isNumber: function (n) {
        return !isNaN(parseFloat(n,10)) && isFinite(n);
    },

    isPrimeNumber: function(checkedId){
        var a = [];
        a = Util.getFactors(checkedId);

        if(a.length == 2)
            return true;
        else
            return false;
    },

    getFactors: function(number){
        var factorsArr = [];
        var currentUpperLimit = number;

        for(var i = 0; i < currentUpperLimit; i++){
            if(number % i == 0){
                currentUpperLimit = number/i;
                factorsArr.push(i);
                if(currentUpperLimit != i)
                    factorsArr.push(currentUpperLimit);
            }
        }

        factorsArr.sort(function(a,b){return a-b});
        return factorsArr;
    },

    getPrimeFactors: function(number){
        var factorsArray = [];
        var returnedArray = [];

        factorsArray = Util.getFactors(number);

        for(var i = 0; i < factorsArray.length; i++){
            if(Util.isPrimeNumber(factorsArray[i]))
                returnedArray.push(factorsArray[i]);
        }

        return returnedArray;
    },

    findDistance:function (x1,y1,x2,y2){
        var _i = x1-x2;
        var _j = y1-y2;
        return Math.sqrt(_i*_i + _j*_j);
    },

    findAngle:function (x1, y1, x2, y2) {
        if (y1 == y2) {
            if (x1 > x2) {
                return Math.PI;
            } else {
                return 0;
            }
        }
        if (x1 == x2) {
            if (y1 > y2) {
                return Math.PI/2;
            } else {
                return 3*Math.PI/2;
            }
        }
        angle = -Math.atan((y2 - y1) / (x2 - x1));
        if (x2 < x1) {
            angle += Math.PI;
        } else if (y2 > y1) {
            angle += 2 * Math.PI;
        }
        return angle;

    },
    radianToDegree: function(a){
        return Math.round(a * (180/Math.PI));
    },

    //keep these two functions
    degreeToRadian : function (angle){
        return angle * (Math.PI / 180);
    },
    degreeToRadians: function (angle){
        return angle * (Math.PI / 180);
    },


    formatNumber: function(number,decimal){
        return Math.floor(number * decimal * 10) / (decimal * 10);
    },
    numberTurkishFloating: function(number,decimal){
        if(decimal==null || decimal==undefined)
            decimal = 1;

        if (decimal < 1) {
            return ""+Math.floor(number+0.5);
        }

        var float = number - Math.floor(number);
        var result = ""+Math.floor(number)+",";
        for(var i=0;i<decimal;i++) {
            result += Math.floor(float*Math.pow(10,i+1) + (i==decimal-1?0.5000000001:0)) % 10;
        }

        return result;
    },
    rand01: function(){
        return Math.floor(Math.random()*2);
    },

    randomInteger: function(start, end, excluding) {
        var excludingArray = [];
        if (excluding != undefined && excluding != null) {

            for (var i = 0; i < excluding.length; i++) {
                var num = excluding[i];
                if (Util.isInteger(num) && num < end && num >= start) {
                    if (excludingArray.indexOf(num) === -1) {
                        excludingArray.push(num);
                    }
                }
            }

            excludingArray.sort(function(a,b){return a-b});

            end -= excludingArray.length;
        }

        var randNum = Math.floor(Math.random()*(end-start)+start)

        for (var i = 0; i < excludingArray.length; i++) {
            if (excludingArray[i] <= randNum) {
                randNum++;
            }
        }

        return randNum;
    },
    randomDigit : function(){
        return Util.randomInteger(0,10);
    },

    gcd: function(a,b){
        return b ? Util.gcd(b, a%b) : a;
    },
    lcm: function(num1, num2, num3, num4){
        if(num3 == null || num3 == undefined)
            return (num1*num2)/Util.gcd(num1,num2);
        else if(num4 == null || num4 == undefined)
            return Util.lcm(num1, Util.lcm(num2,num3));
        else
            return Util.lcm(Util.lcm(num1,num2), Util.lcm(num3,num4));
    },

    reduceFractions: function(nom,denom){
        var gcd = Util.gcd(nom,denom);
        return [nom/gcd, denom/gcd];
    },

    loadImages: function(imageArray, callback) {
        var totalNoOfImages = imageArray.length;
        for (var key in imageArray) {
            image = imageArray[key];
            var img = $("<img id='"+image.id+"' />").attr('src', image.src).load(function() {
                if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0 || this.naturalWidth == null) {
                    throw "Broken Image: " + image;
                    totalNoOfImages--;
                } else {
                    totalNoOfImages--;
                    if (totalNoOfImages == 0) {
                        callback();
                    }
                }
            });
            $("head").append(img);
        }
    },
    getShuffledArray : function(to,from){
        if(from == null || from == undefined )
            from = 0;
        var a = [];
        for(var i=from,index=0; i<to ;i++,index++){
            a[index] = i;
        }
        var len = Math.floor(to - from);

        for(var i = len-1; i>=0 ; i--) {
            var p = parseInt(Math.random()*len,10);
            var t = a[i];
            a[i] = a[p];
            a[p] = t;
        }
        return a;
    },
    centerOfPoints:function(points){
        var total_x = 0;
        var total_y = 0;
        for(var i=0;i<points.length;i++){
            total_x += points[i].x;
            total_y += points[i].y;
        }
        var x = total_x / points.length;
        var y = total_y / points.length;
        return new Point(x,y);
    },

    rotateX: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var y = point[1] * cos - point[2] * sin;
            var z = point[1] * sin + point[2] * cos;

            return new Point3(point[0], y, z);
        } else {
            var p = [point[1] - center[1], point[2] - center[2]];
            var y = p[0] * cos - p[1] * sin;
            var z = p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(point[0], y + center[1], z + center[2]);
            } else {
                return [point[0], y + center[1], z + center[2]];
            }
        }
    },

    rotateY: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var x =   point[0] * cos + point[2] * sin;
            var z = - point[0] * sin + point[2] * cos;

            return new Point3(x, point[1], z);
        } else {
            var p = [point[0] - center[0], point[2] - center[2]];
            var x =   p[0] * cos + p[1] * sin;
            var z = - p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(x + center[0], point[1], z + center[2]);
            } else {
                return [x + center[0], point[1], z + center[2]];
            }
        }
    },


    rotateZ: function(angle, point, center) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];

            var returnPoint3 = true;
        }

        if (center instanceof Point3) {
            center = [center.x, center.y, center.z];
        }

        if (angle == 0) {
            return [point[0], point[1], point[2]];
        }

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        if (center == undefined) {
            var x = point[0] * cos - point[1] * sin;
            var y = point[0] * sin + point[1] * cos;

            return new Point3(x, y, point[2]);
        } else {
            var p = [point[0] - center[0], point[1] - center[1]];
            var x = p[0] * cos - p[1] * sin;
            var y = p[0] * sin + p[1] * cos;

            if (returnPoint3) {
                return new Point3(x + center[0], y + center[1], point[2]);
            } else {
                return [x + center[0], y + center[1], point[2]];
            }
        }
    },


    createProjectionMatrixForObjectAt: function(x, y, fov) {

        if (fov == undefined) {
            fov = 1024;
        }

        var zFactor = 3;

        return [
            1,	0,	128*zFactor/fov + x/fov, 	x,
            0,  1,   -128*zFactor/fov + y/fov, 	y,
            0,	0,			1/fov, 	1,
            0,	0,				0, 	1
        ];
    },

    createProjectionMatrix: function (nearPlaneWidth, nearPlaneHeight, nearPlaneZ, viewportLeft, viewportTop, viewportWidth, viewportHeight) {
        if (viewportLeft === undefined) {
            viewportLeft = -0.5;
            viewportRight = 0.5;
            viewportWidth = 1;
            viewportHeight = 1;
        } else if (viewportWidth === undefined) {
            viewportWidth = viewportLeft;
            viewportHeight = viewportTop;
            viewportLeft = 0;
            viewportTop = 0;
        }

        return [
            viewportWidth/nearPlaneWidth,				   				 0, 	-1/nearPlaneZ*(viewportLeft + viewportWidth/2), 	0,
            0,  -viewportHeight/nearPlaneHeight,	 	-1/nearPlaneZ*(viewportTop + viewportHeight/2), 	0,
            0,  								 0, 									 -1/nearPlaneZ, 	0,
            0,  								 0, 						   						 0, 	1
        ];
    },

    project: function(point, matrix) {
        if (point instanceof Point3) {
            point = [point.x, point.y, point.z];
        }

        if (!point[3]) {
            point[3] = 1;
        }

        var x = matrix[0] * point[0] + matrix[1] * point[1] + matrix[2] * point[2] + matrix[3] * point[3];
        var y = matrix[4] * point[0] + matrix[5] * point[1] + matrix[6] * point[2] + matrix[7] * point[3];
        var z = matrix[8] * point[0] + matrix[9] * point[1] + matrix[10] * point[2] + matrix[11] * point[3];

        x = x/z;
        y = y/z;

        return new Point(x, y);
    },

    centerOfPoint3s:function(points){
        var total_x = 0;
        var total_y = 0;
        var total_z = 0;
        for(var i=0;i<points.length;i++){
            total_x += points[i].x;
            total_y += points[i].y;
            total_z += points[i].z;
        }
        var x = total_x / points.length;
        var y = total_y / points.length;
        var z = total_z / points.length;
        return new Point3(x,y,z);
    },

    dom:function(opt){
        var node = document.createElement(opt.tag);
        $(opt.parent).append(node);
        node.id = opt.id;
        node.className = opt.class;
        if(opt.css)
            $(node).css(css);
        if(opt.html)
            $(node).html(html);
        if(opt.value)
            $(node).val(val);
        return node;
    },

    groupNumber: function(number,groupCharacter) {
        if(groupCharacter == undefined)
            groupCharacter = ' ';
        var strNumber = (""+number);
        regex =  /(\d+)(\d{3})/;
        do
            strNumber = strNumber.replace(regex, '$1'+groupCharacter+'$2');
        while(regex.test(strNumber))
        return strNumber;
    },

    format : function(num, options) {
        if(!options)
            options = {};
        options.point=options.point ||',';
        options.group=options.group ||' ';
        options.places=options.places||0;
        options.suffix=options.suffix||'';
        options.prefix=options.prefix||'';

        regex = /(\d+)(\d{3})/;
        result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';

        for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
        return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
    }
};

String.prototype.reverse = function() {
    var s = "";
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}

