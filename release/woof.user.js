// ==UserScript==
// @name         Woof!
// @namespace    https://github.com/nanalan/woof
// @version      0.3
// @description  A modern Scratch theme.
// @author       nanalan
// @match        https://scratch.mit.edu/*
// @exclude      https://scratch.mit.edu/accounts/*
// @exclude      https://scratch.mit.edu/site-api/*
// @grant        none
// @downloadURL  https://github.com/nanalan/woof/raw/master/release/woof.user.js
// @updateURL    https://github.com/nanalan/woof/raw/master/release/woof.user.js
// ==/UserScript==

/* jshint ignore:start */
(function() {
  'use strict';
  const css = 'body.woof-new #navigation {  border-bottom: none;}body.woof-new #navigation .logo a {  -webkit-transition: none;  transition: none;  background-size: 81px !important;}body.woof-new #navigation .link a span {  font-weight: 400;  font-size: 14px;}body.woof-new #navigation .mystuff > a,body.woof-new #navigation .messages > a {  background-size: 24px !important;}body.woof:not(.editor) {  background: #fff;  color: #000;  height: auto;  min-height: 100%;}body.woof:not(.editor) .avatar img {  border-radius: 3px;}body.woof:not(.editor) #content {  padding-top: 6em;}body.woof:not(.editor) #topnav {  box-shadow: none;  height: 51px;  -webkit-user-select: none;     -moz-user-select: none;      -ms-user-select: none;          user-select: none;  position: fixed;  box-shadow: 0 0 3px rgba(0,0,0,0.25);}body.woof:not(.editor) #topnav .innerwrap {  height: 100%;  background-color: #25aff4;}body.woof:not(.editor) #topnav .innerwrap .container {  height: 100%;  width: 942px;  margin: 0 auto;}body.woof:not(.editor) #topnav .innerwrap .container li {  border: none;  height: 51px;  line-height: 51px;  background: transparent;}body.woof:not(.editor) #topnav .innerwrap .container li:hover {  background: rgba(0,0,0,0.1);}body.woof:not(.editor) #topnav .innerwrap .container > a,body.woof:not(.editor) #topnav .innerwrap .container .site-nav > li > a,body.woof:not(.editor) #topnav .innerwrap .container .account-nav > li > a {  position: relative;  border: none;  font-weight: 500;  color: #fff;  font-size: 14px;  margin: 0;  padding: 17px 15px 0;  height: 33px;  line-height: 1;  font-weight: 400;}body.woof:not(.editor) #topnav .innerwrap .container .logo {  width: 80px;  -webkit-flex-shrink: 0;      -ms-flex-negative: 0;          flex-shrink: 0;  background-image: url("https://scratch.mit.edu/images/logo_sm.png");  background-repeat: no-repeat;  background-size: 81px;  background-position: center;  padding-right: 16px;}body.woof:not(.editor) #topnav .innerwrap .container .logo span {  display: none;}body.woof:not(.editor) #topnav .innerwrap .account-nav {  margin: 0;  height: 51px;}body.woof:not(.editor) #topnav .innerwrap .account-nav .logged-in-user.open {  background-color: transparent !important;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .dropdown-menu {  background-color: #25aff4;  margin-top: 25px;  box-shadow: none;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .dropdown-menu li,body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .dropdown-menu li > a {  height: 36px;  line-height: 36px;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .dropdown-menu li form input[type=submit],body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .dropdown-menu li > a form input[type=submit] {  background-color: transparent;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li > .messages-icon {  background: url("https://scratch.mit.edu/images/nav-notifications.png") no-repeat center;  background-size: 24px;  padding-left: 10px;  width: 30px;  padding-right: 10px;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li > .mystuff-icon {  background: url("https://scratch.mit.edu/images/mystuff.png") no-repeat center;  background-size: 24px;  padding-left: 10px;  padding-right: 10px;  width: 30px;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .notificationsCount {  line-height: 17px;  margin-top: 4px;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .user-icon {  border: none;  border-radius: 3px;  margin-top: 3px;}body.woof:not(.editor) #topnav .innerwrap .account-nav.logged-in > li .caret {  border: none;  background: url("https://scratch.mit.edu/images/dropdown.png") no-repeat center;  height: 20px;  width: 20px;  margin-left: 8px;  background-size: 50%;  opacity: 1;}body.woof:not(.editor) #topnav form.search {  margin: 0 20px;}body.woof:not(.editor) #topnav form.search .glass {  position: absolute;  background-color: transparent;  background-image: url("https://scratch.mit.edu/images/nav-search-glass.png");  background-repeat: no-repeat;  background-position: center;  background-size: 14px 14px;  width: 40px;  border: none;  box-shadow: none;  margin-top: 5px;  cursor: pointer;  height: 40px;}body.woof:not(.editor) #topnav form.search #search-input {  -webkit-transition: 0.15s ease background-color;  transition: 0.15s ease background-color;  padding: 0;  padding-right: 10px;  padding-left: 40px;  height: 40px;  color: #fff;  font-size: 14px;  outline: none;  display: inline-block;  margin: 0.5em 0;  margin-top: 5px;  box-shadow: none;  border: none;  background-color: rgba(0,0,0,0.1);  border-radius: 5px;  width: 147.281px;  -webkit-box-flex: 0;  -webkit-flex-grow: 0;      -ms-flex-positive: 0;          flex-grow: 0;}body.woof:not(.editor) #topnav form.search #search-input:focus {  background-color: rgba(0,0,0,0.2);}body.woof:not(.editor) #topnav form.search ::-webkit-input-placeholder {  color: rgba(255,255,255,0.75);}body.woof:not(.editor) #topnav form.search ::-moz-placeholder {  color: rgba(255,255,255,0.75);}body.woof:not(.editor) #topnav form.search :-ms-input-placeholder {  color: rgba(255,255,255,0.75);}body.woof:not(.editor) #topnav form.search ::placeholder {  color: rgba(255,255,255,0.75);}body.woof:not(.editor) a:not(.button),body.woof:not(.editor) input.link {  cursor: pointer;}body.woof:not(.editor) a:not(.button):hover,body.woof:not(.editor) input.link:hover {  text-decoration: none;}body.woof:not(.editor) .user.thumb img {  border: none;  border-radius: 3px;}body.woof:not(.editor) .avatar {  border-radius: 3px;}body.woof:not(.editor) .box .box-head,body.woof:not(.editor) h2,body.woof:not(.editor) h3,body.woof:not(.editor) h4,body.woof:not(.editor) h1,body.woof:not(.editor) .sub-list a,body.woof:not(.editor) #tabs a {  color: #6b6b6b;  font-weight: 200;}body.woof:not(.editor) .box {  box-shadow: none;}body.woof:not(.editor) #tabs .active {  background-color: #25aff4;  text-shadow: none;}body.woof:not(.editor) #tabs .active a {  color: #fff !important;  text-shadow: none;}body.woof:not(.editor) .dropdown .dropdown-menu li {  color: #000;}body.woof:not(.editor) .button,body.woof:not(.editor) .button.grey,body.woof:not(.editor) button {  border: none;  background-image: none;  background-color: #607d8b;  border-radius: 3px;  outline: 0;  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);  color: #fff !important;  text-transform: capitalize;  text-shadow: none;  padding: 0 1rem;  -webkit-transition: box-shadow 0.3s ease-out;  transition: box-shadow 0.3s ease-out;}body.woof:not(.editor) .button span.dropdown-toggle.black span.caret,body.woof:not(.editor) .button.grey span.dropdown-toggle.black span.caret,body.woof:not(.editor) button span.dropdown-toggle.black span.caret {  border-top: 4px solid #fff;}body.woof:not(.editor) .button span.black,body.woof:not(.editor) .button.grey span.black,body.woof:not(.editor) button span.black {  color: #fff;  -webkit-filter: brightness(10);          filter: brightness(10);}body.woof:not(.editor) .button[data-control="load-more"],body.woof:not(.editor) .button.grey[data-control="load-more"],body.woof:not(.editor) button[data-control="load-more"] {  margin-bottom: 20px;}body.woof:not(.editor) .button.small,body.woof:not(.editor) .button.grey.small,body.woof:not(.editor) button.small {  padding: 0 0.5rem;}body.woof:not(.editor) .button a,body.woof:not(.editor) .button.grey a,body.woof:not(.editor) button a,body.woof:not(.editor) .button span,body.woof:not(.editor) .button.grey span,body.woof:not(.editor) button span {  color: #fff;  letter-spacing: 0.1px;}body.woof:not(.editor) .button:focus,body.woof:not(.editor) .button.grey:focus,body.woof:not(.editor) button:focus,body.woof:not(.editor) .button:active,body.woof:not(.editor) .button.grey:active,body.woof:not(.editor) button:active {  box-shadow: none;}body.woof:not(.editor) .button:hover,body.woof:not(.editor) .button.grey:hover,body.woof:not(.editor) button:hover {  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);}body.woof:not(.editor) .button.blue,body.woof:not(.editor) .button.grey.blue,body.woof:not(.editor) button.blue,body.woof:not(.editor) .button#see-inside,body.woof:not(.editor) .button.grey#see-inside,body.woof:not(.editor) button#see-inside,body.woof:not(.editor) .button[data-control="post"],body.woof:not(.editor) .button.grey[data-control="post"],body.woof:not(.editor) button[data-control="post"] {  background-color: #25aff4;}body.woof:not(.editor) .button#see-inside,body.woof:not(.editor) .button.grey#see-inside,body.woof:not(.editor) button#see-inside {  padding-left: 0.5rem;  padding-right: 0.5rem;}body.woof:not(.editor) .button.orange,body.woof:not(.editor) .button.grey.orange,body.woof:not(.editor) button.orange,body.woof:not(.editor) .button#share,body.woof:not(.editor) .button.grey#share,body.woof:not(.editor) button#share {  background-color: #f90;}body.woof:not(.editor) #share-bar {  border: 1px solid rgba(255,153,0,0.3);  background-color: rgba(255,153,0,0.2);  font-weight: 400;}body.woof,body.woof-new {  font-family: Helvetica Neue, Roboto, Fira Sans, Helvetica, Arial, sans-serif;}body.woof ::-moz-selection,body.woof-new ::-moz-selection {  color: #fff;  background-color: #f90;}body.woof ::selection,body.woof-new ::selection {  color: #fff;  background-color: #f90;}body.woof .comment.removed,body.woof-new .comment.removed {  display: none;}body.woof .reply[style="display: list-item;"],body.woof-new .reply[style="display: list-item;"] {  display: none !important;}body.woof *,body.woof-new * {  text-shadow: none !important;}';
  /* Woof! */
document.head.innerHTML += '<!-- Woof! -->\n<style id="woof">' + css + '</style>'

if(window.jQuery) document.body.classList.add('woof')
else document.body.classList.add('woof-new')
})();
/* jshint ignore:end */
