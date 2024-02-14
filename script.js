function firstWord(s) {
  // your code here
 s = s.trim();

    // Check if the string is empty or does not contain any space
    if (s === '' || !s.includes(' ')) {
        return s;
    }

    // Extract the first word (characters up to the first space)
    return s.substring(0, s.indexOf(''));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
