/*---------- DATA ----------*/
class Data {
  constructor() {
    this.maxThrillRides = {
      1: { 4: 3, 5: 11, 10: 4, 13: 11 },
      2: { 5: 12, 6: 6, 13: 15, 14: 14 },
      3: { 4: 3, 5: 10 },
      4: { 1: 3, 3: 3 },
      5: { 1: 11, 2: 12, 3: 10, 11: 5, 13: 6 },
      6: { 2: 6, 14: 10 },
      7: { 12: 1, 14: 3 },
      8: { 14: 6, 15: 4 },
      9: { 10: 6, 13: 16 },
      10: { 1: 4, 9: 6 },
      11: { 5: 5, 12: 3, 14: 1 },
      12: { 7: 1, 11: 3 },
      13: { 1: 11, 2: 15, 5: 6, 9: 16 },
      14: { 2: 14, 6: 10, 7: 3, 8: 6, 11: 1 },
      15: { 8: 4 },
    };

    this.maxThrillRidesUI = {
      1: {
        name: "Batman: The Ride",
        color:
          "linear-gradient(90deg, #F3B103 0%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      2: {
        name: "Bizzaro",
        color:
          "linear-gradient(90deg, #56007F 0%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      3: {
        name: "Cyborg: Cyber Spin",
        color:
          "linear-gradient(90deg, #B80029 0%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      4: {
        name: "Wonder Woman: Lasso Of Truth",
        color:
          "linear-gradient(90deg, #FEED95 0%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      5: {
        name: "Dare Devil Dive",
        color:
          "linear-gradient(90deg, #D4662B 0%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      6: {
        name: "El Toro",
        color:
          "linear-gradient(90deg, #F75210 0%, rgba(245, 103, 47, 0.864583) 30.23%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      7: {
        name: "Green Lantern",
        color:
          "linear-gradient(90deg, #0F7B47 0%, rgba(32, 131, 83, 0.927083) 15.88%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      8: {
        name: "Kingda Ka",
        color:
          "linear-gradient(90deg, #FEE346 0%, rgba(242, 221, 96, 0.796875) 43.04%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      9: {
        name: "Jersey Devil Coaster",
        color:
          "linear-gradient(90deg, #C81F24 0%, rgba(214, 214, 214, 0) 98.95%)",
      },
      10: {
        name: "Nitro",
        color:
          "linear-gradient(90deg, #0C4768 0%, rgba(81, 120, 143, 0.682292) 39.17%, rgba(228, 227, 227, 0) 98.95%)",
      },
      11: {
        name: "Slingshot",
        color:
          "linear-gradient(90deg, #204B80 0%, rgba(56, 94, 141, 0.885599) 23.29%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      12: {
        name: "Superman: Ultimate Flight",
        color:
          "linear-gradient(90deg, #F50622 0%, rgba(243, 40, 64, 0.854167) 19.98%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      13: {
        name: "The Joker",
        color:
          "linear-gradient(90deg, #1EB25A 0%, rgba(45, 182, 101, 0.927083) 20.49%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      14: {
        name: "Twister",
        color:
          "linear-gradient(90deg, #B78138 0%, rgba(187, 137, 70, 0.921875) 17.93%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
      15: {
        name: "Zumanjaro: Drop of Doom",
        color:
          "linear-gradient(90deg, #F17922 0%, rgba(241, 126, 44, 0.953125) 15.37%, rgba(234, 234, 234, 0.0364583) 94.78%)",
      },
    };
  }

  getRideNameColor(rideNum) {
    return this.maxThrillRidesUI[rideNum];
  }

  getRideHTML(name, curr) {
    return `<div class="ride" id="ride">
    <div class="ride-name ride-${curr}" id="rideName">
      <h3>${name}</h3>
    </div>
    <div class="ride-img" id="rideImg">
      <img src="./assets/ride_logo_${curr}.jpg" alt="" />
    </div>
  </div>`;
  }

  getArrowHTML() {
    return `<div class="arrow" id="arrow">
    <i class="ion-ios-arrow-thin-down"></i>
  </div>`;
  }
}

/*---------- GRAPH CLASS AND ITS ALGORITHMS ----------*/
class Graph {
  constructor(graph) {
    this.graph = graph;
  }

  shortestDistanceNode(distances, visted) {
    let shortest = null;

    for (let node in distances) {
      let currIsShortest =
        shortest === null || distances[node] < distances[shortest];
      if (currIsShortest && !visted.includes(node)) {
        shortest = node;
      }
    }

    return shortest;
  }

  dijkstraShortestPath(startNode, endNode) {
    let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, this.graph[startNode]);

    let parents = { endNode: null };
    for (let child in this.graph[startNode]) {
      parents[child] = startNode;
    }

    let visted = [];

    let node = this.shortestDistanceNode(distances, visted);

    while (node) {
      let distance = distances[node];
      let children = this.graph[node];

      for (let child in children) {
        if (String(child) === String(startNode)) {
          continue;
        } else {
          let newDistance = distance + children[child];
          if (!distances[child] || distances[child] > newDistance) {
            distances[child] = newDistance;
            parents[child] = node;
          }
        }
      }

      visted.push(node);
      node = this.shortestDistanceNode(distances, visted);
    }

    let shortestPath = [endNode];
    let parent = parents[endNode];

    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }

    shortestPath.reverse();

    return shortestPath;
  }
}

/*---------- UI CONTROLLER ----------*/
class UICtrl {
  showDijkstraPath(data, results) {
    for (let i = 0; i < results.length; i++) {
      let ride = data.getRideNameColor(results[i]);
      let rideList = document.getElementById("rideList");

      let rideHTML = data.getRideHTML(ride.name, results[i]);
      rideList.insertAdjacentHTML("beforeend", rideHTML);

      document.querySelector(".ride-" + results[i]).style.background =
        ride.color;

      if (results[i] == results[results.length - 1]) {
        continue;
      }
      let arrowHtml = data.getArrowHTML();
      rideList.insertAdjacentHTML("beforeend", arrowHtml);
    }
  }
}

/*---------- DRIVER CODE ----------*/
let app = (function () {
  /*-- HOW TO MODAL --*/
  let modal = document.getElementById("howToModal");
  let btn = document.getElementById("howToBtn");
  let closeBtn = document.getElementById("closeBtn");

  btn.onclick = () => (modal.style.display = "block");
  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  /*-- GRAPH ALGOS --*/
  let uiCtrl = new UICtrl();
  let data = new Data();
  let sixFlagsMap = new Graph(data.maxThrillRides);

  document.getElementById("searchBtn").addEventListener("click", () => {
    let pathType = document.getElementById("pathType").value;
    if (pathType == "a-to-b") {
      let rideNums = document.getElementById("inputField").value;
      rideNums = rideNums.split(",").map(function (item) {
        return item.trim();
      });

      let path = sixFlagsMap.dijkstraShortestPath(rideNums[0], rideNums[1]);

      uiCtrl.showDijkstraPath(data, path);
    } else if (pathType == "from-a") {
      console.log("FROM A");
    }
  });
})();
