

//clickevent will be attached to btn DOM element 
//display will be toggled from 'none' and 'block' on menucontainer DOM element
function createDropDownMenu (btn, dropdownElements) {
    btn.addEventListener('click', (e) => {

        if(e.target !== e.currentTarget) {
            return;
        }
        console.log('clicked');
        dropdownToggle(dropdownElements);
    });
}
   //function to toggle display style between 'block' and 'none' on a DOM element
function dropdownToggle(toggleElement) {
    if(toggleElement.style.display !== 'block') {
        toggleElement.style.display = 'block';
    }
    else {
        toggleElement.style.display = 'none';
    }
}


export {createDropDownMenu};