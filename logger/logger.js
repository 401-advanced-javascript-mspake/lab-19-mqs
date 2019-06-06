'use strict';

const Client = require('@nmq/q/client');

// socket.on(events.received, message => {
//   console.log(message);
// });

const database = new Client('database');
const files = new Client('files');

database.subscribe('create', () => {
  console.log('created');
});
database.subscribe('update', () => {
  console.log('updated');
});
database.subscribe('delete', () => {
  console.log('deleted');
});
database.subscribe('read', () => {
  console.log('read');
});
database.subscribe('error', () => {
  console.log('error');
});


files.subscribe('save', () => {
  console.log('file saved');
});
files.subscribe('error', () => {
  console.log('error');
});
