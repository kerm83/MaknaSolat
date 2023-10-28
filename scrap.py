import requests
import sys

# Set the encoding to UTF-8
#sys.stdout.reconfigure(encoding='utf-8')

from bs4 import BeautifulSoup

# Replace 'your_url' with the actual URL of the website you want to scrape
url = 'https://app.memrise.com/course/2222706/ingat-makna-bacaan-dalam-solat/1/'  # Replace with your URL
#url = 'http://www.myarabicwebsite.com/'
# Send an HTTP GET request to the URL
response = requests.get(url)
#response.encoding=response.apparent_encoding

print(response.encoding)
#print("خطة")
# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the web page
    soup = BeautifulSoup(response.content, 'lxml')  # Use 'html.parser' for parsing
    #print(soup)
    # Find the div element with the class "col_a col text"
    target_div = soup.find_all('div', class_='col_a col text')
    #print(target_div)
    # Find all child elements within the target div
    #child_elements = target_div.find_all()
    
    # Print all found elements
    for element in target_div:
       # reversed_text = (''.join(element.stripped_strings))
        print(element.text)

else:
    print(f"Failed to retrieve the web page. Status code: {response.status_code}")
