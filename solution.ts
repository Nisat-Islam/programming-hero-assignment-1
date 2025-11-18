const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else return !value;
};

const getLength = (value: string | any[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type itemsArray = {
  title: string;
  rating: number;
}[];
const filterByRating = (items: itemsArray): itemsArray => {
  return [...items].filter((item) => item.rating >= 4);
};

type usersType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];
const filterActiveUsers = (usersList: usersType): usersType => {
  return [...usersList].filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (bookObjs: Book): void => {
  console.log(
    `Title: ${bookObjs.title}, Author: ${bookObjs.author}, Published: ${
      bookObjs.publishedYear
    }, Available: ${bookObjs.isAvailable ? 'Yes' : 'No'}`
  );
};

type arrayType = string[] | number[];
const getUniqueValues = (arr1: arrayType, arr2: arrayType): arrayType => {
  let uniqArray: arrayType = [];
  let combinedArray = [...arr1, ...arr2];
  for (let i = 0; i < combinedArray.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqArray.length; j++) {
      if (combinedArray[i] === uniqArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqArray[uniqArray.length] = combinedArray[i];
    }
  }
  return uniqArray;
};

type productsType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];
const calculateTotalPrice = (products: productsType): number => {
  return products
    .map((product) => {
      const base = product.price * product.quantity;
      if (product.discount !== undefined) {
        return base - base * (product.discount / 100);
      }
      return base;
    })
    .reduce((sum, value) => sum + value, 0);
};
