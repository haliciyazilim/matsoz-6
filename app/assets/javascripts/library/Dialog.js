/**
 * Created with JetBrains WebStorm.
 * User: yeguzel
 * Date: 06.11.2012
 * Time: 10:27
 * To change this template use File | Settings | File Templates.
 */
var Dialog = Class.extend({
    init:function(opt){
        this.id = Dialog.GetId();

        var mask = document.createElement('div');
        mask.className = 'dialogmaske';
        document.body.appendChild(mask);

        var dialog_box = document.createElement('div');
        dialog_box.id = 'dialog_box';
        dialog_box.dialog = this;
        dialog_box.className = 'dialoggolge';
        dialog_box.setAttribute('DialogId',this.id);
        document.body.appendChild(dialog_box);

        $(dialog_box).append('<a href="#" id="kapat" onclick="Dialog.CloseDialogWithId('+this.id+')"></a>');

        var dialog_tab_bar = document.createElement('div');
        dialog_tab_bar.className = 'dialog_tab_bar';
        dialog_box.appendChild(dialog_tab_bar);

        var dialog_content = document.createElement('div');
        dialog_content.className = 'dialog_content';
        dialog_box.appendChild(dialog_content);



//        this.dialog_title  = dialog_title;
        this.dialog_box = dialog_box;
        this.dialog_tab_bar = dialog_tab_bar;
        this.dialog_content = dialog_content;
        this.mask = mask;

        this.tabs = [];
        this.hide();

    },
    addContent:function(titleHTML,contentHTML){

        var title = document.createElement('div');
        title.className = 'dialog_tab_title';
        title.innerHTML = titleHTML;
        title.setAttribute('onclick',"Dialog.openTabInDialog('"+titleHTML+"','"+this.id+"')");

        var content = document.createElement('div');
        content.className = 'dialog_tab_content';
        content.innerHTML = contentHTML;
        title.content = content;

        this.tabs.push(title);
        $(this.dialog_tab_bar).append(title);
        $(this.dialog_content).append(content);


        Dialog.openTabInDialog(this.tabs[0].innerHTML,this.id);


    },
    setTitle:function(title){
        this.dialog_title.innerHTML = title + ' <div style="float:right;"><a href="#" onclick="Dialog.CloseDialogWithId('+this.id+')"><img src="/assets/theme/blue/ui_img/cancel.png" alt="Kapat"></a></div>';
    },
    show:function(){
        this.dialog_box.style.display = 'block';
        this.mask.style.display = 'block';
    },
    hide:function(){
        this.dialog_box.style.display = 'none';
        this.mask.style.display = 'none';
    }
});

Dialog.GetId = function(){
    if(!Dialog.__currentId)
        Dialog.__currentId = 1;
    return Dialog.__currentId++;
};

Dialog.CloseDialogWithId = function(id){
    console.log(id)
    $('*[DialogId="'+id+'"]').get(0).dialog.hide();
}
Dialog.openTabInDialog = function(tabTitle,id){
    var dialog = $('*[DialogId="'+id+'"]').get(0).dialog;
    console.log(dialog.tabs);
    for(var i=0; i<dialog.tabs.length;i++){
        console.log("I'm here");
        if(dialog.tabs[i].innerHTML == tabTitle){
            $(dialog.tabs[i]).removeClass('dialog_passive_tab');
            $(dialog.tabs[i]).addClass('dialog_active_tab');
            $(dialog.tabs[i].content).show();
        }
        else{
            $(dialog.tabs[i]).removeClass('dialog_active_tab');
            $(dialog.tabs[i]).addClass('dialog_passive_tab');
            $(dialog.tabs[i].content).hide();
        }
    }

}
