# Setup Guide

## Prerequisites

Before starting this workshop, ensure you have:

1. **Modern Web Browser**

   - Chrome (recommended)
   - Firefox
   - Edge
   - Safari (some features may vary)

2. **Code Editor**

   - VS Code (recommended)
   - Any text editor works

3. **Local Development Server**
   - VS Code Live Server extension (recommended)
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`

## Why a Local Server?

Modern browsers have security restrictions (CORS) that prevent loading JavaScript modules from the `file://` protocol. A local server is needed to properly run the exercises.

## Setting Up VS Code Live Server

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X on Mac, Ctrl+Shift+X on Windows)
3. Search for "Live Server" by Ritwick Dey
4. Click Install
5. Right-click any HTML file and select "Open with Live Server"

## Workshop Structure

Each exercise follows this pattern:

```
exercise-name/
├── README.md      # Instructions and learning objectives
├── exercise.html  # Starter code with TODOs
└── solution.html  # Complete working solution
```

## How to Use This Workshop

### For Self-Study:

1. Read the README.md in each exercise folder
2. Open `exercise.html` in your editor
3. Try to complete the TODOs without looking at the solution
4. Open the file with Live Server to test your code
5. If stuck, check `solution.html` for reference
6. Experiment and modify the code to deepen understanding

### For Instructors:

1. Walk through the README.md with students
2. Live code the solution, explaining each step
3. Use `solution.html` as a reference
4. Encourage students to experiment
5. Use the bonus challenges for advanced students

## Recommended Workflow

1. **Read** the exercise README
2. **Think** about the approach
3. **Code** your solution in `exercise.html`
4. **Test** with Live Server
5. **Debug** any issues
6. **Compare** with `solution.html`
7. **Experiment** with modifications

## Getting Help

- Check the [React Cheat Sheet](./react-cheatsheet.md)
- Review previous exercises
- Read the official [React Documentation](https://react.dev)
- Don't hesitate to ask questions!

## Tips for Success

- **Type the code yourself** - Don't copy/paste
- **Experiment** - Break things and fix them
- **Take breaks** - Let concepts sink in
- **Ask questions** - No question is too basic
- **Have fun** - Building things is enjoyable!

## Common Issues

### Issue: Changes not showing

**Solution**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Issue: Module not found error

**Solution**: Make sure you're using a local server, not opening files directly

### Issue: React is not defined

**Solution**: Check that React CDN scripts are included before your code

### Issue: Babel transform error

**Solution**: Ensure script type is `text/babel` when using JSX

## Next Steps

Start with Day 1, Exercise 1: DOM Hello World

Happy coding! 🚀
