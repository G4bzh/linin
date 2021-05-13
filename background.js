let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  // Vous pouvez utiliser l'instruction "%c" pour appliquer du style CSS à l'affichage de la console
  console.log('Default background color set to %cgreen', `color: ${color}`);
});