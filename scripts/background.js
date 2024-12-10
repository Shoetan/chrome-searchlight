
let isClicked = false;

chrome.action.onClicked.addListener((tab) => {
  isClicked = !isClicked;

  console.log(isClicked)

  const scriptFile = isClicked ? 'scripts/overlay.js' : 'scripts/remove-overlay.js';

  chrome.scripting.executeScript({
    target: { tabId: tab.id},
    files: [scriptFile]
  });
});