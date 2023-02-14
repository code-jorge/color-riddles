export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'brown',
]

export const PRACTICE_LEVELS = 30
export const QUICK_GAME_LEVELS = 8

// Pick a random group of non-repeating colors
const pickColors = (number)=> {
  const colors = [...COLORS]
  const picked = []
  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length)
    picked.push(colors[randomIndex])
    colors.splice(randomIndex, 1)
  }
  return picked
}

const randomizeOrder = (array)=> {
  const newArray = [...array]
  const randomized = []
  for (let i = 0; i < array.length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length)
    randomized.push(newArray[randomIndex])
    newArray.splice(randomIndex, 1)
  }
  return randomized
}

const getPracticeLevelData = (level) => {
  // Spot the visible color - introduction
  if (level === "1") {
    const colors = pickColors(5)
    return {
      level: 1,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[2], color: colors[3] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[1], isCorrect: true },
        { label: colors[4], isCorrect: false },
      ])
    }
  }
  if (level === "2") {
    const colors = pickColors(4)
    return {
      level: 2,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[2] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "3") {
    const colors = pickColors(7)
    return {
      level: 3,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[2], color: colors[3] },
        { label: colors[4], color: colors[5] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[1], isCorrect: true },
        { label: colors[6], isCorrect: false },
      ])
    }
  }
  // Spot the non visible color - introduction
  if (level === "4") {
    const colors = pickColors(5)
    return {
      level: 4,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[2], color: colors[3] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[4], isCorrect: true },
        { label: colors[1], isCorrect: false },
      ])
    }
  }
  if (level === "5") {
    const colors = pickColors(3)
    return {
      level: 5,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[1], color: colors[2] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
      ])
    }
  }
  if (level === "6") {
    const colors = pickColors(6)
    return {
      level: 6,
      words: randomizeOrder([
        { label: colors[2], color: colors[0] },
        { label: colors[4], color: colors[1] },
        { label: colors[5], color: colors[2] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[3], isCorrect: true },
        { label: colors[0], isCorrect: false },
      ])
    }
  }
  // Spot the visible color - intermediate
  if (level === "7") {
    const colors = pickColors(6)
    return {
      level: 7,
      words: randomizeOrder([
        { label: colors[2], color: colors[0] },
        { label: colors[3], color: colors[1] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[4], isCorrect: false },
        { label: colors[5], isCorrect: false },
      ])
    }
  }
  if (level === "8") {
    const colors = pickColors(6)
    return {
      level: 8,
      words: randomizeOrder([
        { label: colors[2], color: colors[0] },
        { label: colors[3], color: colors[1] },
        { label: colors[4], color: colors[2] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[3], isCorrect: false },
        { label: colors[5], isCorrect: false },
      ])
    }
  }
  if (level === "9") {
    const colors = pickColors(5)
    return {
      level: 9,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[0], color: colors[2] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[3], isCorrect: false },
        { label: colors[4], isCorrect: false },
      ])
    }
  }
  // Spot the non visible color - intermediate
  if (level === "10") {
    const colors = pickColors(5)
    return {
      level: 10,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[0], color: colors[3] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[4], isCorrect: true },
        { label: colors[0], isCorrect: false },
      ])
    }
  }
  if (level === "11") {
    const colors = pickColors(5)
    return {
      level: 11,
      words: randomizeOrder([
        { label: colors[4], color: colors[0] },
        { label: colors[4], color: colors[1] },
        { label: colors[4], color: colors[2] },
        { label: colors[4], color: colors[3] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[4], isCorrect: true },
        { label: colors[0], isCorrect: false },
      ])
    }
  }
  // Spot the matching word - introduction
  if (level === "12") {
    const colors = pickColors(8)
    return {
      level: 12,
      words: randomizeOrder([
        { label: colors[4], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[5], color: colors[2] },
        { label: colors[6], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[1], isCorrect: true },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
  if (level === "13") {
    const colors = pickColors(5)
    return {
      level: 13,
      words: randomizeOrder([
        { label: colors[2], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[1], isCorrect: true },
        { label: colors[4], isCorrect: false },
      ])
    }
  }
  if (level === "14") {
    const colors = pickColors(4)
    return {
      level: 14,
      words: randomizeOrder([
        { label: colors[2], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[0], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[1], isCorrect: true },
        { label: colors[2], isCorrect: false },
      ])
    }
  }
  // Spot the matching word - intermediate
  if (level === "15") {
    const colors = pickColors(6)
    return {
      level: 15,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[4], color: colors[1] },
        { label: colors[5], color: colors[2] },
        { label: colors[1], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[4], isCorrect: false },
        { label: colors[5], isCorrect: false },
      ])
    }
  }
  if (level === "16") {
    const colors = pickColors(4)
    return {
      level: 16,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[1], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  // Spot the visible color - advanced
  if (level === "17") {
    const colors = pickColors(7)
    return {
      level: 17,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[0], color: colors[4] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
      ])
    }
  }
  if (level === "18") {
    const colors = pickColors(7)
    return {
      level: 18,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[5], color: colors[3] },
        { label: colors[6], color: colors[4] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
      ])
    }
  }
  // Spot the non visible color - advanced
  if (level === "19") {
    const colors = pickColors(5)
    return {
      level: 19,
      words: randomizeOrder([
        { label: colors[4], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[2], color: colors[2] },
        { label: colors[3], color: colors[3] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[4], isCorrect: true },
        { label: colors[0], isCorrect: false },
        { label: colors[1], isCorrect: false },
      ])
    }
  }
  if (level === "20") {
    const colors = pickColors(6)
    return {
      level: 20,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[5], isCorrect: true },
        { label: colors[0], isCorrect: false },
        { label: colors[1], isCorrect: false },
      ])
    }
  }
  if (level === "21") {
    const colors = pickColors(8)
    return {
      level: 21,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[5] },
        { label: colors[7], color: colors[6] },
        { label: colors[0], color: colors[0] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[7], isCorrect: true },
        { label: colors[0], isCorrect: false },
      ])
    }
  }
  // Spot the matching word - advanced
  if (level === "22") {
    const colors = pickColors(7)
    return {
      level: 22,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[5] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "23") {
    const colors = pickColors(4)
    return {
      level: 23,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[0], color: colors[1] },
        { label: colors[0], color: colors[2] },
        { label: colors[1], color: colors[0] },
        { label: colors[1], color: colors[2] },
        { label: colors[1], color: colors[3] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
      ])
    }
  }
  // Spot the repeated color - advanced
  if (level === "24") {
    const colors = pickColors(6)
    return {
      level: 24,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[2], color: colors[2] },
        { label: colors[3], color: colors[3] },
        { label: colors[4], color: colors[4] },
        { label: colors[5], color: colors[0] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
      ])
    }
  }
  if (level === "25") {
    const colors = pickColors(5)
    return {
      level: 25,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[2], color: colors[4] },
        { label: colors[3], color: colors[0] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
      ])
    }
  }
  if (level === "26") {
    const colors = pickColors(5)
    return {
      level: 26,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[2], color: colors[4] },
        { label: colors[2], color: colors[0] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
      ])
    }
  }
  // Extreme round - visible color
  if (level === "27") {
    const colors = pickColors(8)
    return {
      level: 27,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[2], color: colors[2] },
        { label: colors[3], color: colors[3] },
        { label: colors[4], color: colors[4] },
        { label: colors[5], color: colors[2] },
        { label: colors[6], color: colors[3] },
        { label: colors[7], color: colors[4] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
  // Extreme round - non visible color
  if (level === "28") {
    const colors = pickColors(8)
    return {
      level: 28,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[3], color: colors[4] },
        { label: colors[4], color: colors[5] },
        { label: colors[5], color: colors[7] },
        { label: colors[6], color: colors[1] },
        { label: colors[7], color: colors[2] },
        { label: colors[0], color: colors[3] },
        { label: colors[0], color: colors[4] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
  // Extreme round - repeated color
  if (level === "29") {
    const colors = pickColors(8)
    return {
      level: 29,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[0] },
        { label: colors[1], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[5], color: colors[3] },
        { label: colors[6], color: colors[4] },
        { label: colors[7], color: colors[5] },
        { label: colors[2], color: colors[6] },
        { label: colors[4], color: colors[7] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  // Extreme round - matching word
  if (level === "30") {
    const colors = pickColors(8)
    return {
      level: 30,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[5] },
        { label: colors[7], color: colors[6] },
        { label: colors[0], color: colors[7] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
}

const getQuickLevelData = (level) => {
  if (level === "1") {
    const colors = pickColors(7)
    return {
      level: 1,
      words: randomizeOrder([
        { label: colors[6], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[2] },
        { label: colors[5], color: colors[3] },
        { label: colors[4], color: colors[4] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
      ])
    }
  }
  if (level === "2") {
    const colors = pickColors(8)
    return {
      level: 2,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[5] },
        { label: colors[7], color: colors[6] },
        { label: colors[0], color: colors[7] },
        { label: colors[1], color: colors[6] },
        { label: colors[2], color: colors[5] },
        { label: colors[3], color: colors[4] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "3") {
    const colors = pickColors(8)
    return {
      level: 3,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[0] },
        { label: colors[3], color: colors[1] },
        { label: colors[4], color: colors[2] },
        { label: colors[5], color: colors[3] },
        { label: colors[6], color: colors[4] },
        { label: colors[1], color: colors[5] },
        { label: colors[2], color: colors[6] },
        { label: colors[3], color: colors[7] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "4") {
    const colors = pickColors(8)
    return {
      level: 4,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[3], color: colors[4] },
        { label: colors[4], color: colors[5] },
        { label: colors[5], color: colors[6] },
        { label: colors[6], color: colors[7] },
        { label: colors[7], color: colors[6] },
        { label: colors[0], color: colors[5] },
        { label: colors[4], color: colors[4] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
  if (level === "5") {
    const colors = pickColors(8)
    return {
      level: 5,
      words: randomizeOrder([
        { label: colors[7], color: colors[0] },
        { label: colors[6], color: colors[1] },
        { label: colors[5], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[3], color: colors[4] },
        { label: colors[2], color: colors[5] },
        { label: colors[1], color: colors[4] },
        { label: colors[0], color: colors[3] },
        { label: colors[7], color: colors[2] },
        { label: colors[6], color: colors[1] },
      ]),
      question: 'Select the **visible** color',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[6], isCorrect: false },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
  if (level === "6") {
    const colors = pickColors(8)
    return {
      level: 6,
      words: randomizeOrder([
        { label: colors[0], color: colors[0] },
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[1] },
        { label: colors[3], color: colors[2] },
        { label: colors[4], color: colors[3] },
        { label: colors[5], color: colors[4] },
        { label: colors[6], color: colors[5] },
        { label: colors[7], color: colors[6] },
        { label: colors[6], color: colors[7] },
        { label: colors[5], color: colors[6] },
        { label: colors[4], color: colors[5] },
        { label: colors[3], color: colors[4] },
      ]),
      question: 'Select the color that **matches its word**',
      hint: 'Focus on the colors and the words!',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "7") {
    const colors = pickColors(8)
    return {
      level: 7,
      words: randomizeOrder([
        { label: colors[1], color: colors[0] },
        { label: colors[2], color: colors[0] },
        { label: colors[3], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[3], color: colors[4] },
        { label: colors[1], color: colors[5] },
        { label: colors[2], color: colors[6] },
        { label: colors[3], color: colors[7] },
      ]),
      question: 'Select the color that **is repeated**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[1], isCorrect: false },
        { label: colors[2], isCorrect: false },
        { label: colors[3], isCorrect: false },
      ])
    }
  }
  if (level === "8") {
    const colors = pickColors(8)
    return {
      level: 8,
      words: randomizeOrder([
        { label: colors[0], color: colors[1] },
        { label: colors[1], color: colors[2] },
        { label: colors[2], color: colors[3] },
        { label: colors[3], color: colors[4] },
        { label: colors[4], color: colors[5] },
        { label: colors[0], color: colors[6] },
        { label: colors[1], color: colors[7] },
        { label: colors[2], color: colors[6] },
        { label: colors[3], color: colors[5] },
        { label: colors[4], color: colors[4] },
      ]),
      question: 'Select the color that is **not visible**',
      hint: 'Focus on the colors - not the words',
      options: randomizeOrder([
        { label: colors[0], isCorrect: true },
        { label: colors[5], isCorrect: false },
        { label: colors[6], isCorrect: false },
        { label: colors[7], isCorrect: false },
      ])
    }
  }
}

export const getLevelData = ({ type, level })=> {
  if (type === 'practice') return getPracticeLevelData(level)
  if (type === 'quick') return getQuickLevelData(level)
}