document.addEventListener('DOMContentLoaded', function () {
    // Reference to the table element
    const table = document.getElementById('csvTable');
    // const csvTitle ='../1-Iftitah.csv'
    // const csvTitle ='../2-al-Fatihah.csv'
    // const csvTitle ='../3-Rukuk.csv'
    // const csvTitle ='../4-Iktidal.csv'
    const csvTitle ='../5-Sujud.csv'
    // const csvTitle ='../6-DudukAntara2Sujud.csv'
    // const csvTitle ='../7-TahiyyatAwal.csv'
    // const csvTitle ='../8-TahiyyatAkhir.csv'
    // const csvTitle ='../9-Qunut.csv'
    
     var title = document.getElementById('pageTitle')
     title.textContent=csvTitle.slice(5,-4);
    // Fetch the CSV file
    fetch(csvTitle)
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
  