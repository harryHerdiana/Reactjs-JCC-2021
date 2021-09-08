var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 40)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

async function filterWithAsync(colorful,amountOfPage){
    try {
        const dataAsync = await filterBooksPromise(colorful,amountOfPage);
    console.log(dataAsync);
    } catch (error) {console.log(error.message);
    }
}
filterWithAsync(false,250);

filterWithAsync(true,30)
