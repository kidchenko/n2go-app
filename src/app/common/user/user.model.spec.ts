import { User } from './user.model';

describe('model: user', () => {

  let user: User;
  let now: Date;

  beforeEach(() => {
    now = new Date();
    user = new User({
      country: 'Brazil',
      dateOfBirth: now,
      email: 'kidchenko@gmail.com',
      firstName: 'José',
      id: 1,
      lastName: 'Barbosa',
    });
  })

  it('should create user with values', () => {
    expect(user.dateOfBirth).toBeDefined();
  });

  it('should calculate the age', () => {
    user.dateOfBirth = new Date(1991, 5, 20);
    expect(user.getAge()).toBe(25);
  })

});
