// DB se connect karo - "school" database use karo
use("school");

// Sirf naam, semester aur year fields dikhao (projection use karna)
db.students.find({}, { name: 1, semester: 1, year: 1, _id: 0 });

// Total kitne students hain count karo
db.students.countDocuments({});

// Ek specific student ka semester update karo ID ke through (pehle wala - ERROR FIX: empty update tha)
// $set operator zaroor chahiye, bina iske "document requires update operators" error aata hai
db.students.updateOne(
  { _id: ObjectId("68d362a59d8af1321a808472") },
  { $set: { semester: 7 } }
);

// Saare students dekho (update ke baad)
db.students.find({});

// Phir se ek aur update - semester 7 set karo
db.students.updateOne(
  { _id: ObjectId("68d362a59d8af1321a808472") },
  { $set: { semester: 7 } }
);

// Saare students phir se dekho
db.students.find({});

// Aggregation pipeline - average semester nikalo group ke saath
db.students.aggregate([
  {
    $group: {
      _id: null,
      avgSemester: { $avg: "$semester" },
      totalStudents: { $sum: 1 }
    }
  }
]);

// Students ko age ke hisaab se ascending order mein sort karo
db.students.find().sort({ age: 1 });


db.students.find().limit(4);

db.students.find().skip(1).limit(1);

// Woh students dhundo jinका semester 3 ho YA course btech ho,
// unhe marks ke hisaab se sort karo (ascending),
// pehle 2 results skip karo, aur sirf 2 results lo
db.students.find({
  $or: [
    { semester: 3 },
    { course: "btech" }
  ]
}).sort({ marks: 1 }).skip(2).limit(2);

