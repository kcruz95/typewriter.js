const sentence = "Eu não espero Carnaval chega pra ser vadia. Sou todo dia. Sou todo dia";
// for simulating typing romance languages with a latin alphabet at a realistic speed: try + 132
// for simulating typing mandarin at a realistic speed: try + 216
// hello there from lighthouse labs

let timer = 1500;
for (const char of sentence) {
  setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer = timer + 132;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, timer);