let passengerFields_01 = `<div class="pass" style="display: flex; gap: 0.25rem;">
<div class="form1">
  <form action="" id="pass`;

let passengerFields_02 = `">
    <label for="">Name</label>
    <input type="text" placeholder="Passenger
    `;
let passengerFields_03 = `" id="name`; //Add i
let passengerFields_04 = `">
  </form>
</div>
<div class="form2">
  <label for="">Age</label>
  <input type="number" min="0" placeholder="Enter the age" id="age`; //Add i
let passengerFields_05 = `">
</div>
<div class="form3">
  <label for="gender">Gender</label>
  <select name="gender" id="gender`; //Add i
let passengerFields_06 = `">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Prefer not to say</option>
  </select>
</div>
</div>`;

let passengerArr = [];

let passengers = {
    name: "",
    age: "",
    gender: "",
};
