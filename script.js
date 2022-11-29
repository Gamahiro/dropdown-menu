const dropdownBtn = document.querySelector('#menuContainer');



for (let index = 0; index < dropdownBtn.childElementCount; index++) {
    console.log(dropdownBtn[index])

    dropdownBtn[index].addEventListener('click', () => {
        dropdownToggle(e);
    });
}


/*     console.log(dropdownBtn.children[0]);
   dropdownToggle(dropdownBtn.children[0]); */


   //takes 
function dropdownToggle(toggleElement) {

    for (let i = 0; i < toggleElement.childElementCount - 1; i++) {
        let toggleElementChild = document.querySelectorAll(`#${toggleElement.children[i].id} > div`);

        toggleElementChild.forEach((e, i) => {
            console.log(e)
            if(e.style.visibility !== 'visible') {
                e.style.visibility = 'visible';
                console.log('visible');
            }
            else {
                e.style.visibility = 'hidden';
                console.log('hidden');
            }
        });
    }
}


//click menubutton(eventlistener) => menubutton.children = style.visibility = 'visible'