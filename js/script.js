function  newItem() {
    //creating new list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
   alert('you have to put something down!'); 
    } else {
    $('#list').append(li);
    }

    //crossing out an item from the list
    function crossOut() {
        li.toggleClass('strike')
    }
    
    li.on('dblclick', function() {
        li.toggleClass('strike');
    })

    //adding the delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem) ;
    function deleteListItem() {
        li.addClass('delete');
    }    

    //reordering the Items
    $('#list').sortable();
    
    

}


//crossing something out
/*function crossOut() {
    li.toggleClass('strike')
}*/
/*
li.on('dblclick', function () {
    li.toggleClass('strike');
});
*/


/*easy to show or hide elements w/ jQuery
let inputs = $('inputs');
inputs.show(); make element visible
inputs.hide(); 
inputs.fadeOut(); fade elements out then hide them
inputs.fadeIn(); fade elements in and show them
inputs.fadeToggle(); fade elements in or out depending on whether or not they're visible
inputs.slideDown(); slide elements out of view and hide them
inputs.slideUp(); slide elements into view and show them
inputs.slideToggle(); slide element in or out
/*(selecting a list element tutorial jQuery
let list = $('#list');
let li = $('<li> list something </li>');
list.append(li);

//crossing out items tutorial
//li.addClass('strike');

delete class add
li.addClass('delete');


adding event listener to li
li.on("click", function() {
    li.addClass('strike');
    }
)

li.on("click", function() {
    li.removeClass('strike');  
})
*/