const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('gets engs github acc', () => {
    const engineer = new Engineer('Jared', '777', 'jared.dodson04@gmail.com', 'jareddodson', 'Employee');

    expect(engineer.github).toEqual('jareddodson');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets engs role', () => {
    const engineer = new Engineer('Jared', '777', 'jared.dodson04@gmail.com', 'jareddodson', 'Employee');

    expect(engineer.getRole()).toEqual('Engineer');
});