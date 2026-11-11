export interface CertificationsItems {
  id: number;
  courseTitle: string;
  schoolTitle: string;
  link: string;
  image: string;
  completed: string;
}

export const certificationsData: CertificationsItems[] = [
  {
    id: 1,
    courseTitle: 'Data Structures',
    schoolTitle: 'UC San Diego',
    link: 'https://www.coursera.org/account/accomplishments/verify/60PW1BTFEMC5',
    image: '/assets/coursera-images/datastructures.webp',
    completed: 'Completed July 2025'
  },
  {
    id: 2,
    courseTitle: 'Programming with JavaScript',
    schoolTitle: 'Meta',
    link: 'https://www.coursera.org/account/accomplishments/verify/MCY7Z8DIZE81',
    image: '/assets/coursera-images/programmingjavascript.webp',
    completed: 'Completed July 2025'
  },
  {
    id: 3,
    courseTitle: 'Interactivity with JavaScript',
    schoolTitle: 'University of Michigan',
    link: 'https://www.coursera.org/account/accomplishments/verify/60PW1BTFEMC5',
    image: '/assets/coursera-images/interactivityjavascript.webp',
    completed: 'Completed July 2025'
  },
  {
    id: 4,
    courseTitle: 'Interactivity with JavaScript',
    schoolTitle: 'University of Michigan',
    link: 'https://www.coursera.org/account/accomplishments/verify/60PW1BTFEMC5',
    image: '/assets/coursera-images/interactivityjavascript.webp',
    completed: 'Completed July 2025'
  }
];
