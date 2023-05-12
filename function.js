var $ = function (id) { return document.getElementById(id); }
var _ = function (tag) { return document.getElementsByTagName(tag); }

function minify_maxify(type, input, output) {
  
  _('p')[0].innerHTML = '';
  _('p')[0].style.padding = 0;
  
  if (type === 'Minify HTML') {
    output.value = input.value
      .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g,'')
      .replace(/\>\s*\</g,'><')
    ;
  }
  else if (type === 'Minify CSS') {
    output.value = input.value
    .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g,'')
    .replace(/\s*\{\s*/g,'{')
    .replace(/\s*\}\s*/g,'}')
    .replace(/\s*\:\s*/g,':')
    .replace(/\s*\;\s*/g,';')
    .replace(/\s*\,\s*/g,',')
    .replace(/\s*\~\s*/g,'~')
    .replace(/\s*\>\s*/g,'>')
    .replace(/\s*\+\s*/g,'+')
    .replace(/\s*\!\s*/g,'!')
    ;
  }
  else if (type === 'Minify JS') {
    output.value = input.value
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
    // Remove whitespace before and after certain characters
    .replace(/\s*([+={}\[\]\(\),;:])\s*/g, '$1')
    // Remove extra semicolons
    .replace(/;+/g, ';')
    // Remove whitespace between certain characters
    .replace(/(\))(\{|\))/g, '$1$2')
    .replace(/(\{|\[)([^\s])/g, '$1 $2')
    .replace(/([^\s])(\}|\])/g, '$1 $2')
    // Remove newlines
    .replace(/\n/g, '');
  }
  else { input.value = ''; output.value = ''; }

	var buttons = _('button');
	for(var i = 0; i < buttons.length; i++) {
	  buttons[i].addEventListener('click', function() {
		minify_maxify(
		  this.innerHTML, _('textarea')[0],
		  _('textarea')[1]
		);
	  }, false);
	}
}