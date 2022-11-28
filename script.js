const dropdownBtn = document.querySelectorAll('#menuContainer');



dropdownBtn.forEach((e, i) => {
    console.log(e.childNodes);
    console.log(e.firstElementChild)


    e.childNodes.forEach((e) => {
        console.log(e.childNodes);
        e.addEventListener('click', dropdownToggle(e));
    })
    
});

function dropdownToggle (toggleElement) {
    console.log(toggleElement)
    toggleElement.forEach((e) => {
        console.log(e);
        e.style.visibility = 'visible';

    })

    console.log('clicked');
}

