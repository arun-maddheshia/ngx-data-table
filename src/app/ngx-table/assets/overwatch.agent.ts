export interface OverWatchAgent {
  position;
  firstName: string;
  lastName: string;
  username: string;
  status: string;
  age ? ;
  location ? ;
}

export const AGENTS_DATA: OverWatchAgent[] = [{
    position: 1,
    firstName: 'John',
    lastName: 'Morisson',
    username: '@Soldier76',
    status: 'Work'
  },
  {
    position: 2,
    firstName: 'Jesse',
    lastName: 'McCree',
    username: '@McCree',
    status: 'Vacation'
  },
  {
    position: 3,
    firstName: 'Jamison ',
    lastName: 'Fawkes ',
    username: '@Junkrat',
    status: 'Vacation'
  },
  {
    position: 4,
    firstName: 'Amélie ',
    lastName: 'Guillard',
    username: '@Widowmaker',
    status: 'Work'
  },
  {
    position: 5,
    firstName: 'Lena',
    lastName: 'Oxton',
    username: '@Traicer',
    status: 'Work'
  },
  {
    position: 6,
    firstName: 'Genji',
    lastName: 'Shimada',
    username: '@NorthDragon',
    status: 'Vacation'
  },
  {
    position: 7,
    firstName: 'Hanzo',
    lastName: 'Shimada',
    username: '@SouthDragon',
    status: 'Work'
  },
];

export const FilterData =  [
  {
    label: 'Kakul',
    value: 1
  },
  {
    label: 'Jeevan',
    value: 2
  }
]