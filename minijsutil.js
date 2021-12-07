// Shorthand for get element by id
function id(name) {
  return document.getElementById(name);
}

// -------------------------------
// LOCAL STORAGE PERSISTENT STATES
// -------------------------------

// initialize state
let _STATE = localStorage.getItem("state");
if(null === _STATE) _STATE = {};

// set state
function setState(key, val) {
  // write through
  _STATE[key] = val;
  localStorage.setItem("state", JSON.stringify(_STATE));
}

// get state
function getState(key) {
  return _STATE[key];
}

// flush state
function flushState() {
  localStorage.clear();
  _STATE = {};
}
