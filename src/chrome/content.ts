import { ChromeMessage, Sender } from '../types';

const autofanListener = (message: ChromeMessage, sender: any, response: any) => {
	console.log('[content.js]. Message received', {
		message,
		sender,
	});

	function getExpiredFollowers() {
		const expiredFollowers = document.getElementsByClassName('m-rounded m-flex m-space-between m-lg g-btn');
		return Array.from(expiredFollowers);
	}

	if (sender.id === chrome.runtime.id && message.from === Sender.React && message.message === 'get expired follower count') {
		const expiredCount = document.getElementsByClassName('b-tabs__nav__text');
		response(`${expiredCount[2].innerHTML}`)
	}

	if (sender.id === chrome.runtime.id && message.from === Sender.React && message.message === 'auto follow') {
		const followers = getExpiredFollowers();
		//@ts-ignore
		followers.forEach(follower => follower.click())
	}
};

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'connected') {
		chrome.runtime.onMessage.addListener(autofanListener);
  }

});
/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(autofanListener);
