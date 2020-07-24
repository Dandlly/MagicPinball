window.SIMPLE_MANAGER = null;

window.SIMPLE_CALLBACK = null;

function set_simple_manager(n) {
window.SIMPLE_MANAGER = n;
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

function set_simple_callback(n) {
window.SIMPLE_CALLBACK = n;
}

function get_simple_callback() {
return window.SIMPLE_CALLBACK;
}

function get_at() {
return window.ATJSSDK;
}