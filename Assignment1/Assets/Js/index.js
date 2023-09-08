
if(document.querySelector('#menu_cta')){
    
    // adding an event listener once the menu button is found in the dom to prevent console errors
    document.querySelector('#menu_cta').addEventListener('click',(e)=>{
        e.preventDefault()
        document.querySelector('.navbar-links').classList.toggle('show-nav-links');
        
    })

}