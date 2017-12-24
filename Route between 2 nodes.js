/* Given a directed graph, design an algorithm to find out whether there is a route between two nodes*/


function tracePath(hasPath, start, end){
    var current = hasPath[end];
    var result = [];
    while(current !== null){
       result.push(current);
       current = hasPath[current]
    }
    return result.reverse();
}

function pathExists(graph, start, end){
    if(graph === null || start === null || end === null)
       return false;
    var hasPath = {};
    hasPath[start] = null;
    var queue = new Queue();
    start.visited = true;
    queue.add(start);
    while(queue.size > 0){
        var current = queue.dequeue();
        if(current === end)
           tracePath(hasPath, start, end);
        current.forEach(function(neighbour){
           if(neighbour.visited === false){
              hasPath[neighbour] = current;
              queue.enqueue(neighbour);
           }
        });
    }
}