var commandsColumnVisible1, commandsColumnVisible2, commandsColumnVisible3, commandsColumnVisible4 = true;

function toggleCommandsColumn1() {
  var commandsColumn = document.getElementById("commands-column1");
  var toggleButton = document.querySelector(".toggle1");

  if (commandsColumnVisible1 == true) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible1 = !commandsColumnVisible1;

  localStorage.setItem('selectedMenu1', !commandsColumnVisible1);
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedMenu1 = localStorage.getItem('selectedMenu1');
  if (selectedMenu1 == true) {
    toggleCommandsColumn1();
  }
});


function toggleCommandsColumn2() {
  var commandsColumn = document.getElementById("commands-column2");
  var toggleButton = document.querySelector(".toggle2");

  if (commandsColumnVisible2 == true) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible2 = !commandsColumnVisible2;
}


function toggleCommandsColumn3() {
  var commandsColumn = document.getElementById("commands-column3");
  var toggleButton = document.querySelector(".toggle3");

  if (commandsColumnVisible3 == true) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible3 = !commandsColumnVisible3;
}


function toggleCommandsColumn4() {
  var commandsColumn = document.getElementById("commands-column4");
  var toggleButton = document.querySelector(".toggle4");

  if (commandsColumnVisible4 == true) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible4 = !commandsColumnVisible4;
}


function switchTheme(theme) {
  var leftMenu = document.getElementById('left-menu');
  var bodycolor = document.getElementById('body-color');
  var footer = document.getElementById('footer');
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');

  leftMenu.classList.remove('theme1', 'theme2', 'theme3');
  bodycolor.classList.remove('theme1', 'theme2', 'theme3');
  footer.classList.remove('theme1', 'theme2', 'theme3');
  bar1.classList.remove('theme1', 'theme2', 'theme3');
  bar2.classList.remove('theme1', 'theme2', 'theme3');
  
  leftMenu.classList.add(theme);
  bodycolor.classList.add(theme);
  footer.classList.add(theme);
  bar1.classList.add(theme);
  bar2.classList.add(theme);

  // Stocker le thème choisi dans le stockage local
  localStorage.setItem('selectedTheme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    switchTheme(selectedTheme);
  }
});


// Obtenez l'URL de la page actuelle
var url = window.location.pathname;

// Sélectionnez tous les liens de sous-catégorie
var subCategoryLinks = document.querySelectorAll('nav ul ul li a');

// Parcourez les liens de sous-catégorie pour trouver celui correspondant à la page actuelle
for (var i = 0; i < subCategoryLinks.length; i++) {
  var link = subCategoryLinks[i];
  if (link.getAttribute('href') === url) {
    // Ajoutez une classe "active" à la sous-catégorie correspondante
    link.parentNode.classList.add('active');
    
    // Ouvrez la sous-catégorie en définissant son parent (li) en tant qu'élément actif
    link.parentNode.parentNode.parentNode.classList.add('active');
    break;
  }
}
