class Spaceship {
  constructor(name, crew) {
    this.name = name
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.crew = crew

    if (crew.length > 0) {
      this.docked = false
    } else {
      this.docked = true
    }
    this.assignCrew()
  }



  assignCrew(){
    this.crew.forEach(crewMember => crewMember.currentShip = this)
  }
}
