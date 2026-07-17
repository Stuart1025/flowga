export interface Instructor {
  slug: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

export const instructors: Instructor[] = [
  {
    slug: 'karen',
    firstName: 'Karen',
    lastName: 'Miller',
    role: 'Yoga Therapist',
    bio: 'Karen is a certified yoga therapist, offering personalized instruction to help you reach your goals.',
    image: '/images/Instructor-Karen.jpg',
    alt: 'Karen Miller profile picture',
  },
  {
    slug: 'jasmine',
    firstName: 'Jasmine',
    lastName: 'Stark',
    role: 'Pilates Instructor',
    bio: 'Jasmine is a highly qualified Pilates instructor who will help you achieve balance and stability.',
    image: '/images/Instructor-Jasmine.jpg',
    alt: 'Jasmine Stark profile picture',
  },
  {
    slug: 'rona',
    firstName: 'Rona',
    lastName: 'Nichols',
    role: 'Yoga Instructor & Founder',
    bio: 'Rona is a certified yoga instructor who founded Flowga. She specializes in breathing techniques and meditation.',
    image: '/images/Instructor-Rona.jpg',
    alt: 'Rona Nichols profile picture',
  },
  {
    slug: 'danny',
    firstName: 'Danny',
    lastName: 'Underwood',
    role: 'Yoga Instructor',
    bio: 'Danny is an experienced yoga teacher, offering classes for all levels and abilities.',
    image: '/images/Instructor-Danny.jpg',
    alt: 'Danny Underwood profile picture',
  },
];
