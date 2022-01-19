const createStore = () => {
  let count = 0;
  let image = 0;
  const subscribers = [];

  let data = [];

  let data1 = [];

  let user = [{'name':'ayush'}];

  return {
    get count() {
      return count;
    },
    get Chart1Data() {
      return data;
    },
    get Chart2Data() {      
      return data1;
    },
    setChart2Data(){
      data1 = [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 5 },
        { x: 4, y: 2 },
        { x: 5, y: 21 }];
        subscribers.forEach(fn => fn());
    },
    setChart1Data(){
      data = [
        { argument:'Monday', value:10 },
        { argument:'Tuesday', value:40 },
        { argument:'Wednesday', value:10 },
        { argument:'Thursday', value:20 },
        { argument:'Friday', value:20 },
      ];
        subscribers.forEach(fn => fn());
    },
    incrementCount() {
      count += 1;
      subscribers.forEach(fn => fn());
    },
    get users(){
      return user;
    },
    addUser(userData){
      user = [...user,userData];
      subscribers.forEach(fn => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    }
  }
};

const store = createStore();

export default store;
