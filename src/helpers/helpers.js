export function myFilter(filters, hotel) {
    if(!filters) {
      return true;
    }

    let counter = 0;
   
    for (let i = 0; i < hotel.Facilities.length; i++) {
      if (filters.includes(hotel.Facilities[i])) {
        counter++;
      }
    }
  
    if (counter === filters.length) {
      return true;
    } else {
      return false;
    }
  }