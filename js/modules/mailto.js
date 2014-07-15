/*------------------------------------*\
    $MAILTO
\*------------------------------------*/

define('modules/mailto', function() {

  var links = document.getElementsByClassName('js-mailto'),
      inquiry = '<n uers=\"znvygb:bssvpr@znahryjvrfre.pbz?fhowrpg=Yrg%R2%80%99f%20jbex%20gbtrgure\">bssvpr@znahryjvrfre.pbz</n>'.replace(/[a-zA-Z]/g, rot13),
      mail = '<n uers=\"znvygb:bssvpr@znahryjvrfre.pbz\" pynff=\"h-rznvy rznvy\">bssvpr@znahryjvrfre.pbz</n>'.replace(/[a-zA-Z]/g, rot13);

  function rot13(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  }

  for (var i = 0; i < links.length; i++) {
    if (links[i].classList.contains('js-mailto--inquiry')) {
      links[i].innerHTML = inquiry;
    } else {
      links[i].innerHTML = mail;
    }
  }

});
