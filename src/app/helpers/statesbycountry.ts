export function StatesByCountry(country) {
    let statesArr:Array<any>;

    console.log(country);
    if (country == "India") {
      //this.statesArr = [
      //{"WB":"WestBengal"},
      //{"TN":"Tamilnadu"}
      // ];

      statesArr = ["WestBengal", "Tamilnadu"];
    } else if (country == "Australia") {
      //this.statesArr = [
      // {"VIC":"Victoria"},
      // {"NSW":"New South Wales"}
      //];
      statesArr = ["Victoria", "New South Wales"];
    } else {
      //this.statesArr = [{"default":"Select a country"}];
      statesArr = ["Select a country"];
    }
    return statesArr;
  }