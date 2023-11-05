document.addEventListener('DOMContentLoaded', function () {
    // Reference to the table element
    const table = document.getElementById('csvTable');
  
    // Fetch the CSV file
    fetch('1-Iftitah.csv')
      .then(response => response.text())
      .then(csvData => {
        // Split the CSV data into rows and cells
        const rows = csvData.trim().split('\n').map(row => row.split(','));
  
        // Loop through the rows and cells to populate the table
        rows.forEach(row => {
          const tableRow = table.insertRow();
          row.forEach(cellData => {
            const cell = tableRow.insertCell();
            cell.textContent = cellData;
          });
        });
      })
      .catch(error => console.error('Error fetching CSV data: ' + error));
  });
  