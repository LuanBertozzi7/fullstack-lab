// Create a new Date object with the current date and time
const date = new Date();

/**
 * Adds a leading zero to numbers less than 10
 * @param {number} num - The number to format
 * @returns {string} The formatted number with leading zero if needed
 */

function formatWithLeadingZero(num) {
  return num >= 10 ? num.toString() : `0${num}`;
}



/**
 * Formats a Date object as DD/MM/YYYY HH:MM:SS
 * @param {Date} date - The date to format
 * @returns {string} The formatted date string
 */

function formatDate(date) {
  const day = formatWithLeadingZero(date.getDate());
  const month = formatWithLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = formatWithLeadingZero(date.getHours());
  const minute = formatWithLeadingZero(date.getMinutes());
  const second = formatWithLeadingZero(date.getSeconds());
  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

// Print the formatted current date
console.log(formatDate(date));