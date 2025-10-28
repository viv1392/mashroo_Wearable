const {faker}=require('@faker-js/faker');
const registrationData = [
  {
    fN: faker.person.firstName(),
    lN: faker.person.lastName(),
    email: '',
    pwd: faker.internet.password({length:10,memorable:true,pattern:/[A-Za-z0-9]/,prefix:'Vivek@'})
  },
  {
    fN: '',
    lN: 'Pandey',
    email: 'xyz@gmail.com',
    pwd: 'Vivek@1234'
  },
  {
    fN: 'Vivek',
    lN: '',
    email: 'xyz@gmail.com',
    pwd: 'Vivek@1234'
  },
  {
    fN: 'Vivek',
    lN: 'Pandey',
    email: 'xyz@gmail.com',
    pwd: ''
  },
  {
    fN: 'Vivek',
    lN: 'Pandey',
    email: 'xyz01@gmail.com',
    pwd: 'vivek1234'
  }
];
const siteUrl={ site:'https://mashroostore.com/'};

const loginData={
    fN: 'Vivek',
    lN: 'Pandey',
    email: 'xyz01@gmail.com',
    pwd: 'vivek1234'
}

module.exports = {registrationData,siteUrl,loginData};
