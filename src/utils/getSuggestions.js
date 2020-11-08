const suggestionsList = [
  'nature', 'beauty', 'world', 'architecture', 'landscape', 'photographer', ' photoshoot', 'groom', 'close-up', 'flower',
  'Bride and Groom', ' wedding background', 'wedding', 'bride', 'baby', 'makeup', 'sea', 'ocean', 'tree', 'sky', 'grass',
  'car', 'London', 'Paris', 'art', 'beautiful', 'gaming', 'logo', 'love', 'love story', 'dress', 'behind the camera', 'camera',
  'illustration', 'kiss', 'model', 'femail', 'girls', 'adult', 'USA', 'church', 'house', 'city', 'builbing', 'programmer', 'code'
];

export default function getSuggestions() {
  const suggestions = [];
  while (suggestions.length < 7) {
    const suggestId = Math.floor(Math.random() * Math.floor(suggestionsList.length));
    const suggest = suggestionsList[suggestId];
    suggestions.push(suggest);
  }
  return suggestions;
}
