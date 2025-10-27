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

3. **Node.js and npm**

   - Node.js 16+ (check with `node --version`)
   - npm 7+ (check with `npm --version`)
   - Download from [nodejs.org](https://nodejs.org)

4. **Local Development Server** (Day 1 only)
   - VS Code Live Server extension (for Day 1 HTML exercises)
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`

## Workshop Structure

This workshop is divided into 3 days with different setups:

### Day 1: DOM & React Basics (HTML + CDN)

- Uses simple HTML files with React via CDN
- Requires a local server (Live Server recommended)
- No build tools needed

### Day 2 & 3: Modern React (Vite)

- Uses Vite for a real React development environment
- Requires Node.js and npm
- Supports modern tooling, hot module reload, and JSX

## Why Different Setups?

**Day 1** introduces React concepts without the complexity of build tools. Students can focus on learning React itself.

**Day 2 & 3** transition to a professional development environment to prepare students for real-world React development.

## Setting Up the Workshop

### Day 1 Setup: Live Server

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X on Mac, Ctrl+Shift+X on Windows)
3. Search for "Live Server" by Ritwick Dey
4. Click Install
5. Navigate to any Day 1 exercise HTML file
6. Right-click the file and select "Open with Live Server"

**Why?** Modern browsers have security restrictions (CORS) that prevent loading JavaScript modules from the `file://` protocol. A local server is needed for Day 1 exercises.

### Day 2 & 3 Setup: Node.js & Vite

1. **Install Node.js** (if not already installed)

   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation: `node --version` and `npm --version`

2. **Navigate to the day folder**

   ```bash
   cd day-2  # or day-3
   ```

3. **Install dependencies** (first time only)

   ```bash
   npm install
   ```

4. **Run an exercise**

   ```bash
   npm run dev:01    # Opens exercise 1 at http://localhost:3001
   npm run dev:02    # Opens exercise 2 at http://localhost:3002
   # etc.
   ```

5. **Run a solution** (to check your work)
   ```bash
   npm run solution:01  # Opens solution 1 at http://localhost:3011
   npm run solution:02  # Opens solution 2 at http://localhost:3012
   # etc.
   ```

**Each exercise runs on its own port**, so you can have multiple exercises open at the same time!

## Project Structure

### Day 1 Structure

Each exercise follows this pattern:

```
day-1/
├── 01-dom-hello-world/
│   ├── README.md      # Instructions and learning objectives
│   ├── exercise.html  # Starter code with TODOs
│   └── solution.html  # Complete working solution
├── 02-react-hello-world/
├── 03-jsx-basics/
└── 04-custom-components/
```

### Day 2 & 3 Structure

Each day has separate exercise and solution projects:

```
day-2/  (or day-3/)
├── exercises/
│   ├── 01-props/
│   │   ├── src/
│   │   │   ├── App.jsx       # Main component (edit this!)
│   │   │   ├── main.jsx      # Entry point
│   │   │   └── index.css     # Styles
│   │   ├── index.html
│   │   ├── vite.config.js    # Port configuration
│   │   └── README.md
│   ├── 02-lists/
│   ├── 03-events/
│   └── 04-state/
├── solutions/
│   ├── 01-props/
│   ├── 02-lists/
│   ├── 03-events/
│   └── 04-state/
├── package.json
├── README.md
└── QUICK_START.md
```

## How to Use This Workshop

### Day 1 Workflow:

1. Read the README.md in each exercise folder
2. Open `exercise.html` in your editor
3. Try to complete the TODOs without looking at the solution
4. Open the file with Live Server to test your code
5. If stuck, check `solution.html` for reference
6. Experiment and modify the code to deepen understanding

### Day 2 & 3 Workflow:

1. Navigate to the day folder: `cd day-2` or `cd day-3`
2. Run `npm install` (first time only)
3. Read the exercise README
4. Start the exercise dev server: `npm run dev:01`
5. Open your browser to the URL shown (e.g., http://localhost:3001)
6. Edit the `src/App.jsx` file in your code editor
7. Save your changes - the browser will automatically reload!
8. If stuck, run the solution: `npm run solution:01`
9. Compare your code with the solution
10. Experiment and modify to deepen understanding

### For Instructors:

1. Walk through the README.md with students
2. Live code the solution, explaining each step
3. Use `solution.html` (Day 1) or solution projects (Day 2-3) as reference
4. Encourage students to experiment
5. Use the bonus challenges for advanced students

## Recommended Workflow

### Day 1

1. **Read** the exercise README
2. **Think** about the approach
3. **Code** your solution in `exercise.html`
4. **Test** with Live Server
5. **Debug** any issues
6. **Compare** with `solution.html`
7. **Experiment** with modifications

### Day 2 & 3

1. **Read** the exercise README
2. **Run** the exercise: `npm run dev:01`
3. **Code** your solution in `src/App.jsx`
4. **Save** - browser auto-reloads!
5. **Debug** using browser DevTools
6. **Compare** with solution: `npm run solution:01`
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

### Day 1 Issues

**Issue: Changes not showing**

- **Solution**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

**Issue: Module not found error**

- **Solution**: Make sure you're using a local server, not opening files directly

**Issue: React is not defined**

- **Solution**: Check that React CDN scripts are included before your code

**Issue: Babel transform error**

- **Solution**: Ensure script type is `text/babel` when using JSX

### Day 2 & 3 Issues

**Issue: Port already in use**

```bash
# Kill the process using the port (Mac/Linux)
lsof -ti:3001 | xargs kill -9

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

**Issue: npm install fails**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Changes not showing**

- Make sure you saved the file (Cmd+S / Ctrl+S)
- Check the terminal for errors
- Vite should auto-reload - if not, refresh browser

**Issue: Can't find module 'react'**

- Run `npm install` in the day-2 or day-3 folder
- Make sure you're in the correct directory

**Issue: Multiple exercises running**

- Each exercise uses a different port
- Stop a server with Ctrl+C in the terminal
- Only one exercise/solution can run per port

## Next Steps

### Getting Started

1. Start with **Day 1, Exercise 1**: DOM Hello World
2. Work through Day 1 exercises sequentially
3. Once comfortable, move to **Day 2** (requires `npm install`)
4. Complete Day 2 exercises with modern React tooling
5. Finish with **Day 3** to build a complete application

### Quick Start Commands

**Day 1:**

```bash
# Open exercise.html with Live Server in VS Code
# Or use: python -m http.server 8000
```

**Day 2:**

```bash
cd day-2
npm install
npm run dev:01
```

**Day 3:**

```bash
cd day-3
npm install
npm run dev:01
```

Happy coding! 🚀
