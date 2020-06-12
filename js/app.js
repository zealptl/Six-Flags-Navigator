/*---------- DATA ----------*/
class Data {
  constructor() {
    // Adjecency list for max thrill rides
    this.maxThrillRides = {
      1: { 4: 4.538, 5: 10.816, 10: 5.782, 13: 12.636 },
      2: { 5: 17.231, 6: 9.777, 13: 21.549, 14: 19.106 },
      3: { 4: 4.854, 5: 9.941 },
      4: { 1: 4.538, 3: 4.854 },
      5: { 1: 10.816, 2: 17.231, 3: 9.941, 11: 5.545, 13: 5.672 },
      6: { 2: 9.777, 14: 16.179 },
      7: { 12: 0.977, 14: 4.106 },
      8: { 14: 9.203, 15: 6.819 },
      9: { 10: 3.98, 13: 15.993 },
      10: { 1: 5.782, 9: 3.98 },
      11: { 5: 5.545, 12: 2.956, 14: 2.025 },
      12: { 7: 0.977, 11: 2.956 },
      13: { 1: 12.636, 2: 21.549, 5: 5.672, 9: 15.993 },
      14: { 2: 19.106, 6: 16.179, 7: 4.106, 8: 9.203, 11: 2.025 },
      15: { 8: 6.819 },
    };

    // name and gradient color for each of the max thrill rides
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

  // Function to retrieve name and color from maxThrillUI object
  getRideNameColor(rideNum) {
    return this.maxThrillRidesUI[rideNum];
  }

  // Function to get HTML with appropriate name and class
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

  // Function to get HTML for next ride arrow
  getArrowHTML() {
    return `<div class="arrow" id="arrow">
    <i class="ion-ios-arrow-thin-down"></i>
  </div>`;
  }
}

/*---------- GRAPH CLASS AND ITS ALGORITHMS ----------*/
class Graph {
  // Sets the adjacency list as the graph
  constructor(graph) {
    this.graph = graph;
  }

  // Helper method to get the shortest distance for dijkstra's algorithm
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

  // Function to find the shortest path between two nodes using Dijkstra's algorithm.
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
  // Function to show UI objects depending up the result of a graph algorithm
  showPath(data, results) {
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
  // Controls the pop up how to modal
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

  // Controls the graph algorithms and shows appropriate UI elements
  let uiCtrl = new UICtrl();
  let data = new Data();
  let sixFlagsMap = new Graph(data.maxThrillRides);

  document.getElementById("searchBtn").addEventListener("click", () => {
    let pathType = document.getElementById("pathType").value;

    if (pathType == "a-to-b") {
      showDijkstraPath();
    } else if (pathType == "from-a") {
      console.log("FROM A");
    }

    // Function to show the appropriate UI elements for the result of dijkstra's shortest path algorithm
    function showDijkstraPath() {
      let rideNums = document.getElementById("inputField").value;
      rideNums = rideNums.split(",").map(function (item) {
        return item.trim();
      });

      let path = sixFlagsMap.dijkstraShortestPath(rideNums[0], rideNums[1]);

      uiCtrl.showPath(data, path);
    }
  });
})();
