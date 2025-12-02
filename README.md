# AJAX APPLICATION

## Table of Contents 📋<br/>
[About](#about)<br/>
[Skills](#skills)<br/>
[Languages](#languages)<br/>
[Features](#features)<br/>
[Installation](#installation)<br/>
[Usage](#usage)<br/>
[API Integration](#api-integration)<br/>
[Project Structure](#project-structure)<br/>
[Contact](#contact)<br/>

## About 👨🏻‍💻 <a id="about"></a>
This is the website for AJAX applications learned and implemented from Multi Authoring 3 class. This repo have the full code for the AJAX applications with fetching information from API as long with a strategy for viewing a static image of 3d model for mobile to enhance user experience.

### Key Highlights:
- **3D Model Integration:** Interactive earbuds model using model-viewer
- **Dynamic Content:** Real-time data fetching from external APIs
- **Responsive Design:** Mobile-first approach with tablet and desktop optimizations
- **Loading States:** Custom animated SVG loader for enhanced UX
- **Error Handling:** User-friendly error messages for connection issues

## Skills 🥷 <a id="skills"></a>
Here's a quick overview of the skills highlighted in this project:

### Languages: 🛠️ <a id="languages"></a>
- **JavaScript (ES6+):** Fetch API, Event Handling
- **HTML5:** Semantic markup, Template elements, SVG animations
- **CSS3/SASS:** Flexbox, Grid, Media Queries, Animations, Modular architecture

### Frameworks and Libraries: 
- **GreenSock (GSAP):** Animation library for smooth hotspot interactions
- **SASS/SCSS:** CSS preprocessor for organized, maintainable stylesheets

### Tools: 
- **Git:** Version control and collaboration
- **SASS Compiler:** CSS preprocessing and compilation
- **Browser DevTools:** Debugging and responsive testing

### Technologies: 
- **RESTful APIs:** External data integration
- **AJAX/Fetch:** Asynchronous data loading
- **Responsive Design:** Mobile-first, adaptive layouts
- **Template Cloning:** Dynamic DOM element creation
- **3D Web Graphics:** WebGL-based 3D model rendering

## Features 📋 <a id="features"></a>
⚡️ **Fully Responsive** - Seamless experience from mobile to desktop<br/>
⚡️ **Valid HTML5 & CSS3** - Standards-compliant, semantic markup<br/>
⚡️ **GreenSock Animations** - Smooth, performant hotspot interactions<br/>
⚡️ **Dynamic API Integration** - Real-time content loading from external sources<br/>
⚡️ **Custom Loading Spinner** - Animated SVG loader by Sam Herbert<br/>
⚡️ **Error Handling** - User-friendly error messages for failed connections<br/>
⚡️ **3D Model Viewer** - Interactive earbuds model with camera controls<br/>
⚡️ **Mobile Strategy** - Static image on mobile, 3D model on tablet+<br/>
⚡️ **Template-Based Rendering** - Dynamic content generation using HTML templates<br/>
⚡️ **SASS Architecture** - Organized, modular stylesheet structure<br/>
⚡️ **Hotspot System** - Interactive information markers on 3D model<br/>
⚡️ **Materials List** - Dynamically generated from API data

## Installation 📦 <a id="installation"></a>
To run the website locally:

### Prerequisites:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- SASS compiler (optional, for development)

### Steps:
1. **Clone this repository:**
   ```bash
   git clone [https://github.com/Alex4747-J/Nguyen_Anh-AJAX_App]
   ```

2. **Navigate into the project directory:**
   ```bash
   cd earbuds-promotional-site
   ```

3. **Open the project:**
    Open the `index.html` file directly in your browser

4. **For SASS development (optional):**
   ```bash
   # Install SASS globally
   npm install -g sass
   
   # Watch for changes and compile automatically
   sass --watch sass/main.scss:css/main.css
   ```

## Usage 🚀 <a id="usage"></a>

### Desktop Experience (≥768px):
- View the interactive 3D earbuds model
- Hover over hotspots to see detailed information
- Use mouse to rotate and zoom the model
- Scroll down to see materials list dynamically loaded from API

### Mobile Experience (<768px):
- View a static, high-quality image of the earbuds
- Scroll down to see materials information
- Optimized for touch interactions

### Loading States:
- **Loading:** Animated SVG spinner appears while fetching data
- **Success:** Content loads and spinner disappears
- **Error:** User-friendly error message displays if connection fails

## API Integration 🔌 <a id="api-integration"></a>

This project fetches data from two external APIs:

### 1. Infoboxes API
**Endpoint:** `https://swiftpixel.com/earbud/api/infoboxes`<br/>
**Purpose:** Loads hotspot information (titles and descriptions)<br/>
**Usage:** Populates the interactive hotspots on the 3D model

### 2. Materials API
**Endpoint:** `https://swiftpixel.com/earbud/api/materials`<br/>
**Purpose:** Loads materials information<br/>
**Usage:** Dynamically generates the materials list using HTML templates


### Error Handling:
If API calls fail, a user-friendly error message displays:
> "Oops something went wrong. It may be your internet connection or it might be us. Please try again later"


## Technologies Deep Dive 🔍

### JavaScript Features:
- **Fetch API:** Asynchronous data retrieval
- **Template Elements:** Dynamic content generation
- **Event Listeners:** Interactive hotspot system
- **Error Handling:** Try-catch for robust error management
- **DOM Manipulation:** Creating and appending elements dynamically

### CSS/SASS Features:
- **Flexbox & Grid:** Modern layout techniques
- **Media Queries:** Responsive breakpoints
- **Animations:** SVG and CSS animations
- **Modular Architecture:** SASS partials for organization
- **Variables:** Reusable design tokens

### Responsive Strategy:
```scss
// Mobile First (Default: <768px)
.mobile-static-image { display: block; }
.desktop-model { display: none; }

// Tablet and Desktop (≥768px)
@media screen and (min-width: 768px) {
  .mobile-static-image { display: none; }
  .desktop-model { display: block; }
}
```

## Credits 🙏

- **Loading Spinner:** By Sam Herbert (@sherb) - http://goo.gl/7AJzbL
- **Model Viewer:** Google's model-viewer library
- **GSAP:** GreenSock Animation Platform
- **APIs:** SwiftPixel API endpoints

## License 📄

This project is created for educational purposes as part of the IDP level 3 curriculum.

## Contact 📧 <a id="contact"></a>

**[Your Name]**
- **Email:** npanh1903@gmail.com
- **Portfolio:**
- **GitHub:** github.com/Alex4747-J
- **LinkedIn:** https://www.linkedin.com/in/anh-nguyen-53280b266/

---

Made with ❤️ for Multi Authoring 3 and Motion Design 2 class

---

**Last Updated:** December 2025<br/>
**Version:** 1.0.0<br/>
**Course:** Multi Authoring 3 & Motion Design 2<br/>
**Level:** IDP Level 3