import { Ibook, BookCategory } from './modeles/book';

export const books: Ibook[] = [
  {
    name: 'Books #1',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 42,
    category: BookCategory.fantasy,
    createDate: 10,
    isAvailable: true,
    id: 1,
  },
  {
    name: 'Books #2',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 44,
    category: BookCategory.scientific,
    createDate: 13,
    isAvailable: false,
    id: 2,
  },
  {
    name: 'Books #3',
    description:
      'Aliqua Lorem aute ullamco magna cupidatat eu occaecat cupidatat ut minim. Elit fugiat eiusmod eiusmod cillum dolor dolor sunt eiusmod quis ex laboris. Magna dolore voluptate ea proident. Nisi dolor fugiat dolore commodo reprehenderit proident consectetur quis.',
    price: 22,
    category: BookCategory.detective,
    createDate: 12,
    isAvailable: true,
    id: 3,
  },
];
