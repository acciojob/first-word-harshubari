function firstWord(s) {
 // Remove leading and trailing spaces
    s = s.trim();
    if (!s) {
        return s;  // Return empty string if input is empty
    } else {
        // Split the string by space and return the first word
        return s.split(' ')[0];
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 