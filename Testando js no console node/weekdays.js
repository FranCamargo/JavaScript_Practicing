var now = new Date()
var weekday = now.getDay()

switch (weekday) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3: 
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5: 
        console.log("Thank God it's Friday")
        break
    case 6: 
        console.log('Saturday')
        break
  
    default:
        console.log('Invalid answer, try again')

}

