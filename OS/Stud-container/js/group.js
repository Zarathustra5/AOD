class Group{
  constructor(name){
    this._name = name;
    this._studs = [];
  }
  set addStud(newStud){
    this._studs.push(newStud);
  }
  set delStud(delStud){
  }
  getStud(num){
    return this._studs[num];
  }
}
