window.onload = function () {

	document.getElementById('addButton').onclick = function (event) {

		var reportValue = document.getElementById('reportTextField').value;
		var reportDate = new Date();

		var table = document.getElementById('commentsTable');

		var tr = table.insertRow(1);
		
		var reportValueTd = tr.insertCell(0);
		reportValueTd.innerText = reportValue;

		var reportDateTd = tr.insertCell(1);
		reportDateTd.innerText = reportDate.toString();
		}

}