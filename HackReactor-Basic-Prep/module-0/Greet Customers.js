var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  // your code here
	var visits = customerData[firstName];
	if (visits === undefined) {
	  greeting += 'Welcome! Is this your first time?';
	}
	else {
	  switch(visits.visits) {
	  case 1:
	    greeting = greeting + "Welcome back, " + firstName + "! We're glad you liked us the first time!";
	    break;
	  default:
	    greeting = greeting + "Welcome back, " + firstName + "! So glad to see you again!";
	  }
	}
  return greeting;
}

console.log(greetCustomer('Terrance'));
