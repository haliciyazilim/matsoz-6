/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function InputReverseWriteable(event) {
    if(this.selectorIndex == undefined)
        this.selectorIndex = 0;
//    console.log(this.selectorIndex);
    this.willSelectorBePlaced = false;
//    console.log('keyCode: ',event.keyCode);
    switch(event.keyCode){
        case 8:
            this.willSelectorBePlaced = false;
            this.selectorIndex = 0;
            this.value = this.value.substring(1);
            if(this.createTextRange){// IE
                var textRange = this.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd("character",this.selectorIndex);
                textRange.moveStart("character",this.selectorIndex);
                textRange.select();
                return true;
            }else if(this.setSelectionRange){
                this.setSelectionRange(this.selectorIndex,this.selectorIndex);
                return true;
            }
            event.preventDefault();
            return false;
            break;
        case 37:
            if(this.selectorIndex > 0)
                this.selectorIndex--;
            break;
        case 39:
            if(this.selectorIndex < this.value.length)
                this.selectorIndex++
            break;
        default:
            this.willSelectorBePlaced = true;
            if(this.selectorIndex > 0)
                this.selectorIndex--;
            break;

    }
    $(this).keyup(function(){
        if(this.willSelectorBePlaced){
            if(this.createTextRange){// IE
                var textRange = this.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd("character",this.selectorIndex);
                textRange.moveStart("character",this.selectorIndex);
                textRange.select();
                return true;
            }else if(this.setSelectionRange){
                this.setSelectionRange(this.selectorIndex,this.selectorIndex);
                return true;
            }
        }
    });
}

