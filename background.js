console.log('background listening');

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'closefb') {
      console.log('facebook detected, closing facebook in 5 minutes...');
      console.log(chrome.tabs);
      console.log(sender.tab.id);

      setTimeout(closeFacebook, 300000);
      function closeFacebook() {
        chrome.tabs.remove(sender.tab.id);
      };
    };
  }
);

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
