# 🌊 Watercall Solutions - Interactive Web Application

> ⚠️ **Note:** Watercall Solutions is a **fictitious company** created for demonstration purposes only.

## 📖 Description

This project is a web application developed by **Watercall Solutions** offering dynamic features such as theme customization, flood risk prediction, an educational quiz, and a hamburger menu toggle.

## 🚀 Features

- 🎨 **Dynamic Theme Color:** Users can select a color to customize the look and feel of multiple elements on the site.
- 🌧️ **Flood Risk Prediction:** Enter rainfall amount (in mm) to get a risk assessment with colored alerts and messages.
- ❓ **Interactive Quiz:** A 10-question multiple-choice quiz that checks if all questions are answered and displays the score.
- 🍔 **Hamburger Menu Toggle:** A menu that can be shown or hidden by clicking a button.  
  ⚠️ **Note:** The hamburger menu is **not responsive**; it only has the show/hide toggle feature implemented, without adapting automatically to screen size.

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript  

## 🧑‍💻 How to Use

1. **Change Theme Color:**  
   Use the color selector (`id="escolheCor"`) to change the background color of various page elements.

2. **Check Flood Risk:**  
   Input rainfall value (in mm) and click the verify button to see the flood risk level and related message.

3. **Take the Quiz:**  
   Answer all 10 questions in the form (`id="quiz-formulario"`) and submit to see your results.

4. **Toggle Menu:**  
   Click the hamburger menu button (`id="btnMenu"`) to show or hide the navigation menu (`id="menu"`).  
   Remember, this menu toggle only controls visibility and does **not** adapt responsively.

## 🔍 Code Overview

- **Dynamic Theme:** Listens for `change` events on the color selector and updates background colors of `nav`, `footer`, `header`, `.card` elements, and more.
- **Flood Prediction:** Validates input and shows messages and colors for different rainfall ranges:  
  - Up to 20 mm: Normal rain (safe) 🌈  
  - 21 to 50 mm: Intense rain (caution) ⚠️  
  - 51 to 100 mm: Dangerous rain (potential flood risk) ⚡  
  - 101 to 200 mm: Probable flood (take immediate precautions) 🚨  
  - Over 200 mm: Emergency (high risk of disaster) 🚑
- **Quiz:** Ensures all questions are answered, calculates score based on correct answers, and displays the final result.
- **Hamburger Menu:** Toggles the `ativo` class on the menu to show or hide it when clicking the button.  
  ⚠️ **No responsive behavior is implemented** (e.g., automatic adaptation to screen size).

## 📋 Requirements

The HTML must include:

- A color selector with `id="escolheCor"`  
- A quiz form with `id="quiz-formulario"` containing 10 multiple-choice questions named `q1` to `q10`  
- Flood risk elements: input with class `.input-mm`, button with `id="btnVerificar"`, result display with `id="resultadoRisco"`, and containers `#captacao` and `#titulo`  
- Hamburger menu button with `id="btnMenu"` and menu container with `id="menu"`  
- Layout elements such as `nav`, `footer`, `header`, `.txts-icones`, `.colaboradores`, `.captacao`, and `.card`

## 📞 Contact

**Watercall Solutions**  
*This is a fictitious company created solely for project demonstration purposes.* 💡🌍

---

*This project aims to provide a dynamic, educational, and accessible experience for users interested in environmental risk monitoring and interactive content.*
