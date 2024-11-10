import Array "mo:base/Array";
import Text "mo:base/Text";
import Int "mo:base/Int";

actor {
  type User = {
    id: Int;
    name: Text;
    email: Text;
    password: Text;
  };

  let dummy: User = {
    id = 0;
    name = "0";
    email = "0";
    password = "0";
  };

  

  stable var userList = [dummy];
  stable var userId = 0;
  stable var countId = [0];
  // stable var newUser = [];

  public func registerUser(name: Text, email: Text , password: Text) : async Text {
    userId := userId + 1;
    var newUser : User = { id = userId ; name = name; email = email; password = password };
    userList := Array.append<User>(userList, [newUser]);
    // Array.push<Int>(countId, userId);
    countId := Array.append<Nat>(countId, [userId]);
    return "User registered successfully!";
  };
  public query func getUserById(id: Nat) : async ?User {
  // ใช้ฟังก์ชัน Array.find เพื่อตรวจสอบข้อมูลที่ตรงกับ id
    return Array.find<User>(userList, func(user) { user.id == id });
  };

  public func reset() : async Text {
    userList := [dummy];
    userId := 0;
    return "reset success";
  };

  
  public query func getUsers() : async [User] {
    return Array.filter<User>(userList, func(user) { user.id >= 1 });
  };

  
};