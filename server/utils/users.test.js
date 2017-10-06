const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Ahmed',
      room: 'Node'
    }, {
      id: '2',
      name: 'Ali',
      room: 'React'
    },{
      id: '3',
      name: 'Haider',
      room: 'Node'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Silver',
      room: 'Node'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '67';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userid = '2';
    var user = users.getUser(userid);

    expect(user.id).toBe(userid);
  });

  it('should not find user', () => {
    var userId = '57';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Ahmed', 'Haider']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Ali']);
  });
});
