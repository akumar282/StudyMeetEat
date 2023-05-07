import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser, deleteUser, updateUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
Amplify.configure(awsconfig)

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  });
}

function generateID() {

  const min = 0 // Minimum 4-digit number
  const max = 999999 // Maximum 4-digit number

  return Math.floor(Math.random() * (max - min + 1)) + min
}

describe('User Mutations', () => {

  test('Create User', async () => {

    let idNum = generateID()

    const input: CreateUsersModelInput = {
      cognito_id: generateUUID(),
      first_name: 'first',
      last_name: 'last',
      email: `firstlast${idNum}@email.com`,
      username: `testuser${idNum}`,
    }
    
    const result = await createUser({input})
    expect(JSON.stringify(result)).toContain(`testuser${idNum}`)  

  })
})


