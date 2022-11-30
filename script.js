const dropdownBtn = document.querySelector('#menuContainer');



for (let index = 0; index < dropdownBtn.childElementCount; index++) {

    dropdownBtn.children[index].addEventListener('click', () => {
        dropdownToggle(dropdownBtn.children[index]);
    });
}

document.querySelector('#menuBtn3').addEventListener('click', (e) => {
    //prevents child elements to trigger this event
    if(e.target !== e.currentTarget) {
        return;
    }

    dropdownToggle(document.querySelector('#menuBtn3'));
});

   //takes an argument DOM element and sets visibility to visible if hidden, else hidden
   //element should have visibility set to hidden as default
function dropdownToggle(toggleElement) {
    for (let i = 0; i < toggleElement.childElementCount; i++) {
            if(toggleElement.children[i].style.visibility !== 'visible') {
                toggleElement.children[i].style.visibility = 'visible';
                console.log('visible');
            }else {
                toggleElement.children[i].style.visibility = 'hidden';
                console.log('hidden');
            }
    }
}


//click menubutton(eventlistener) => menubutton.children = style.visibility = 'visible'