export default class Point {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.db = firebase.firestore();
  }

  draw() {
   
  }

  store(col, obj) {
    this.db.collection(col).add(obj)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }
};
