//Business Logic
function specialTheme() {
  $('#doc').addClass('theme-2');
  $('#portfolio, #story, #blog').addClass('button-config-2');
  $('#welcome-text').addClass('welcome-2').removeClass('welcome');
}
//Front-end
$(document).ready(function () {
  $('#special').click(function () {
    specialTheme();
  });
});

