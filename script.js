const dark = document.getElementById('dark');
const light = document.getElementById('light');
const mobile = window.matchMedia( "(max-width: 600px)" );
function lightMode(){
        document.documentElement.setAttribute('data-theme', 'light');
        light.style.display = 'none';
        dark.style.display = 'block';
        if(mobile.matches){
            document.getElementById('background').src = './images/bg-mobile-light.jpg' 
        }
        else{
            document.getElementById('background').src = './images/bg-desktop-light.jpg' 
        }
};
function darkMode(){
        document.documentElement.setAttribute('data-theme', 'root');
        dark.style.display = 'none';
        light.style.display = 'block';
        if(mobile.matches){
            document.getElementById('background').src = './images/bg-mobile-dark.jpg' 
        }
        else{
            document.getElementById('background').src = './images/bg-desktop-dark.jpg' 
        }
};

