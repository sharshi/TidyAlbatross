export default class Point {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.db = firebase.firestore();
    this.listen();
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

  listen() {
    
    this.db
      .collection("score")
      .orderBy("score", "desc")
      .limit(10)
      .onSnapshot(function(snapshot) {
        const hs = document.getElementById("high-scores");
        const h3 = document.createElement("h3");
        h3.innerHTML = "High Scores";
        hs.appendChild(h3);

        snapshot.docs.forEach(doc => {
          const { name, score } = doc.data();
          const articleNode = document.createElement("article");
          const nameNode = document.createElement("p");
          nameNode.innerHTML = name;
          const scoreNode = document.createElement("p");
          scoreNode.innerHTML = score;
          articleNode.appendChild(nameNode);
          articleNode.appendChild(scoreNode);
          hs.appendChild(articleNode);
          return { name, score }
        }) 
      });
  }
};
