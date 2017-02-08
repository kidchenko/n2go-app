import { User } from './user.model';

describe('model: user', () => {
  it('should create user with values', () => {
    let now = new Date();
    let user = new User({
      country: 'Brazil',
      dateOfBirth: now,
      email: 'kidchenko@gmail.com',
      firstName: 'José',
      id: 1,
      lastName: 'Barbosa',
    });
    expect(user.dateOfBirth).toBe(now);

  });

});
