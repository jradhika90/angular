import { User } from "../models/user.model";

export const USERS: User[] = [
  {
    id:1,
    name: 'Ada',
    email: 'ada@test.com',
    password: 'ada',
    state: 'VIC',
    country: 'Australia',
    postcode: 123456,
    timePreference: 'Morning',
    tnc: true,
    altEmails:['']
  },
  {
    id:2,
    name: 'Babu',
    email: 'babu@test.com',
    password: 'babu',
    state: 'Tamilnadu',
    country: 'India',
    postcode: 987654,
    timePreference: 'Morning',
    tnc: false,
    altEmails:['']
  },
  {
    id: 3,
    name: 'Casey',
    email: 'casey@test.com',
    password: 'ada',
    state: 'New South Wales',
    country: 'Australia',
    postcode: 123564,
    timePreference: 'Morning',
    tnc: true,
    altEmails:['']
  },
  {
    id: 4,
    name: 'Dia',
    email: 'dia@test.com',
    password: 'dia',
    state: 'Westbengal',
    country: 'India',
    postcode: 897650,
    timePreference: 'Morning',
    tnc: true,
    altEmails:['']
  },
  {
    id: 5,
    name: 'Elvin',
    email: 'elvin@test.com',
    password: 'elvin',
    state: 'New South Wales',
    country: 'Australia',
    postcode: 125634,
    timePreference: 'Evening',
    tnc: false,
    altEmails:['']
  }
];
