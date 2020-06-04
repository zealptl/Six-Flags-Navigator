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

    let results = {
      distance: distances[endNode],
      path: shortestPath,
    };

    return results;
  }
}

/*---------- DATA ----------*/
let maxThrillRides = {
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

/*---------- DRIVER CODE ----------*/

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

let sixFlagsMap = new Graph(maxThrillRides);
console.log(sixFlagsMap.dijkstraShortestPath(15, 9));
