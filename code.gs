Here is a quick onEdit function to create a new sheet for every name added to column F of your sample spreadsheet:

// This work is hereby released into the public domain. To the extent
// possible under law, the author has waived all copyright and related
// or neighboring rights to the work. See the dedication at
//
//     http://creativecommons.org/publicdomain/zero/1.0/
//
// The author makes no warranties about the work, and disclaims liability
// for all uses of the work, to the fullest extent permitted by applicable
// law. When using or citing the work, you should not imply endorsement by
// the author.

/**
* Creates a new sheet for every unique name found in a column on a master sheet.
*/

function onEdit(e) {
  // version 1.0, written by --Hyde, 10 March 2015
  // see /docs/forum/AAAABuH1jm0UmDGg0vQttE/discussion
  
  var sheetToWatch = 'Master';
  var columnToWatch = 6; // column A = 1, B = 2, etc.
  
  var ss = e.source;
  var editedCell = e.range;
  var editedColumn = editedCell.getColumn();
  var editedSheet = editedCell.getSheet();
  var i, lastName;
  
  if (editedSheet.getName() != sheetToWatch || editedColumn != columnToWatch) return;
  
  for (i = 2; i <= editedSheet.getLastRow(); i++) {
    lastName = editedSheet.getRange(i, editedColumn).getValue();
    if (!ss.getSheetByName(lastName)) {
      ss.insertSheet(lastName);
    }
  }
}


The script does have you asked for, but I suspect it does not do what you want. When there are multiple people with the same last name, they do not each get their own sheet. Just one sheet is created per unique last name in column F. The newly created sheets are empty and do not inherit any of the column labels or data. You can test the function by adding names to column F on the sample spreadsheet.

To learn scripting, go to the Extending Google Sheets page, Codecademy and Mozilla Developer Network.

If you need more help, please show your expected results on the sample spreadsheet, and explain why they would be the correct results.

Cheers --Hyde
