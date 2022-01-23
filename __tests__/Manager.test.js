const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('managers info', () => {
    const manager = new Manager('Jared', '777', 'jared.dodson04@gmail.com', 'Manager', '444');

    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('777');
    expect(manager.email).toBe('jared.dodson04@gmail.com');
});

test('managers office #', () => {
    const manager = new Manager('Jared', '777', 'jared.dodson04@gmail.com', '444', 'Manager');

    expect(manager.officeNumber).toBe('444');
});

test('manager role', () => {
    const manager = new Manager('Jared', '777', 'jared.dodson04@gmail.com', '444', 'Manager');

    expect(manager.getRole()).toEqual('Manager');
});