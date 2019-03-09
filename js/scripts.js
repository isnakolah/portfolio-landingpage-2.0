//Business Logic
function specialTheme() {
  $('#doc').addClass('theme-special');
  $('#portfolio, #story, #blog, #editor, #dark, #futuristic, #special, #themes-title').addClass('button-config-dropdown-editor');
  $('#welcome-text').addClass('welcome-theme-two');
}
//Front-end
$(document).ready(function () {
  $('#special').click(function () {
    specialTheme();
  });
  $('#editor').click(function () {

  });
});