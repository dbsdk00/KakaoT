// 아래는 향후 mongoDB로 바꿀것임
const Store = [
    {
      name: '유재석',
      role: 'user',
      email: 'yujesuk@gmail.com',
      password: '1234',
      availablity: 0,
    },
    {
      name: '강호동',
      role: 'driver',
      email: 'hodong@gmail.com',
      password: '5678',
      availablity: 1,
      position: {
        latitude: 17.38,
        longitude: 78.48,
      },
    },
  ];
  
  export const User = {
    find: async (params) => {
      if (!params) return Store;
    },
    create: async (user) => {
      Store.push(user);
      return user;
    },
    findOne: async (condition) => {
      const keys = Object.keys(condition);
      const found = Store.find((u) => keys.every((k) => condition[k]===u[k]));
      return found || {};
    },
    available: async (email, {latitude, longitude}) => {
      const driver = Store.find((s) => s.email === email);
      console.log(email);
      console.log(driver);
      driver.availablity = 1;
      driver.position = {
        latitude,
        longitude
      }
      return driver;
    },
    unavailable: async(email)=> {
      const driver = Store.find((s) => s.email === email);
      driver.availablity = 0;
      return driver;
    },
    getDriver: async({latitude, longitude}) => {
      // 첫번쨰 조건: 손님을 태울 준비가 되고, 운전자여야함
      const drivers = Store.filter(
        (s) => s.availablity == 1 && s.role == "driver"
      )
      return drivers;
      // 두번쨰 조건: 나랑 가장 가까운 운전자를 찾아야함
      // 요기에알고리즘
    }
  };
  