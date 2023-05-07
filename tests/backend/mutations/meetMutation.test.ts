import { Amplify } from 'aws-amplify'
import { CreateMeetsModelInput } from '../../../src/API'
import { createMeet, updateMeet } from '../../../src/backend/mutations/meetMutations'
import { updateUser } from '../../../src/backend/mutations/userMutations'
import { getMeetById } from '../../../src/backend/queries/meetQueries'
import awsconfig from '../../../src/aws-exports'
import { generateID, getRandomAWSDateTime, getRandomClasses } from '../utils' 
import { async } from 'q'
import { getUserById } from '../../../src/backend/queries/userQueries'
import { ConsoleLogger } from '@aws-amplify/core'

Amplify.configure(awsconfig)

describe('Post Mutations', () => {

  test.skip('Create Post', async () => {
    
    const earliestBound: Date = new Date('2023-01-01')
    const latestBound: Date = new Date('2023-12-31')
    const testPosterUUID = `383221a9-c50d-48a7-be7b-6103407f2bfe` // user already created
    
    let meetNum = generateID()
    let randomTimes: string[] = [
      getRandomAWSDateTime(earliestBound, latestBound), 
      getRandomAWSDateTime(earliestBound, latestBound)
    ] 

    randomTimes.sort((time1, time2) => {
      const date1: Date = new Date(time1);
      const date2: Date = new Date(time2);
      return date1.getTime() - date2.getTime();
    });

    let classes = getRandomClasses(1)

    // AWSDateTime format
    // YYYY-MM-DDThh:mm:ss.sssZ

    const input: CreateMeetsModelInput = {
      creator_id: testPosterUUID,
      meet_creator: 'testPoster', // bad name btw
      meet_name: `testMeet${meetNum}`,
      location: `Abhi's House`,
      start_time: `${randomTimes[0]}`,
      end_time: `${randomTimes[1]}`,
      classes: classes,
    }
    
    const result = await createMeet({input})
    expect(JSON.stringify(result)).toContain(`testMeet${meetNum}`)  

  })

  test('Attend Meet', async () => {

    const testAttendeeUUID = '79c35ff1-bd6d-44e7-b455-c04ac986f8eb' // user already created
    const testMeetUUID = 'a2e7a0e4-a552-47bb-81c3-4593d1571953' // meet already created

    const meet = await getMeetById(testMeetUUID)
    let meetData
    if ('data' in meet) {
      meetData = meet.data
    }
    const existingAttendants = meetData.getMeetsModel.attendants || []
    const updatedAttendants = existingAttendants > 0 
      ? [...new Set([existingAttendants, testAttendeeUUID])]
      : [testAttendeeUUID]
    
    const meetUpdate = {
      id: testMeetUUID,
      attendants: updatedAttendants
    }

    const user = await getUserById(testAttendeeUUID)
    let userData
    if ('data' in user) {
      userData = user.data
    }

    console.log(userData)

    const existingMeets = userData.getUsersModel.attending_meets || []
    const updatedMeets = existingAttendants > 0 
      ? [...new Set([existingMeets, testMeetUUID])]
      : [testMeetUUID]
      
      const userUpdate = {
        id: testAttendeeUUID,
        attending_meets: updatedMeets
      }
      
    console.log(userUpdate)

    const meetResult = await updateMeet({input: meetUpdate})
    const userResult = await updateUser({input: userUpdate})
    expect(JSON.stringify(meetResult)).toContain('79c35ff1-bd6d-44e7-b455-c04ac986f8eb')
    expect(JSON.stringify(userResult)).toContain('a2e7a0e4-a552-47bb-81c3-4593d1571953')

  })

})


