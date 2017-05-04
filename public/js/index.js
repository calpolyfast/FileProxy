$(document).ready(function() {
  getFiles();
});

var files;

// Construct an HTML tr from file data
function constructTr(file) {
  var row = $('<tr></tr>');
  row.append($('<td>' + file.Key + '</td>'));
  row.append($('<td>https://www.files.cppfast.org/' + file.Key + '</td>'));
  row.append($('<td><img src="/img/trashcan.png" alt="Trashcan delete button"></td>'));
  return row;
}

// Get the files of the bucket
function getFiles() {
  $.ajax({
    url: '/files'
  })
  .done(function( data ) {
    files = data;
    data.forEach(function(file) {
      $('#table-files').append(constructTr(file));
    });
  });
}