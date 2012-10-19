/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function InputReverseWriteable(event) {
    if(this.selectorIndex == undefined)
        this.selectorIndex = 0;
    console.log(this.selectorIndex);
    var willSelectorBePlaced = false;
    console.log('keyCode: ',event.keyCode);
    switch(event.keyCode){
        case 8:
            willSelectorBePlaced = true;
            this.selectorIndex = 1;
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
            willSelectorBePlaced = true;
            if(this.selectorIndex > 0)
                this.selectorIndex--;
            break;

    }
    if(this.value.indexOf(',') > this.selectorIndex)
        willSelectorBePlaced = false;

//    console.log(this.selectorIndex)
    if(willSelectorBePlaced){
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

    
}

