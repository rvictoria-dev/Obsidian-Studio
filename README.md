# Obsidian Studio

### ₊⊹ About

A minimalist creative portfolio designed to showcase a collection of atmospheric visual projects. Featuring cinematic lighting, moody imagery, classical art, and digital architecture, the project combines elegant typography with a clean layout to create an immersive visual experience. Built with a focus on aesthetics and simplicity.

https://github.com/user-attachments/assets/f7d57dda-2d27-4989-889d-0485b7bbfe39

---

### ★ Features

- Editorial layout with a 4-column gallery: the cards alternate between tall and shorter images, with the text always below

- Live clock in the header: displays the time, updated every second, with the time zone abbreviation next to it

- Animated hamburger menu: the two lines are different sizes, but become the same size when the cursor hovers over them

- Interactive logo: the diamond rotates and changes color when the cursor hovers over it

- Hero headline: large, compact typography using the Inter font, along with the introductory text and the “View All” button

- Images that adapt to the container: with `object-fit: cover`, they fill the space without distorting

---

### ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Google Fonts (Inter)**

---

### 🖿 Project structure

```
Creative-Studio-Portfolio/
├── assets/
│   ├── celestial-form.png
│   ├── digital-devotion.png
│   ├── gothic-twilight.png
│   └── shadow-gaze.png
├── index.html
├── script.js
└── style.css
```

---

### .ᐟ.ᐟ How It Works

- The cards alternate between tall and short images using `aspect-ratio`, and `object-fit: cover` prevents the images from being stretched

- `script.js` reads the current time using `Date`, formats it for the selected time zone, and updates the header every second using `setInterval`

- The logo rotates and changes color, and the menu lines change width
