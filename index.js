const input = document.querySelector(".input");
const button = document.querySelector(".button");
const console = document.querySelector(".console");
const divTable = document.querySelector(".table");
let test = "";
let number = 0;
let code = [];
let kod = [];
let keyRow = [];
let keyCol, tables, displayKod, c;

button.addEventListener("click", () => {
  //clear
  test = "";
  number = 0;
  code = [];
  kod = [];
  keyRow = [];

  code = Array.from(input.value);

  for (x = 2; x <= 10; x++) {
    if (code.length % x === 0) {
      keyRow.push(x);
      window.console.log(`dziala ${x}`);
    }
  }

  tables = keyRow.length;
  window.console.log(keyRow.length);

  for (i = 0; i < tables; i++) {
    displayKod = "";
    test += `<p>Rozwiązanie ${i + 1}</p>`;
    test += `Klucz w tym rozwiązaniu wynosi ${keyRow[i]}`;
    window.console.log(i);
    test += `<table>`;
    number = 0;
    kod = [];
    keyCol = code.length / keyRow[i];
    for (j = 0; j < keyRow[i]; j++) {
      kod.push([]);
      test += `<tr>`;
      for (p = 0; p < keyCol; p++) {
        test += `<td>${code[number]}</td>`;
        kod[j].push(code[number]);
        number++;
      }
    }
    test += `</table>`;

    for (a = 1; a <= keyCol; a++) {
      c = a - 1;
      if (a % 2 === 0) {
        for (b = keyRow[i] - 1; b >= 0; b--) {
          displayKod += kod[b][c];
        }
      } else {
        for (b = 0; b < keyRow[i]; b++) {
          displayKod += kod[b][c];
        }
      }
    }

    test += `Odpowiedź: <b>${displayKod}</b>`;
  }
  divTable.innerHTML = test;
  window.console.log(tables);
  input.value = "";
});
