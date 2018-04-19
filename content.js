console.log('Facebook Limiter running. You have less than 5 minutes to surf on Facebook!');

alert('Facebook Limiter running. You have exactly 5 minutes to surf on Facebook!');

setTimeout(alertClose, 290000);
function alertClose() {
  alert('Facebook will close in 10 seconds');
};

chrome.runtime.sendMessage(
  {
    message: 'closefb',
  }
);

console.log(chrome.runtime);

console.log(chrome);


// function closeFacebook() {
//   let params = {
//     active: true,
//     currentWindow: true,
//     url: 'https://www.facebook.com/',
//   };
//
//   chrome.tabs.query(params, remover);
//
//   function remover(tabs) {
//     console.log(tabs);
//     console.log(tabs[0].id);
//     chrome.tabs.remove(tabs[0].id);
//   };
// };
//
// closeFacebook();

// function tabber() {
//   chrome.tabs.getCurrent(gotTab);
//   function gotTab() {
//
//   }
// }
// chrome.tabs.remove(tab.id);
