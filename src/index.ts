import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";

const eventHandler = new MockEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler,".btn-twitter", "https://rafael-hs.github.io/rafahs/#/");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler,".btn-facebook", "https://rafael-hs.github.io/rafahs/#/");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler,".btn-linkedin", "https://rafael-hs.github.io/rafahs/#/");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler,".btn-print");
print.bind();
