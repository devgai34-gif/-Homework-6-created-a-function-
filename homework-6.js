console.log("homework-6.js подключен");

// Задание 3: Объект Человек 
const person = {
firstName: "Devid",
  lastName: "Maer",
  age: 30,
  city: "Стамбул",
  job: "Программист"
};

// Задание 4: Объект Автомобиль 
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  color: "Белый",
  transmission: "Автомат"
};
car.owner = person; // Добавляем владельца

// Задание 5: Функция проверки скорости 
function checkMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = 250;
  }
};
checkMaxSpeed(car);

// Задание 6: Функция-получатель значения 
function getPropertyValue(obj, propertyName) {
  console.log("Значение свойства " + propertyName + ":", obj[propertyName]);
};
getPropertyValue(car, "brand");

// Задание 7: Массив продуктов 
const products = ["Яблоки", "Молоко", "Хлеб", "Шоколад", "Бананы"];

// Задание 8: Массив запчастей
const spareParts = [
  {
    name: "Мотор",
    year: 2010,
    color: "Серебристый"
  },
  {
    name: "Колесо",
    year: 2022,
    color: "Черный"
  },
  {
    name: "Фара",
    year: 1995,
    color: "Прозрачный"
  }
];

// Добавление нового элемента
spareParts.push({
  name: "Руль",
  year: 2015,
  color: "Коричневый"
});

for (let { name, year, color } of spareParts) {
  console.log(`Объект: ${name}, Год: ${year}`);
};

// Задание 9: Объединение массивов (Нива)
const nivaParts = [
  { name: "Дверь", year: 1980, color: "Зеленый" },
  { name: "Капот", year: 2005, color: "Белый" }
];
const allParts = [...spareParts, ...nivaParts];

// Раскрываем объединенный массив всех запчастей
console.log(" Полный список всех запчастей (включая Ниву)");

for (let { name, year, color } of allParts) {
  console.log(`Деталь: ${name}, Цвет: ${color}, Год выпуска: ${year}`);
};

// Задание 10: Метод map (поиск редкостей) 
function markRareParts(partsArray) {
  return partsArray.map(part => {
    return {
      ...part,
      isRare: part.year < 2000 // Если раньше 2000 года — редкая
    };
  });
};

const updatedParts = markRareParts(allParts);

// Финальный вывод в консоль для проверки
console.log("Обновленный список запчастей:", updatedParts);