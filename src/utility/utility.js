function calculateElapsed(utc) {
  const seconds = Math.floor(new Date().getTime() / 1000) - utc;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 60 / 60);
  const days = Math.floor(seconds / 60 / 60 / 24);
  const months = Math.floor(seconds / 60 / 60 / 24 / 30);
  const years = Math.floor(seconds / 60 / 60 / 24 / 365);

  let result;

  if (years > 0) {
    result = `${years} years ago`;
  } else if (months > 0) {
    result = `${months} months ago`;
  } else if (days > 0) {
    result = `${days} days ago`;
  } else if (hours > 0) {
    result = `${hours} hours ago`;
  } else if (minutes > 0) {
    result = `${minutes} minutes ago`;
  } else if (seconds > 0) {
    result = `${seconds} seconds ago`;
  } else {
    result = "Now";
  }

  return result;
}

function calculateScore(score) {
  if (score > 1000 * 1000) {
    return Math.floor(score / 1000 / 1000) + "m";
  }
  if (score > 1000) {
    return Math.floor(score / 1000) + "k";
  }
  return score;
}

export { calculateElapsed, calculateScore };
