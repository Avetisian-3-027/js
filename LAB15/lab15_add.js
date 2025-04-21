function createIdGenerator() {
    let current_id = 0
  
    return function generateId() {
      current_id++
      return current_id
    }
  }
  
  const getId = createIdGenerator()

  console.log(getId())
  console.log(getId())
  console.log(getId())
  