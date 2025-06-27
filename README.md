# Calculator Web Application

## Overview
This is a simple yet functional calculator web application built with HTML, CSS, and JavaScript. It features a clean, responsive design with a black background and performs basic arithmetic operations, percentage calculations, and includes clear and backspace functionality.

## Features
- **Basic Operations**: Addition (+), subtraction (-), multiplication (×), and division (/)
- **Percentage Calculations**: Supports percentage operations (e.g., 50% → 0.5)
- **Clear and Backspace**: 
  - `AC` clears the entire display.
  - `⌫` removes the last entered character.
- **Responsive Design**: Adapts to different screen sizes with a centered calculator interface.
- **Error Handling**: Displays "Error" for invalid expressions.

## Files
- **`calc.html`**: The main HTML file containing the calculator structure.
- **`styles.css`**: The CSS file for styling the calculator.
- **`script.js`**: The JavaScript file implementing the calculator logic.
- **`settings.json`**: Configuration file for the Live Server extension (sets the port to 5501).

## How to Use
1. Open `calc.html` in a web browser or use a Live Server extension (recommended for local development).
2. Click the buttons to input numbers and operators.
3. Press `=` to calculate the result.
4. Use `AC` to clear the display or `⌫` to correct mistakes.

## Styling
- The calculator has a dark theme with a black background.
- Buttons are color-coded:
  - Numbers: Light gray (`#d4d4d4`)
  - Operators: Light gray with white text (`#bcbcbc`)
  - Functions (AC, ⌫, %): Medium gray (`#a5a5a5`)
  - Clear button (`AC`): Green-yellow (`greenyellow`) for easy identification.

## Development
To modify or extend the calculator:
1. Edit `styles.css` to change the appearance.
2. Update `script.js` to add new functionality or improve calculations.
3. Use `settings.json` to configure the Live Server port if needed.

## Notes
- The calculator uses `eval()` for calculations, which is suitable for this small project but should be used cautiously in production environments.
- The design is inspired by minimalist calculator interfaces with a focus on usability.
