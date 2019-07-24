/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
*/


const validatePIN = pin => pin.length ? [...pin].map(s => parseInt(s)).every(item => !Number.isNaN(item) && ([...pin].length === 4 || [...pin].length === 6)) : false;
