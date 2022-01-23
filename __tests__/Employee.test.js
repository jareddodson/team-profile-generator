const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates a name for the employee', () => {
    const employee = new Employee('Jared');

    expect(employee.name).toEqual('Jared');
});

test('gets the employees id', () => {
    const employee = new Employee('Jared', '777');

    expect(employee.id).toBe('777');
});

test('gets the employees email', () => {
    const employee = new Employee('Jared', '777', 'jared.dodson04@gmail.com');

    expect(employee.email).toBe('jared.dodson04@gmail.com');
});

test('gets the employees role', () => {
    const employee = new Employee('Jared', '777', 'jared.dodson04@gmail.com', 'Employee');

    expect(employee.getRole()).toEqual('Employee');
});