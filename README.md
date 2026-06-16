# 🧠 Quiz App

A clean, interactive Quiz App built with vanilla JavaScript, HTML, and CSS.

## Features
- 5 general knowledge questions
- Instant right/wrong feedback with color highlights
- Progress bar
- Score & result screen with emoji feedback
- Play Again button
- No frameworks — pure JavaScript

## How to Run
Just open `index.html` in your browser. No install needed!

## Project Structure
```
quiz-app/
├── index.html   → App layout
├── style.css    → Styling
├── app.js       → Quiz logic & questions
└── README.md    → This file
```

## Add Your Own Questions
In `app.js`, edit the `questions` array:
```js
{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0   // index of correct option (0 = Option A)
}
```
