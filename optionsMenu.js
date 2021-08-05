const readline = require("readline");
const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let books = ["Atomic Habits", "Eat that Frog"];

//start
function optionsMenu() {
  readline1.question(
    " 1 - Show all books 2 - Add a new book 3 - Quit ",
    (inputt) => {
      if (inputt == 1) {
        for (var i = 0; i < books.length; i++) {
          console.log(`${i + 1}.`, books[i]);
        }
        optionsMenu();
      } else if (inputt == 2) {
        readline1.question("Add a new book ", function (bookName) {
          books.push(bookName);
          console.log(`${bookName} is added Successfully`);
          optionsMenu();
        });
      } else if (inputt == 3) {
        readline1.question(
          "Are you sure you want to quit - press Y to quit ",
          function (key) {
            if (key == "Y" || key == "y") {
              readline1.close();
            } else {
              console.log("Wrong Input");
              optionsMenu();
            }
          }
        );
      } else {
        console.log(
          "You have selected an invalid entry so please press 1, 2 or 3"
        );
        optionsMenu();
      }
    }
  );
}
optionsMenu();
readline1.on("close", function () {
  console.log("Bye Bye!");
});
