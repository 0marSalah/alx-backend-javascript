import Building from "./5-building";

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }
  get floors() {
    return this._floors;
  }
  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors.';
  }
}


const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
