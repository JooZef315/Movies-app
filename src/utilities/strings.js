export var titleLen = (str, len) => {
  if (str && str.length > len) {
    i = len;
    arrS = str.split(" ");
    newStr = "";
    arrS.forEach((s) => {
      if (newStr.length + s.length >= i) {
        newStr = newStr + "\n" + s;
        i += len;
      } else {
        newStr = newStr + " " + s;
      }
    });
    return newStr.trimStart();
  } else {
    return str;
  }
};

export var query = (str) => {
  if (str) {
    return str.split(" ").join("+");
  } else {
    return str;
  }
};

export var imdb = (str) => {
  if (str && str === "Internet Movie Database") {
    return "IMDB";
  } else {
    return str;
  }
};

export var imdbLink = (str) => {
  if (str) {
    return `https://www.imdb.com/title/${str}`;
  } else {
    return str;
  }
};
