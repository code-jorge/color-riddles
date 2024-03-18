const lang = {
  default: {
    title: 'Results | Colorful',
    fallbackTitle: 'Colorful',
    main: 'Game Over',
    resultPrefix: 'You answered correctly',
    resultSuffix: 'riddles',
    time: 'Your total time is of',
    level: 'Level',
    share: 'Share your result!',
    copy: 'Copied to your clipboard! Share the love!',
    home: 'Go back home',
    copyResult: ({ correct, total, totalTime })=> `I got ${correct}/${total} color riddles correct in only 🕒 ${totalTime}s!`,
    copyLevel: ({ result, level, score })=> `${result} Level ${level} - 🕒 ${score}s`
  },
  en: {
    title: 'Results | Colorful',
    fallbackTitle: 'Colorful',
    main: 'Game Over',
    resultPrefix: 'You answered correctly',
    resultSuffix: 'riddles',
    time: 'Your total time is of',
    level: 'Level',
    share: 'Share your result!',
    copy: 'Copied to your clipboard! Share the love!',
    home: 'Go back home',
    copyResult: ({ correct, total, totalTime })=> `I got ${correct}/${total} color riddles correct in only 🕒 ${totalTime}s!`,
    copyLevel: ({ result, level, score })=> `${result} Level ${level} - 🕒 ${score}s`
  },
  es: {
    title: 'Resultados | Colorful',
    fallbackTitle: 'Colorful',
    main: 'Fin del juego',
    resultPrefix: 'Has respondido correctamente',
    resultSuffix: 'niveles',
    time: 'Tu tiempo total es de',
    level: 'Nivel',
    share: '¡Comparte tu resultado!',
    copy: '¡Copiado a tu portapapeles! ¡Compártelo!',
    home: 'Volver a inicio',
    copyResult: ({ correct, total, totalTime })=> `He acertado ${correct}/${total} niveles de colorful en solo 🕒 ${totalTime}s!`,
    copyLevel: ({ result, level, score })=> `${result} Nivel ${level} - 🕒 ${score}s`
  }
}

export default lang