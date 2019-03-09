//Business Logic
function specialTheme() {
  $('#doc').addClass('theme-2');
  $('#portfolio, #story, #blog').addClass('button-config-2');
  $('#welcome-text').addClass('welcome-2').removeClass('welcome');
  $('#dropdown').addClass('.btn-config-2, .btn');
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