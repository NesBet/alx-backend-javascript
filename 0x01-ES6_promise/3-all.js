import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      console.log(`${results[0]} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
