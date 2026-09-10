const PYTHON_CHALLENGES = {
  Easy: [
    {
      id: "easy-rectangle-area",
      difficulty: "Easy",
      title: "Rectangle area",
      problem: "Calculate the area of a rectangle.\n\nLength = 10\nBreadth = 5\n\nPrint the area exactly as: Area = 50",
      starterCode: "length = 10\nbreadth = 5\n\n# Write your code below\n",
      expectedInputs: [],
      expectedOutput: "Area = 50",
      hints: ["Area of a rectangle is length multiplied by breadth.", "Use print() with the words Area = followed by your calculation."],
      explanation: "A rectangle's area is found by multiplying its length by its breadth."
    },
    {
      id: "easy-shopping-total",
      difficulty: "Easy",
      title: "Shopping total",
      problem: "A notebook costs 35 rupees and a pen costs 12 rupees.\n\nCalculate and print the total exactly as: Total = 47",
      starterCode: "notebook = 35\npen = 12\n\n# Write your code below\n",
      expectedInputs: [],
      expectedOutput: "Total = 47",
      hints: ["Add the two prices together.", "Your print statement should include the label Total =."],
      explanation: "Adding the prices gives the amount paid for both items."
    },
    {
      id: "easy-square-perimeter",
      difficulty: "Easy",
      title: "Square perimeter",
      problem: "A square has a side of 9 cm.\n\nCalculate and print its perimeter exactly as: Perimeter = 36",
      starterCode: "side = 9\n\n# Write your code below\n",
      expectedInputs: [],
      expectedOutput: "Perimeter = 36",
      hints: ["A square has four equal sides.", "Multiply side by 4."],
      explanation: "The perimeter of a square is 4 multiplied by the side length."
    },
    {
      id: "easy-average",
      difficulty: "Easy",
      title: "Two-number total",
      problem: "Two friends have 24 and 18 marbles.\n\nPrint their total exactly as: Total marbles = 42",
      starterCode: "first = 24\nsecond = 18\n\n# Write your code below\n",
      expectedInputs: [],
      expectedOutput: "Total marbles = 42",
      hints: ["The word total tells you to add.", "Print the label and the sum."],
      explanation: "The total is the sum of both friends' marbles."
    },
    {
      id: "easy-triangle-area",
      difficulty: "Easy",
      title: "Triangle area",
      problem: "A triangle has a base of 12 cm and height of 5 cm.\n\nPrint its area exactly as: Area = 30",
      starterCode: "base = 12\nheight = 5\n\n# Write your code below\n",
      expectedInputs: [],
      expectedOutput: "Area = 30",
      hints: ["Triangle area is (base × height) ÷ 2.", "Use parentheses before dividing by 2."],
      explanation: "The formula for a triangle's area is half of base multiplied by height."
    }
  ],
  Medium: [
    {
      id: "medium-rectangle-input",
      difficulty: "Medium",
      title: "Rectangle report",
      problem: "Ask the user for the length and breadth of a rectangle.\n\nPrint:\nArea = ...\nPerimeter = ...",
      starterCode: "# Ask for the two measurements\n",
      expectedInputs: ["8", "5"],
      expectedOutput: "Enter length: 8\nEnter breadth: 5\nArea = 40\nPerimeter = 26",
      hints: ["Use int(input(\"Enter length: \")) and int(input(\"Enter breadth: \")).", "Area = length * breadth; perimeter = 2 * (length + breadth)."],
      explanation: "input() gives text, so int() changes each measurement into a number before calculating."
    },
    {
      id: "medium-square-input",
      difficulty: "Medium",
      title: "Square report",
      problem: "Ask the user for the side of a square.\n\nPrint its area and perimeter on separate lines.",
      starterCode: "# Ask for the side\n",
      expectedInputs: ["7"],
      expectedOutput: "Enter side: 7\nArea = 49\nPerimeter = 28",
      hints: ["Read one integer using input().", "Area is side * side and perimeter is 4 * side."],
      explanation: "A square uses the same side measurement in both formulas."
    },
    {
      id: "medium-unit-conversion",
      difficulty: "Medium",
      title: "Centimetres to metres",
      problem: "Ask for a length in centimetres and convert it to metres.\n\nPrint the centimetres and metres on separate lines.",
      starterCode: "# Read the length in centimetres\n",
      expectedInputs: ["350"],
      expectedOutput: "Enter centimetres: 350\nMetres = 3.5",
      hints: ["One metre is 100 centimetres.", "Divide the input by 100."],
      explanation: "Dividing centimetres by 100 converts the measurement to metres."
    },
    {
      id: "medium-three-numbers",
      difficulty: "Medium",
      title: "Three-number total",
      problem: "Ask for three numbers and print their sum and average.\n\nUse these labels: Sum = and Average =",
      starterCode: "# Read three numbers\n",
      expectedInputs: ["12", "18", "15"],
      expectedOutput: "Enter first number: 12\nEnter second number: 18\nEnter third number: 15\nSum = 45\nAverage = 15.0",
      hints: ["Read three integers.", "Average is sum / 3. Keep the decimal result."],
      explanation: "The average is the total divided equally among the three numbers."
    },
    {
      id: "medium-time-minutes",
      difficulty: "Medium",
      title: "Time in minutes",
      problem: "Ask for hours and minutes. Convert the whole time into minutes.\n\nPrint the result using the label Total minutes =",
      starterCode: "# Read hours and minutes\n",
      expectedInputs: ["2", "35"],
      expectedOutput: "Enter hours: 2\nEnter minutes: 35\nTotal minutes = 155",
      hints: ["One hour has 60 minutes.", "Multiply hours by 60, then add the minutes."],
      explanation: "Converting the hours first and adding the remaining minutes gives one total."
    }
  ],
  Hard: [
    {
      id: "hard-garden",
      difficulty: "Hard",
      title: "Garden check",
      problem: "A rectangular garden has length 12 m and breadth 8 m.\n\nPrint its area, perimeter, then print Large Garden if the area is greater than 50; otherwise print Small Garden.",
      starterCode: "# Decide the measurements and calculations\n",
      expectedInputs: [],
      expectedOutput: "Area = 96\nPerimeter = 40\nLarge Garden",
      hints: ["Calculate area and perimeter first.", "Use if area > 50: for the decision."],
      explanation: "The condition compares the calculated area with 50 before choosing a message."
    },
    {
      id: "hard-number-check",
      difficulty: "Hard",
      title: "Number check",
      problem: "Ask for a number. Print its double. Then print Even if it is divisible by 2, otherwise print Odd.",
      starterCode: "# Read a number and solve the challenge\n",
      expectedInputs: ["14"],
      expectedOutput: "Enter a number: 14\nDouble = 28\nEven",
      hints: ["A number is even when number % 2 == 0.", "Print Double before the if/else result."],
      explanation: "The remainder operator checks whether division by 2 leaves a remainder."
    },
    {
      id: "hard-box",
      difficulty: "Hard",
      title: "Box measurements",
      problem: "A box is 10 cm long, 4 cm wide, and 3 cm high.\n\nPrint its volume and its total edge length. If volume is greater than 100, print Big Box; otherwise print Small Box.",
      starterCode: "# Work out the three measurements\n",
      expectedInputs: [],
      expectedOutput: "Volume = 120\nEdge length = 68\nBig Box",
      hints: ["Volume is length * width * height.", "A box has 4 edges of each dimension, so use 4 * (length + width + height)."],
      explanation: "The volume measures space inside the box; the total edge length adds all twelve edges."
    },
    {
      id: "hard-trip",
      difficulty: "Hard",
      title: "Trip budget",
      problem: "A class has 4 buses costing 125 rupees each and 30 tickets costing 15 rupees each.\n\nPrint the total cost. If it is greater than 900, print Over Budget; otherwise print Within Budget.",
      starterCode: "# Calculate the two costs and make a decision\n",
      expectedInputs: [],
      expectedOutput: "Total cost = 950\nOver Budget",
      hints: ["Calculate bus cost and ticket cost separately if helpful.", "Compare the total cost with 900."],
      explanation: "Adding both parts of the trip cost lets us compare the full amount with the budget."
    },
    {
      id: "hard-score",
      difficulty: "Hard",
      title: "Score decision",
      problem: "Ask for marks in Maths and Science. Print the total and average. If the average is at least 40, print Pass; otherwise print Needs Practice.",
      starterCode: "# Read both marks and calculate the result\n",
      expectedInputs: ["72", "68"],
      expectedOutput: "Enter Maths marks: 72\nEnter Science marks: 68\nTotal = 140\nAverage = 70.0\nPass",
      hints: ["Add the two marks, then divide by 2.", "Use >= 40 for the passing condition."],
      explanation: "The average of the two subject marks decides whether the student passes."
    }
  ]
};
