var fs = require('fs');

module.exports = {

  getUserInput: function(question, next, card) {
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt(question);
    rl.prompt();
    rl.on('line', function(line) {
      rl.close();
      if (!card) {
        next(line);
      } else {
        next(line, card);
      }
    });
  },
  // Briefly the algorithm works like this:
  // EF (easiness factor) is a rating for how difficult the card is.
  // Grade: (0-2) Set reps and interval to 0, keep current EF (repeat card today)
  //        (3)   Set interval to 0, lower the EF, reps + 1 (repeat card today)
  //        (4-5) Reps + 1, interval is calculated using EF, increasing in time.
  calcIntervalEF: function(card, grade, today) {
    var oldEF = card.EF,
        newEF = 0,
        nextDate = new Date(today);

    if (grade < 3) {
      card.reps = 0;
      card.interval = 0;
    } else {

      newEF = oldEF + (0.1 - (5-grade)*(0.08+(5-grade)*0.02));
      if (newEF < 1.3) { // 1.3 is the minimum EF
        card.EF = 1.3;
      } else {
        card.EF = newEF;
      }

      card.reps = card.reps + 1;

      switch (card.reps) {
      case 1:
        card.interval = 1;
        break;
      case 2:
        card.interval = 6;
        break;
      default:
        card.interval = Math.ceil((card.reps - 1) * card.EF);
        break;
      }
    }

    if (grade === 3) {
      card.interval = 0;
    }

    nextDate.setDate(today.getDate() + card.interval);
    card.nextDate = nextDate;
  },

  writeCardFile: function(cardFile, cards) {
    fs.writeFile(cardFile, JSON.stringify(cards, null, 2), function(err) {
      if (err) throw err;
      console.log("\nProgress saved back to file.");
    });
  }
}
