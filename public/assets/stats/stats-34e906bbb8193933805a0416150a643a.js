var chart1,chart2;$(document).ready(function(){var e=["#33aa33","#cccc33","#ff7733","#ff3333","#666677"];chart1=new Highcharts.Chart({chart:{renderTo:"pie_chart",type:"pie",plotBackgroundColor:"#eff4f9",plotBorderWidth:null,plotShadow:!1},colors:e,title:{text:"Current State"},subtitle:{text:lastStat.date_str},tooltip:{formatter:function(){return"<b>"+this.point.name+"</b>: "+this.y}},plotOptions:{pie:{dataLabels:{enabled:!0,color:"#000000",connectorColor:"#000000",formatter:function(){return"<b>"+this.point.name+"</b>: "+this.y}}}},series:[{type:"pie",name:"Browser share",data:[["Accepted",lastStat.accepted],["Delivered",lastStat.delivered],["Finished",lastStat.finished],["Active",lastStat.started+lastStat.rejected],["Not Yet Started",lastStat.unscheduled]]}]});var t=[],n=[],r=[],i=[],s=[],o=[];for(var u=0;u<stats.length;u++){console.log(a);var a=stats[u];t.push(a.date_str),n.push(a.accepted),r.push(a.delivered),i.push(a.finished),s.push(a.started+a.rejected),o.push(a.unscheduled)}chart2=new Highcharts.Chart({chart:{renderTo:"stacked_area",type:"area"},colors:e,title:{text:"Stats History"},xAxis:{categories:t},yAxis:{title:{text:"Number"}},tooltip:{formatter:function(){return""+this.series.name+": "+Highcharts.numberFormat(this.y,0,",")}},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666"}}},series:[{name:"Accepted",data:n},{name:"Delivered",data:r},{name:"Finished",data:i},{name:"Active",data:s},{name:"Not Yet Started",data:o}]})});