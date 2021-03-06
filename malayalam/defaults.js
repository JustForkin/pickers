var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Malayalam WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "1.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ml' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Malayalam WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'malayalamPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Malayalam character picker'
	template.sample = "2. തന്റെ സ്വന്തം രാജ്യവും മറ്റേതൊരു രാജ്യവും വിടുന്നതിന്നും തന്റെ രാജ്യത്തേയ്ക്കു മടങ്ങിവരുന്നതിനുമുള്ള അധികാരം ഏതൊരാള്‍ക്കുമുള്ളതാണ്‌."
	template.blocklocation= '/scripts/malayalam/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'malayalam'
	template.scriptcode = 'Mlym'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"ISO transcription", "dataVar":"showISOTrans", "dataLocn":"isotranscript", "dataShortTitle":"I", "type":"palette"}
]

var controls = [
{"title":"Malayalam<br/>to ISO", "alt":"Convert Malayalam text to an ISO Latin transcription.", "code":"doTranscription('toISO')"},
{"title":"Malayalam<br/>to IPA", "alt":"Convert Malayalam text to an *approximation* to the IPA transcription.", "code":"doTranscription('toIPA')"},
{"title":"ISO to<br/>Malayalam", "alt":"Convert ISO latin text to Malayalam transcription.", "code":"doTranscription('toMalayalam')"},
]
