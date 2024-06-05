// 아래는 향후 mongoDB로 바꿀것임
const Store = [
    {
      name: '유재석',
      role: 'user',
      email: 'yujesuk@gmail.com',
      password: '1234',
    },
    {
      name: '강호동',
      role: 'user',
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
      driver.availablity = 1;
      driver.position.latitude = latitude;
      driver.position.longitude = longitude;
      return driver;
    }
  };
  