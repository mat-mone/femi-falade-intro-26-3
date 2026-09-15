# femi-falade-intro26.3

Portfolio Project for Intro to Programming Course with Code the Dream

Femi Falade

Project Structure
- **index.html**: Main portfolio page  
- **open-api.html**: API project using TheDogAPI  
- **styles/**: CSS files for each page  
- **scripts/**: JavaScript files for each page

Features
- Clean, responsive layout using HTML and CSS  
- Dynamic JavaScript functionality across pages  
- API integration with TheDogAPI (breed search + random breeds)  
- Footer with auto‑updating year  
- Organized file structure for easy navigation

How to Run `TheDogAPI` Project
1. Download or clone the project files.  
2. Open **index.html** in any modern web browser.  
3. Navigate to the **Open API** page using the site navigation.  
4. For the API page to work:
   - Open `open-api.html` in a browser.
   - Add your API key to the `API_KEY` variable inside `open-api.js`.

API Key Setup
Inside `open-api.js`, locate:

```javascript
const API_KEY = "your_api_key_here";

Replace the placeholder with your actual key from TheDogAPI.

In the browser you opened, you will find:
- Breeds Search: type in the search box to find specific breed.
- Random Breeds: click on `show breeds` and enjoy random dog images and text information.
