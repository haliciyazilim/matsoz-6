var deleteAll=function(){Interaction.path&&Interaction.path.remove(),Interaction.line2&&Interaction.line2.remove(),Interaction.circle1&&Interaction.circle1.remove(),Interaction.circle2&&Interaction.circle2.remove(),Interaction.text1&&Interaction.text1.remove(),Interaction.text2&&Interaction.text2.remove(),Interaction.text3&&Interaction.text3.remove(),Interaction.arrow&&Interaction.arrow.remove(),Interaction.clickk=0,Interaction.firstPoint=null,Interaction.secondPoint=null,$("#again").css("opacity",.4),$("#again").get(0).onclick=null};