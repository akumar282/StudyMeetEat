import { Amplify } from 'aws-amplify'
import { CreateMeetsModelInput } from '../../../src/API'
import { createMeet, deleteMeet, updateMeet } from '../../../src/backend/mutations/postMutations'
import awsconfig from '../../../src/aws-exports'
import { generateID, getRandomAWSDateTime, getRandomClasses } from '../../backend/utils' 

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
})


