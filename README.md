
# dropdown-menu Module

This module runs a script that adds a click event to a DOM element
and toggles the display style between 'block' and 'none' on another DOM element

# Example

    HTML
1. Create a container for all the elements to assure correct allignment.
    This should contain the button and another container for all the dropdown elements.
    Give the menuBtn and dropdown elements container a unique identifier.

 <div class="menuContainer">
    <div class="menuBtn" id="menuBtn"> Button </div>
    <div id="dropdownElements">
        <div class="menuBtn" id="item1">item 1</div>
        <div class="menuBtn" id="item2">item 2</div>
        <div class="menuBtn" id="item3">item 3</div>
        <div class="menuBtn" id="item4">item 4</div>
    </div>
    </div>

    CSS
2. Give the dropdownElements a display of 'none' to default to a hidden state, 
    and a position of absolute to make the other DOM elements stay in place when display is 'block'. 
    
#dropdownElements {
    display: none;
    position: absolute;
}

    Javascript
3. Import 'createDropDownMenu' to your script.
    Call 'createDropDownMenu (btn, menuContainer)'

createDropDownMenu (document.querySelector('#menuBtn'), document.querySelector('#dropdownElements'));

# For help with importing modules
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
