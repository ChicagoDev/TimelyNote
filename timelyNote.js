var $USER = "bjg"


TextEdit = Application('TextEdit');

nowFileName = function () {

	var date,year,month,day,hours,minutes,result;

	date = new Date(Date.now());
	year = date.getUTCFullYear().toString();
	month = (1+date.getUTCMonth()).toString();
	day = date.getUTCDate().toString();
	hours = date.getUTCHours().toString();
	minutes = date.getUTCMinutes().toString();
	result = year + "." + month + "." + day + "_" + hours + ":" + minutes + ".rtf";
		
		return result;
}

//console.log("File name is: \t" + nowFileName());


path = Path('/Users/'+ $USER +'/Documents/Notes/' + nowFileName());


doc = TextEdit.Document({text:"Created by TimelyNote"});

TextEdit.documents.push(doc);


doc.save({in:path});
