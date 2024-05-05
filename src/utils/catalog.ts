import { Course } from "./types/Course"

export function shuffleCatalog(array: Course[]): Course[] {
  let arrCopy = array.slice()
  let currentIndex = arrCopy.length

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;
    [arrCopy[currentIndex], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[currentIndex]]
  }

  return arrCopy
}