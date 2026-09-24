# femi-falade-intro26.3

Portfolio Project for Intro to Programming Course with Code the Dream

This is a simple multi‑page project demonstrating HTML, CSS, JavaScript, DOM manipulation, API integration, and responsive design.

Project Structure
- index.html: Portfolio home 
- open-api.html: API project using TheDogAPI  
- css/: Stylesheet files 
- js/: JavaScript files
- api-key.js: Local API key file (ignored by Git)

Features
- Clean, responsive layout using HTML and CSS  
- Dynamic JavaScript functionality across pages
- API integration with TheDogAPI (breed search + random breeds)  
- Footer with auto‑updating year  
- Organized file structure for easy navigation

How to Run `TheDogAPI` Project
1. Download or clone the project.  
2. Open `index.html` in any modern browser.
3. Navigate to the Open API page.
4. Create `api-key.js` in the project root:
   - const API_KEY = "your_api_key"
   - confirm api-key.js is listed in .gitignore

API Usage
   - `open-api.js` reads your key from `api-key.js` and sends it in the request header.

Once your key is set up, in the browser you opened, you will see:
- Breeds Search: type in the search box to look up a specific breed.
- Random Breeds: click `show breeds` and enjoy random dog images and breed information.
