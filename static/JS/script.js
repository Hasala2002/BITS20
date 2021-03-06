var titles = [];
var titleInput = document.getElementById("autoresizing");
var messageBox = document.getElementById("display");
function Allow()
{
if (!user.autoresizing.value.match(/[a-zA-Z]$/) && user.autoresizing.value !="")
{
user.title.value="";
alert("Please Enter only alphabets");
}
window.location.reload()
}
function insert () {
titles.push(titleInput.value);
clearAndShow();
}
function clearAndShow ()
{
titleInput.value = "";
messageBox.innerHTML = "";
messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }

    if (currentTheme === 'light') {
        toggleSwitch.checked = false;
        
    }
}

var dark = "Enable Dark mode"
var light = "Disble dark mode"


function textChangeDark() {
    document.getElementById("dark-light").innerHTML = dark
}

function textChangeLight() {
    document.getElementById("dark-light").innerHTML = light
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        textChangeDark();
    }
    else { document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          textChangeLight();
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

