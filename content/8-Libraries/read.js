// Get an array of all the teams in concacaf groups
import { flatten } from 'lodash';
const concacafGroups = [
  ['Mexico', 'Germany', 'Sweden', 'South Korea'],
  ['Belgium', 'Panama', 'Tunisia', 'England'],
  ['Brazil', 'Switzerland', 'Costa Rica', 'Serbia']
];
console.log(flatten(concacafGroups));

// Get an array of just the concacaf rivals
import { difference } from 'lodash';
const concacafTeams = [
  'Mexico', 'Costa Rica', 'Panama'
];
console.log(difference(flatten(concacafGroups), concacafTeams));

// Get a uniq list of emails from all the purchases
import { uniq } from 'lodash';
const purchases = [
  { id: 1, email: "john@mulaney.com" },
  { id: 2, email: "chris@rock.com" },
  { id: 3, email: "dave@chappelle.com" },
  { id: 4, email: "chris@rock.com" },
  { id: 5, email: "bill@burr.com" }
];
console.log(uniq(purchases.map((p) => p.email)));

// Get a simple user object with just the name and email
import { pick } from 'lodash';
const user = {
  id: 1,
  name: 'Tom Segura',
  email: 'tom@segura.com',
  age: 50,
  weight: 120
};
console.log(pick(user, ['name', 'email']));

// Moment
import moment from 'moment';
// Setting a locale
moment.locale('es');
// Format time
console.log(moment().format('[Hoy es] dddd DD [de] MMMM'));
// Relative time
console.log("El día se acaba " + moment().endOf('day').fromNow());
// Asking things
console.log(moment('2018-01-01').isBefore(moment()));
// Date operations
const juan = {
  name: 'Juan',
  dob: moment('1985-01-01')
};
console.log("Juan tiene: ")
console.log(moment().subtract(juan.dob.year(), 'years').year() + " años");
