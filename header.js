var header = '';

header += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>';
header += '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>';
header += '<title>Starter Template - Materialize</title>';
header += '<!-- CSS  -->';
header += '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
header += '<link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>';
header += '<link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>';


var head = document.getElementsByTagName("head")[0];
head.innerHTML = header;