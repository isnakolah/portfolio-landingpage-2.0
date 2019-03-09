//Business Logic
function specialTheme() {
  $('#doc').addClass('theme-special');
  $('#portfolio, #story, #blog, #editor, #dark, #futuristic, #special, #themes-title').addClass('button-config-dropdown');
  $('#welcome-text').addClass('welcome-theme-two');
}

function editorTheme() {

}
//Front-end
$(document).ready(function () {
  $('#special').click(function () {
    specialTheme();
  });
  $('#editor').click(function () {

  });
});