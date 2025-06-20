# Interactive Landscape Day/Night Toggle

> A stunning, purely visual day/night theme switcher built with modern web technologies. This isn't just a UI element; it's an animated digital diorama.

<!--
    IMPORTANT: Replace the link above with a link to your own GIF!
    You can upload your GIF to a site like Imgur to get a link.
-->

## ✨ Features

- **Full Scene Transition:** The entire theme changes from a bright, sunny day to a serene, starry night.
- **Full Page Theming:** The background of the entire page seamlessly transitions along with the toggle.
- **Complex Animations:**
  - ☀️ The sun rises and sets.
  - 🌙 The moon appears in the night sky.
  - ✨ Stars twinkle and shooting stars streak across the scene.
  - 🐦 Birds fly across the sky during the day.
- **Stunning Glassmorphism:** The toggle handle has a beautiful, translucent glass effect created with `backdrop-filter`.
- **Dynamic SVG Scenery:** The hills inside the toggle and on the main page are built with SVG for crisp, scalable graphics that change color with the theme.
- **Persistent Choice:** The selected theme (day or night) is saved to the user's `localStorage`, so their choice is remembered on their next visit.
- **Zero Dependencies:** Built with pure HTML, CSS, and Vanilla JavaScript. No frameworks, no libraries.

## 🛠️ Tech Stack

- **HTML5:** Structured with semantic HTML.
- **CSS3:** Heavily utilizes modern CSS features for styling and animation.
  - **CSS Variables:** For easy theme management and customization.
  - **Flexbox:** For layout and centering.
  - **Keyframe Animations:** Powers all the dynamic elements like birds and stars.
  - **`backdrop-filter`:** The core technology for the glassmorphism effect.
- **Vanilla JavaScript (ES6):** For handling user interaction, managing state (`.is-night` class), and interacting with `localStorage`.

## 🚀 Getting Started

This is a static project with no build dependencies. To run it locally, simply follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/TOGGLE-DayNight/your-repo-name.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3.  **Open the `index.html` file in your browser.**
    - You can do this by double-clicking the file or by using a local server extension like "Live Server" in VS Code.

That's it! The application will be running.

## 🎨 Customization

This project was built with customization in mind. Almost all key properties can be changed by editing the CSS Variables in the `:root` section of `css/style.css`.

### Change Colors

All theme colors are defined at the top of the CSS file.

```css
:root {
  /* DAY MODE COLORS */
  --body-bg-day: linear-gradient(180deg, #a8d5e5 0%, #f7d4b4 100%);
  --day-sky: linear-gradient(180deg, #87ceeb 0%, #ffcba4 100%);
  /* ... and more */

  /* NIGHT MODE COLORS */
  --body-bg-night: linear-gradient(180deg, #09141a 0%, #1f2e3e 100%);
  --night-moon: #eaefd3;
  /* ... and more */
}
```

### Change Sizing

The size of the toggle and its handle can be adjusted easily.

```css
:root {
  --toggle-width: 780px;
  --toggle-height: 280px;
  --handle-diameter: 280px;
  --padding: 0px;
}
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
