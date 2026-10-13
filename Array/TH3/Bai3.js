const original = [
  { id: 1, profile: { city: "Di An" } },
  { id: 2, profile: { city: "Thu Duc" } }
];

const copied = [...original];

copied[0].profile.city = "Binh Duong";
copied[1] = { id: 3, profile: { city: "HCMC" } };
console.log(original)
console.log(copied)