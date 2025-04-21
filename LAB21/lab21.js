const carLit = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  }

function CarFuncConstr(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
  }
  
  const myCar = new CarFuncConstr("Honda", "Civic", 2022)
  
  console.log(carLit)
  console.log(myCar)
