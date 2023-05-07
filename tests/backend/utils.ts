import { ClassesEnum } from '../../src/API';

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8)
    return v.toString(16)
  });
}

export function generateID() {

  const min = 0 // Minimum 4-digit number
  const max = 999999 // Maximum 4-digit number

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomAWSDateTime(start: Date, end: Date): string {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const timeDiff = endTime - startTime;

  const randomTimestamp = startTime + Math.floor(Math.random() * timeDiff);

  const randomDate = new Date(randomTimestamp);

  const awsDateTime = randomDate.toISOString();

  return awsDateTime;
}


export function getRandomClasses(count: number): ClassesEnum[] {
  const classes: ClassesEnum[] = Object.values(ClassesEnum);
  const randomClasses: ClassesEnum[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex: number = Math.floor(Math.random() * classes.length);
    randomClasses.push(classes[randomIndex]);
  }

  return randomClasses;
}
