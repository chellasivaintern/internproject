const users = [
  {
    id: 1,
    name: "Arun",
    age: 22,
    email: "arun@gmail.com",
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
    },
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true,
  },
  {
    id: 2,
    name: "Priya",
    age: 25,
    email: "priya@gmail.com",
    address: {
      city: "Madurai",
      state: "Tamil Nadu",
    },
    skills: ["Python", "Django", "SQL"],
    isActive: true,
  },
  {
    id: 3,
    name: "Karthik",
    age: 28,
    email: "karthik@gmail.com",
    address: {
      city: "Bangalore",
      state: "Karnataka",
    },
    skills: ["Java", "Spring Boot"],
    isActive: false,
  },
  {
    id: 4,
    name: "Divya",
    age: 21,
    email: "divya@gmail.com",
    address: {
      city: "Coimbatore",
      state: "Tamil Nadu",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true,
  },
  {
    id: 5,
    name: "Rahul",
    age: 30,
    email: "rahul@gmail.com",
    address: {
      city: "Hyderabad",
      state: "Telangana",
    },
    skills: ["React", "Node.js", "MongoDB"],
    isActive: false,
  },
  {
    id: 6,
    name: "Meena",
    age: 24,
    email: "meena@gmail.com",
    address: {
      city: "Salem",
      state: "Tamil Nadu",
    },
    skills: ["Vue", "JavaScript", "CSS"],
    isActive: true,
  },
  {
    id: 7,
    name: "Vijay",
    age: 27,
    email: "vijay@gmail.com",
    address: {
      city: "Trichy",
      state: "Tamil Nadu",
    },
    skills: ["Node.js", "Express", "PostgreSQL"],
    isActive: true,
  },
  {
    id: 8,
    name: "Sneha",
    age: 23,
    email: "sneha@gmail.com",
    address: {
      city: "Bangalore",
      state: "Karnataka",
    },
    skills: ["Python", "Machine Learning", "TensorFlow"],
    isActive: false,
  },
  {
    id: 9,
    name: "Suresh",
    age: 32,
    email: "suresh@gmail.com",
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
    },
    skills: ["Java", "SQL", "AWS"],
    isActive: true,
  },
  {
    id: 10,
    name: "Anitha",
    age: 26,
    email: "anitha@gmail.com",
    address: {
      city: "Madurai",
      state: "Tamil Nadu",
    },
    skills: ["React", "TypeScript", "Next.js"],
    isActive: true,
  },
];


const products = [
  {
    id: 101,
    name: "Laptop",
    category: "Electronics",
    price: 65000,
    stock: 12,
    brand: "Dell",
    rating: 4.5,
  },
  {
    id: 102,
    name: "Smartphone",
    category: "Electronics",
    price: 30000,
    stock: 25,
    brand: "Samsung",
    rating: 4.3,
  },
  {
    id: 103,
    name: "Headphones",
    category: "Accessories",
    price: 3500,
    stock: 40,
    brand: "Sony",
    rating: 4.6,
  },
  {
    id: 104,
    name: "Keyboard",
    category: "Accessories",
    price: 2500,
    stock: 30,
    brand: "Logitech",
    rating: 4.2,
  },
  {
    id: 105,
    name: "Monitor",
    category: "Electronics",
    price: 18000,
    stock: 8,
    brand: "LG",
    rating: 4.4,
  },
  {
    id: 106,
    name: "Mouse",
    category: "Accessories",
    price: 1500,
    stock: 50,
    brand: "HP",
    rating: 4.1,
  },
  {
    id: 107,
    name: "Tablet",
    category: "Electronics",
    price: 22000,
    stock: 15,
    brand: "Lenovo",
    rating: 4.0,
  },
  {
    id: 108,
    name: "Webcam",
    category: "Accessories",
    price: 4500,
    stock: 20,
    brand: "Logitech",
    rating: 4.5,
  },
  {
    id: 109,
    name: "Smartwatch",
    category: "Wearables",
    price: 8000,
    stock: 18,
    brand: "Apple",
    rating: 4.7,
  },
  {
    id: 110,
    name: "Gaming Chair",
    category: "Furniture",
    price: 15000,
    stock: 5,
    brand: "Green Soul",
    rating: 4.6,
  },
];

const {name,age} = users[0];

console.log(name, age);


const usersrec = users.find(usersrec => usersrec.id == 7);
const { email ,address : {state,city}} = usersrec;
console.log(email ,state,city);


const { skills : [skill1,skill2] } = users[0];
console.log(skill1,skill2);


const [ skill11,skill12 ] = users[1].skills;
console.log(skill11,skill12);

const cityn = users[0].address?.city;
console.log(cityn);

//to get all users city

const citynall = users.filter(users => users.address?.city)  //it returns all data which user city is not empty
                .map(users => users.address.city); //it returns only city

console.log(citynall);

const ageac = users.reduce((sum,user) => sum + user.age , 0);
console.log(ageac);

//active users 
const actusers = users.filter(user => user.isActive === true)
                .map(user => user.name);
                console.log(actusers);

//Find all products:

// category = "Electronics"
// price greater than 20000
// rating greater than or equal to 4.3

// Use method chaining.

const productfil = products.filter(product => product.category == "Electronics" && product.price > 20000 && product.rating >= 4.3);
//chaining method
const productfil1 = products.filter(product => product.category == "Electronics")
.filter(product => product.price > 20000)
.filter(product => product.rating >= 4.3);
console.log(productfil1);

// Q7 — Destructuring + Map
const prd = products.map(({name,price}) => ({name,price}));
console.log(prd);

// Q8 — Find + Optional Chaining
const prdbyId = products.find(product => product.id == 105);
console.log(prdbyId?.brand);
console.log(prdbyId?.rating);

//Q9Calculate the total inventory value.

const totValue = products.reduce((list,product) =>
  {
    list.push({
      name : product.name,
      itemVal : product.price * product.stock
    })
    return list;
  } ,[]);
console.log(totValue);

// Q10 — Advanced Chaining

const advPrd = products.filter(product => product.stock > 0)
                .sort((a,b) => a.price-b.price)
                .slice(0,3)
                .map(({name,price,stock}) => ({ name, price,stock}) );
      console.log(advPrd);


