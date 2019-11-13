const getUserConfirmation = (dialogKey, callback) => {
  // use "message" as Symbol-based key
  const dialogTrigger = window[Symbol.for(dialogKey)];

  if (dialogTrigger) {
    // delegate to dialog and pass callback through
    return dialogTrigger(callback);
  }

  // Fallback to allowing navigation
  callback(true);
};

export default getUserConfirmation;
