"use strict";
cc._RF.push(module, '13f6cpJlw1AWKPzpXxV/+5/', 'SimpleGlobal');
// SDK/script/SimpleGlobal.js

"use strict";

window.SIMPLE_MANAGER = null;
window.SIMPLE_CALLBACK = null;

function set_simple_manager(e) {
  window.SIMPLE_MANAGER = e;
}

function get_simple_manager() {
  return window.SIMPLE_MANAGER;
}

function get_simple_ad() {
  return window.SIMPLE_MANAGER.simpleAd;
}

function get_simple_analytics() {
  return window.SIMPLE_MANAGER.simpleAnalytics;
}

function set_simple_callback(e) {
  window.SIMPLE_CALLBACK = e;
}

function get_simple_callback() {
  return window.SIMPLE_CALLBACK;
}

function get_at() {
  return window.ATJSSDK;
}

cc._RF.pop();