import { createDropDownMenu } from "./dropdownmenu.js";

const menuBtn1 = document.querySelector('#menuBtn1');
const menuContainer1 = document.querySelector('#menuContainer1');

const menuBtn2 = document.querySelector('#menuBtn2');
const menuContainer2 = document.querySelector('#menuContainer2');

const menuBtn3 = document.querySelector('#menuBtn3');
const menuContainer3 = document.querySelector('#menuContainer3');

function initDropdownMenus() {
    createDropDownMenu(menuBtn1, menuContainer1);
    createDropDownMenu(menuBtn2, menuContainer2);
    createDropDownMenu(menuBtn3, menuContainer3);
}

initDropdownMenus();
