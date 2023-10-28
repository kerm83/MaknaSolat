import requests
from bs4 import BeautifulSoup
import csv

# Replace 'your_url' with the actual URL of the website you want to scrape
url = 'https://app.memrise.com/course/2222706/ingat-makna-bacaan-dalam-solat/'  # Replace with your URL

i=1
while(i<10):
# Send an HTTP GET request to the URL
    response = requests.get(url+str(i)+"/")

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the web page
        soup = BeautifulSoup(response.text, 'html.parser')  # Use 'html.parser' for parsing

        #Find the title 
        title = soup.find('h3',class_='progress-box-title')
        titleStr=title.text.strip().replace(" ","")
        print(titleStr)

        # Find the div elements with the class "col_a col text"
        target_div = soup.find_all('div', class_='col_a col text')

        # Find the div elements with the class "col_b col text"
        col_b_div = soup.find_all('div', class_='col_b col text')

        # Open a CSV file for writing
        with open(titleStr+'.csv', 'w', newline='', encoding='utf-8') as csvfile:
            csv_writer = csv.writer(csvfile)
            
            # Iterate through the elements in both target_div and col_b_div
            for element1, element2 in zip(target_div, col_b_div):
                # Write a row to the CSV file
                csv_writer.writerow([element1.text, element2.text])
        i=i+1
    else:
        print(f"Failed to retrieve the web page. Status code: {response.status_code}")
