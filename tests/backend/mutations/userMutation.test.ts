import { Amplify } from 'aws-amplify'
import { CreateUsersModelInput } from '../../../src/API'
import { createUser } from '../../../src/backend/mutations/userMutations'
import awsconfig from '../../../src/aws-exports'
import { generateID, generateUUID } from '../../backend/utils'

Amplify.configure(awsconfig)

describe('User Mutations', () => {

  test.skip('Create User', async () => {

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


