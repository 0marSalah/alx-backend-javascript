import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @returns {Array}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((values) => {
      const rejected = values.filter((value) => value.status === 'rejected');
      const resolved = values.filter((value) => value.status === 'fulfilled');
      return ({
        rejected,
        resolved,
      });
    });
}
console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
