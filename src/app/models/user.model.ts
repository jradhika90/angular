export class User {
 constructor(
  public id: Number,
  public name : String,
  public email : String,
  public password: String,
  public state : String,
  public country : String,
  public postcode : Number,
  public timePreference : String, 
  public tnc : Boolean,
  public altEmails : Array<String>){}
}