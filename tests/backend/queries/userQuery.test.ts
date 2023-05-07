import { Amplify } from 'aws-amplify'
import awsconfig from '../../../src/aws-exports'
import { getUserById } from '../../../src/backend/queries/userQueries'
 
Amplify.configure(awsconfig)

describe('User Queries', () => {

  test('Get User by ID', async () => { 

    const testUsername = 'testuser666706'
    const testID = '79c35ff1-bd6d-44e7-b455-c04ac986f8eb'
    
    const result = await getUserById(testID)
    expect(JSON.stringify(result)).toContain(testUsername)
    expect(JSON.stringify(result)).toContain('firstlast666706@email.com')

  })

})