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

test('gets employees id', ()=> {
    const employee = new Employee('Jared', '777', 'jared.dodson04@gmail.com', 'Employee');

    expect(employee.getName()).toEqual(employee.name);
});

test('gets employees email', () => {
    const employee = new Employee('Jared', '777', 'jared.dodson04@gmail.com', 'Employee');

    expect(employee.getId()).toEqual(employee.id);
});

test('', () => {
    const employee = new Employee('Jared', '777', 'jared.dodson04@gmail.com', 'Employee');

    expect(employee.getEmail()).toEqual(employee.email);
});