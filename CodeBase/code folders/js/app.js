// Data comes from data.js
var tableData = data;
// test data connection
tableData.forEach(function(report){ 
    console.log(`${report.city}: ${report.state}`);
});
// Get a reference to the table body
var tbody = d3.select("#ufo-tbody");

function buildTable(tableData) {
    // Use d3 to fill in table from data.js
    tableData.forEach(function(ufoReport) {
        var row = tbody.append("tr");
        // Append a cell to the row for each value desired
        row.append("td").attr('scope', 'row').text(ufoReport.datetime);
        row.append("td").text(ufoReport.city);
        row.append("td").text(ufoReport.state);
        row.append("td").text(ufoReport.country);
        row.append("td").text(ufoReport.shape);
        row.append("td").text(ufoReport.comments);
    });
}

// Selects the submit button
var submit = d3.select("#filter-btn");

// FUNCTION TO FILTER DATA
submit.on("click", function() {
        var row = d3.select("tbody").selectAll("td");
        row.remove();
        // Prevent the page from refreshing
        d3.event.preventDefault();
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");
        // Get the value property of the input element
        var inputValue = inputElement.property("value");
        let filteredData = tableData;
        // checking tbody for input value 
        var filtered = filteredData.filter(tbody => tbody.datetime === inputValue);
        buildTable(filtered);

});

buildTable(tableData);


