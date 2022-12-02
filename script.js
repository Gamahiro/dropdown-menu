

/* document.querySelector('#menuBtn1').addEventListener('click', (e) => {
    //prevents child elements to trigger this event
    if(e.target !== e.currentTarget) {
        return;
    }

    dropdownToggle(document.querySelector('#menuContainer1'));
}); */

createDropDownMenu(document.querySelector('#menuBtn1'), document.querySelector('#menuContainer1'));
createDropDownMenu(document.querySelector('#menuBtn2'), document.querySelector('#menuContainer2'));
createDropDownMenu(document.querySelector('#menuBtn3'), document.querySelector('#menuContainer3'));

function createDropDownMenu (btn, menuContainer) {
    btn.addEventListener('click', (e) => {

        if(e.target !== e.currentTarget) {
            return;
        }

        dropdownToggle(menuContainer);
    });
}

   //takes an argument DOM element and sets visibility to visible if hidden, else hidden
   //element should have visibility set to hidden as default
function dropdownToggle(toggleElement) {
    console.log(toggleElement)

    if(toggleElement.style.display !== 'block') {
        toggleElement.style.display = 'block';
    }
    else {
        toggleElement.style.display = 'none';
    }

    /* for (let i = 0; i < toggleElement.childElementCount; i++) {
            if(toggleElement.children[i].style.display !== 'block') {
                toggleElement.children[i].style.display = 'block';
                console.log('block');
            }else {
                toggleElement.children[i].style.display = 'none';
                console.log('none');
            }
    } */
}


//click menubutton(eventlistener) => menubutton.children = style.visibility = 'visible'