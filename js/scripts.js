new ClipboardJS(".btn");
document.getElementById("svg-copied").style.display = "none";

function copyToClipboard() {
  $("#svg-copy").hide();
  $("#svg-copied").show();

  setTimeout(function () {
    $("#svg-copy").show();
    $("#svg-copied").hide();
  }, 1000);
}
