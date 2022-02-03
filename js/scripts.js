//Business logic

// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//     // return text.split("   ").length;
//     // wordCounter("    ");
//   }
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//      if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;
// }


//Business Logic

//wordCounter() function omitted for brevity.

// function numberOfOccurrencesInText(word, text) {
//   if (word === text) {
//     return 1;
//   }
//   return 0;
// }





//               Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}


//                Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  console.log(wordArray);
  wordArray.forEach(function (element) {
    if (!parseInt(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(` `);
  let numberOfOccurences = 0;
  wordArray.forEach(function (element) {
    if (element.toUpperCase().includes(word.toUpperCase())) {
      numberOfOccurences++;
    }
  });
  return numberOfOccurences;
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

console.log(boldPassage('hello', 'hello there'));


//                UI Logic

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val().trim();
    const word = $("#word").val().trim();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
