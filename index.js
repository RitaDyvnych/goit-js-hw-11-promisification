// --- task 1
const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(ms), ms);
  })
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); 