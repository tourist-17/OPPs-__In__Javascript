const obj1 = {
  name: "Saksham",
  display: function () {
    console.log(this, "to calling site");
  },
};

const obj2 = {
  name: "Saksham",
  display: () => {
    console.log(this, "to calling site");
  },
};

obj1.display();
obj2.display();
