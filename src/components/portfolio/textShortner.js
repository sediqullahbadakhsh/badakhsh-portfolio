const textShortner = (text) => {
  let shortText = "";
  const dots = " ...";
  for (let i = 0; i < 70; i += 1) {
    shortText += text[i];
  }
  shortText += dots;
  return shortText;
};
export default textShortner;
