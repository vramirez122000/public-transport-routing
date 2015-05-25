/*
 * dijkstra.js
 *
 * Dijkstra's single source shortest path algorithm in JavaScript.
 *
 * Cameron McCormack <cam (at) mcc.id.au>
 *
 * Permission is hereby granted to use, copy, modify and distribute this
 * code for any purpose, without fee.
 *
 * Initial version: October 21, 2004
 */

function shortestPath(edges, numVertices, startVertex) {
    var done = new Array(numVertices);
    done[startVertex] = true;
    var pathLengths = new Array(numVertices);
    var predecessors = new Array(numVertices);
    for (var i = 0; i < numVertices; i++) {
        pathLengths[i] = grafo(startVertex,i,0);
        if (grafo(startVertex,i,0) != Infinity) {
            predecessors[i] = startVertex;
        }
    }
    pathLengths[startVertex] = 0;
    for (var i = 0; i < numVertices - 1; i++) {
        var closest = -1;
        var closestDistance = Infinity;
        for (var j = 0; j < numVertices; j++) {
            if (!done[j] && pathLengths[j] < closestDistance) {
                closestDistance = pathLengths[j];
                closest = j;
            }
        }
        done[closest] = true;
        for (var j = 0; j < numVertices; j++) {
            if (!done[j]) {
                var possiblyCloserDistance = pathLengths[closest] + grafo(closest,j,0);
                if (possiblyCloserDistance < pathLengths[j]) {
                    pathLengths[j] = possiblyCloserDistance;
                    predecessors[j] = closest;
                }
            }
        }
    }
    return { "startVertex": startVertex,
        "pathLengths": pathLengths,
        "predecessors": predecessors };
}

function constructPath(shortestPathInfo, startVertex, endVertex) {
    var path = [];
    while (endVertex != shortestPathInfo.startVertex) {
        path.unshift(endVertex);
        endVertex = shortestPathInfo.predecessors[endVertex];
    }
    path.unshift(startVertex);
    return path;
}

function grafo(ori, desti, par) {
    switch(ori)
    {
        case 1:
            switch(desti)
            {
                case 2:
                    ama = [42, "M3,21,53"];
                    break;
                case 3:
                    ama = [70, "T5,T8,T9"];
                    break;
                case 19:
                    ama = [245, "ME"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            return ama[par];
            break;
        case 2:
            switch(desti)
            {
                case 1:
                    ama = [42, "M3,21,53"];
                    break;
                case 4:
                    ama = [40, "M3,21,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 3:
            switch(desti)
            {
                case 1:
                    ama = [70, "T5,T8,T9"];
                    break;
                case 5:
                    ama = [48, "T5,T8,T9"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 4:
            switch(desti)
            {
                case 2:
                    ama = [50, "M3,21,53"];
                    break;
                case 5:
                    ama = [30, "M3,21,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 5:
            switch(desti)
            {
                case 3:
                    ama = [50, "T5,T8,T9"];
                    break;
                case 4:
                    ama = [30, "M3,21,53"];
                    break;
                case 6:
                    ama = [18, "M3,T5,T9,T8"];
                    break;
                case 13:
                    ama = [15, "21,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 6:
            switch(desti)
            {
                case 5:
                    ama = [18, "M3,T5,T8,T9"];
                    break;
                case 7:
                    ama = [18, "T9,10"];
                    break;
                case 8:
                    ama = [35, "21,53"];
                    break;
                case 10:
                    ama = [58, "M3,T5,T8"];
                    break;
                case 13:
                    ama = [15, "10"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 7:
            switch(desti)
            {
                case 6:
                    ama = [18, "10,T8,T9"];
                    break;
                case 8:
                    ama = [32, "21,53"];
                    break;
                case 9:
                    ama = [30, "T9,10"];
                    break;
                case 12:
                    ama = [54, "10"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 8:
            switch(desti)
            {
                case 6:
                    ama = [35, "21,53"];
                    break;
                case 7:
                    ama = [32, "21,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 9:
            switch(desti)
            {
                case 7:
                    ama = [30, "T8,T9"];
                    break;
                case 11:
                    ama = [27, "T9,10"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 10:
            switch(desti)
            {
                case 6:
                    ama = [58, "M3,T5"];
                    break;
                case 11:
                    ama = [15, "T8,21"];
                    break;
                case 16:
                    ama = [32, "M3,M2,T5,16,21"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 11:
            switch(desti)
            {
                case 9:
                    ama = [27, "T8,T9,10"];
                    break;
                case 10:
                    ama = [15, "T8,16,21"];
                    break;
                case 12:
                    ama = [32, "T9,21"];
                    break;
                case 17:
                    ama = [40, "10"];
                    break;
                case 59:
                    ama = [105, "T8"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 12:
            switch(desti)
            {
                case 7:
                    ama = [54, "10"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 13:
            switch(desti)
            {
                case 5:
                    ama = [15, "21,53"];
                    break;
                case 6:
                    ama = [15, "10"];
                    break;
                case 14:
                    ama = [65, "10,21,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 14:
            switch(desti)
            {
                case 13:
                    ama = [65, "10,21,53"];
                    break;
                case 15:
                    ama = [10, "T5,10"];
                    break;
                case 21:
                    ama = [88, "53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 15:
            switch(desti)
            {
                case 14:
                    ama = [10, "T5,10"];
                    break;
                case 16:
                    ama = [32, "T5,21"];
                    break;
                case 23:
                    ama = [46, "T5,10"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 16:
            switch(desti)
            {
                case 10:
                    ama = [32, "M3,T5,16,21"];
                    break;
                case 15:
                    ama = [32, "T5,21"];
                    break;
                case 18:
                    ama = [24, "M3,M2,16"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 17:
            switch(desti)
            {
                case 11:
                    ama = [32, "M2,T9,16,21"];
                    break;
                case 19:
                    ama = [52, "M2,T9,21"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 18:
            switch(desti)
            {
                case 16:
                    ama = [24, "M3"];
                    break;
                case 17:
                    ama = [28, "16"];
                    break;
                case 19:
                    ama = [32, "M3"];
                    break;
                case 20:
                    ama = [52, "16"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 19:
            switch(desti)
            {
                case 17:
                    ama = [52, "M2,T9,21"];
                    break;
                case 18:
                    ama = [32, "M3"];
                    break;
                case 24:
                    ama = [32, "T9,10,11"];
                    break;
                case 25:
                    ama = [28, "TU,M1,M2,15,16,22"];
                    break;
                case 1:
                    ama = [245, "ME"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 20:
            switch(desti)
            {
                case 18:
                    ama = [52, "16"];
                    break;
                case 23:
                    ama = [35, "10,11"];
                    break;
                case 22:
                    ama = [56, "10,11,16"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 21:
            switch(desti)
            {
                case 23:
                    ama = [35, "T5"];
                    break;
                case 14:
                    ama = [88, "53"];
                    break;
                case 135:
                    ama = [28, "T5,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 22:
            switch(desti)
            {
                case 20:
                    ama = [56, "10,11,16"];
                    break;
                case 24:
                    ama = [28, "T9,10,11"];
                    break;
                case 27:
                    ama = [40, "T9,16"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 23:
            switch(desti)
            {
                case 15:
                    ama = [46, "T5,10"];
                    break;
                case 21:
                    ama = [35, "T5,10"];
                    break;
                case 20:
                    ama = [35, "10,11"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 24:
            switch(desti)
            {
                case 19:
                    ama = [32, "T9,10,11"];
                    break;
                case 22:
                    ama = [28, "T9,10,11"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 25:
            switch(desti)
            {
                case 19:
                    ama = [28, "TU,M1,M2,15,16,22"];
                    break;
                case 26:
                    ama = [48, "15,16"];
                    break;
                case 28:
                    ama = [28, "TU,M1,M2,T3,22"];
                    break;
                case 51:
                    ama = [46, "T3,22"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 26:
            switch(desti)
            {
                case 27:
                    ama = [12, "15,16"];
                    break;
                case 28:
                    ama = [42, "15,16,22"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 27:
            switch(desti)
            {
                case 22:
                    ama = [40, "T9,16"];
                    break;
                case 26:
                    ama = [12, "15,16"];
                    break;
                case 29:
                    ama = [42, "T9,15"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 28:
            switch(desti)
            {
                case 25:
                    ama = [28, "TU,M1,M2,T3,22"];
                    break;
                case 26:
                    ama = [42, "22"];
                    break;
                case 30:
                    ama = [35, "TU,M1,T3"];
                    break;
                case 48:
                    ama = [72, "M2,22"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 29:
            switch(desti)
            {
                case 27:
                    ama = [42, "T9,15"];
                    break;
                case 32:
                    ama = [38, "T9"];
                    break;
                case 99:
                    ama = [44, "15"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 30:
            switch(desti)
            {
                case 28:
                    ama = [35, "TU,M1,T3"];
                    break;
                case 31:
                    ama = [35, "TU,M1,T3,17"];
                    break;
                case 49:
                    ama = [67, "17"];
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 31:
            switch(desti)
            {
                case 30:
                    ama = [35, "TU,M1,T3,17"];
                    break;
                case 32:
                    ama = [52, "B41"];
                    break;
                case 36:
                    ama = [32, "TU,M1,T3,T7,28,40"];
                    break;
                case 90:
                    ama = [101, "28"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 32:
            switch(desti)
            {
                case 29:
                    ama = [38, "T9"];
                    break;
                case 31:
                    ama = [52, "41"];
                    break;
                case 47:
                    ama = [43, "T9,41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 33:
            switch(desti)
            {
                case 34:
                    ama = [65, "15,40"];
                    break;
                case 99:
                    ama = [52, "15"];
                    break;
                case 133:
                    ama = [55, "40,45"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 34:
            switch(desti)
            {
                case 33:
                    ama = [56, "15,40"];
                    break;
                case 35:
                    ama = [57, "15,26,40,41"];
                    break;
                case 37:
                    ama = [15, "26"];
                    break;
                case 103:
                    ama = [28, "41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 35:
            switch(desti)
            {
                case 34:
                    ama = [57, "15,26,40,41"];
                    break;
                case 37:
                    ama = [62, "T7"];
                    break;
                case 38:
                    ama = [64, "26"];
                    break;
                case 47:
                    ama = [19, "T7,15,26,40,41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 36:
            switch(desti)
            {
                case 31:
                    ama = [32, "TU,M1,T3,T7,28,40"];
                    break;
                case 38:
                    ama = [28, "TU"];
                    break;
                case 46:
                    ama = [52, "T4,29,18,31"];
                    break;
                case 47:
                    ama = [46, "M1,T3,T4,T7,18,26,28,29,31,40"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 37:
            switch(desti)
            {
                case 34:
                    ama = [15, "26"];
                    break;
                case 35:
                    ama = [62, "T7"];
                    break;
                case 44:
                    ama = [73, "26"];
                    break;
                case 103:
                    ama = [28, "T7"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 38:
            switch(desti)
            {
                case 35:
                    ama = [64, "26"];
                    break;
                case 36:
                    ama = [28, "TU"];
                    break;
                case 39:
                    ama = [67, "TU"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 39:
            switch(desti)
            {
                case 38:
                    ama = [67, "TU"];
                    break;
                case 40:
                    ama = [88, "18"];
                    break;
                case 41:
                    ama = [90, "31"];
                    break;
                case 46:
                    ama = [72, "T4,18,29,31"];
                    break;
                case 67:
                    ama = [67, "TU,T4"];
                    break;
                case 95:
                    ama = [46, "29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 40:
            switch(desti)
            {
                case 39:
                    ama = [88, "18"];
                    break;
                case 41:
                    ama = [96, "18"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 41:
            switch(desti)
            {
                case 39:
                    ama = [90, "31"];
                    break;
                case 40:
                    ama = [96, "18"];
                    break;
                case 42:
                    ama = [57, "31"];
                    break;
                case 43:
                    ama = [128, "18"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 42:
            switch(desti)
            {
                case 41:
                    ama = [57, "31"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 43:
            switch(desti)
            {
                case 41:
                    ama = [128, "18"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 44:
            switch(desti)
            {
                case 37:
                    ama = [73, "26"];
                    break;
                case 45:
                    ama = [73, "26"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 45:
            switch(desti)
            {
                case 44:
                    ama = [73, "26"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 46:
            switch(desti)
            {
                case 36:
                    ama = [52, "T4,18,29,31"];
                    break;
                case 39:
                    ama = [72, "T4,18,29,31"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 47:
            switch(desti)
            {
                case 32:
                    ama = [43, "T9,41"];
                    break;
                case 35:
                    ama = [19, "T7,15,26,40,41"];
                    break;
                case 36:
                    ama = [46, "M1,T3,T4,T7,18,26,28,29,31,40"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 48:
            switch(desti)
            {
                case 28:
                    ama = [72, "M2,22"];
                    break;
                case 49:
                    ama = [38, "17"];
                    break;
                case 50:
                    ama = [31, "T3,22"];
                    break;
                case 52:
                    ama = [31, "M2,T3,17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 49:
            switch(desti)
            {
                case 30:
                    ama = [67, "17"];
                    break;
                case 48:
                    ama = [38, "17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 50:
            switch(desti)
            {
                case 48:
                    ama = [31, "T3,22"];
                    break;
                case 51:
                    ama = [67, "T3,22"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 51:
            switch(desti)
            {
                case 25:
                    ama = [46, "T3,22"];
                    break;
                case 50:
                    ama = [67, "T3,22"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 52:
            switch(desti)
            {
                case 48:
                    ama = [31, "M2,T3,17"];
                    break;
                case 53:
                    ama = [42, "M2,T3"];
                    break;
                case 90:
                    ama = [46, "17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 53:
            switch(desti)
            {
                case 52:
                    ama = [42, "M2,T3"];
                    break;
                case 54:
                    ama = [52, "19"];
                    break;
                case 57:
                    ama = [50, "M2,T3,19"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 54:
            switch(desti)
            {
                case 53:
                    ama = [52, "19"];
                    break;
                case 55:
                    ama = [17, "17,28"];
                    break;
                case 62:
                    ama = [25, "19"];
                    break;
                case 90:
                    ama = [59, "17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 55:
            switch(desti)
            {
                case 54:
                    ama = [17, "17,28"];
                    break;
                case 56:
                    ama = [38, "17,30,28"];
                    break;
                case 57:
                    ama = [67, "30"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 56:
            switch(desti)
            {
                case 55:
                    ama = [38, "17,30,28"];
                    break;
                case 58:
                    ama = [73, "T4,28"];
                    break;
                case 61:
                    ama = [80, "T4"];
                    break;
                case 64:
                    ama = [59, "30"];
                    break;
                case 66:
                    ama = [80, "T4,17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 57:
            switch(desti)
            {
                case 53:
                    ama = [50, "M2,T3,19"];
                    break;
                case 55:
                    ama = [67, "30"];
                    break;
                case 58:
                    ama = [25, "M2,T3,19,30"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 58:
            switch(desti)
            {
                case 56:
                    ama = [73, "T4,28"];
                    break;
                case 57:
                    ama = [25, "M2,T3,19,30"];
                    break;
                case 59:
                    ama = [120, "T8"];
                    break;
                case 60:
                    ama = [25, "M2,T4,T8,28"];
                    break;
                case 61:
                    ama = [46, "28,30"];
                    break;
                case 88:
                    ama = [88, "T3"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 59:
            switch(desti)
            {
                case 11:
                    ama = [105, "T8"];
                    break;
                case 58:
                    ama = [120, "T8"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 60:
            switch(desti)
            {
                case 58:
                    ama = [25, "M2,T4,T8,28"];
                    break;
                case 61:
                    ama = [25, "T4,T8,28"];
                    break;
                case 77:
                    ama = [80, "M2"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 61:
            switch(desti)
            {
                case 56:
                    ama = [80, "T4"];
                    break;
                case 58:
                    ama = [46, "28,30"];
                    break;
                case 60:
                    ama = [25, "T4,T8,28"];
                    break;
                case 63:
                    ama = [35, "30"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 62:
            switch(desti)
            {
                case 54:
                    ama = [25, "19"];
                    break;
                case 68:
                    ama = [80, "19"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 63:
            switch(desti)
            {
                case 61:
                    ama = [35, "30"];
                    break;
                case 64:
                    ama = [59, "30"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 64:
            switch(desti)
            {
                case 63:
                    ama = [59, "30"];
                    break;
                case 65:
                    ama = [38, "TU,27,52"];
                    break;
                case 78:
                    ama = [73, "TU"];
                    break;
                case 94:
                    ama = [48, "52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 65:
            switch(desti)
            {
                case 64:
                    ama = [38, "TU,27,52"];
                    break;
                case 66:
                    ama = [52, "TU"];
                    break;
                case 70:
                    ama = [80, "27,52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 66:
            switch(desti)
            {
                case 56:
                    ama = [80, "T4,17"];
                    break;
                case 65:
                    ama = [52, "TU"];
                    break;
                case 67:
                    ama = [50, "TU,T4,17,52"];
                    break;
                case 71:
                    ama = [108, "52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 67:
            switch(desti)
            {
                case 39:
                    ama = [67, "TU,T4"];
                    break;
                case 66:
                    ama = [50, "TU,T4,17,52"];
                    break;
                case 68:
                    ama = [46, "49"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 68:
            switch(desti)
            {
                case 62:
                    ama = [67, "19"];
                    break;
                case 67:
                    ama = [46, "17,49"];
                    break;
                case 69:
                    ama = [38, "49"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;

        case 69:
            switch(desti)
            {
                case 68:
                    ama = [38, "49"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 70:
            switch(desti)
            {
                case 65:
                    ama = [80, "27,52"];
                    break;
                case 71:
                    ama = [38, "27,52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 71:
            switch(desti)
            {
                case 65:
                    ama = [108, "52"];
                    break;
                case 70:
                    ama = [38, "27,52"];
                    break;
                case 72:
                    ama = [22, "27"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 72:
            switch(desti)
            {
                case 71:
                    ama = [22, "27"];
                    break;
                case 73:
                    ama = [80, "27,29"];
                    break;
                case 96:
                    ama = [74, "29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 73:
            switch(desti)
            {
                case 72:
                    ama = [80, "27,29"];
                    break;
                case 74:
                    ama = [38, "27,29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 74:
            switch(desti)
            {
                case 73:
                    ama = [38, "27,29"];
                    break;
                case 75:
                    ama = [64, "27,29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 75:
            switch(desti)
            {
                case 74:
                    ama = [64, "27,29"];
                    break;
                case 76:
                    ama = [89, "27,29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 76:
            switch(desti)
            {
                case 75:
                    ama = [89, "27,29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 77:
            switch(desti)
            {
                case 60:
                    ama = [80, "M2"];
                    break;
                case 97:
                    ama = [105, "M2"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 78:
            switch(desti)
            {
                case 64:
                    ama = [73, "TU"];
                    break;
                case 79:
                    ama = [52, "TU"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 79:
            switch(desti)
            {
                case 78:
                    ama = [52, "TU"];
                    break;
                case 86:
                    ama = [101, "TU"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 80:
            switch(desti)
            {
                case 81:
                    ama = [84, "52"];
                    break;
                case 94:
                    ama = [84, "52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 81:
            switch(desti)
            {
                case 80:
                    ama = [84, "52"];
                    break;
                case 82:
                    ama = [60, "92"];
                    break;
                case 84:
                    ama = [125, "91"];
                    break;
                case 87:
                    ama = [72, "92"];
                    break;
                case 97:
                    ama = [60, "52,91"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 82:
            switch(desti)
            {
                case 81:
                    ama = [60, "92"];
                    break;
                case 83:
                    ama = [72, "92"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 83:
            switch(desti)
            {
                case 82:
                    ama = [72, "92"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 84:
            switch(desti)
            {
                case 81:
                    ama = [125, "91"];
                    break;
                case 85:
                    ama = [101, "91"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 85:
            switch(desti)
            {
                case 84:
                    ama = [101, "91"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 86:
            switch(desti)
            {
                case 79:
                    ama = [103, "TU"];
                    break;
                case 87:
                    ama = [38, "TU"];
                    break;
                case 97:
                    ama = [60, "M2,52"];
                    break;
                case 98:
                    ama = [52, "M2,52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 87:
            switch(desti)
            {
                case 86:
                    ama = [38, "TU"];
                    break;
                case 98:
                    ama = [25, "M2,52"];
                    break;
                default:
                    ama = [Infinity, ""];

            }
            break;
        case 88:
            switch(desti)
            {
                case 58:
                    ama = [88, "T3"];
                    break;
                case 89:
                    ama = [60, "T3"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 89:
            switch(desti)
            {
                case 88:
                    ama = [60, "T3"];
                    break;
                case 91:
                    ama = [146, "37"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 90:
            switch(desti)
            {
                case 31:
                    ama = [101, "28"];
                    break;
                case 52:
                    ama = [46, "17"];
                    break;
                case 54:
                    ama = [59, "17"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 91:
            switch(desti)
            {
                case 89:
                    ama = [146, "37"];
                    break;
                case 92:
                    ama = [115, "37"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 92:
            switch(desti)
            {
                case 91:
                    ama = [115, "37"];
                    break;
                case 93:
                    ama = [89, "37"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 93:
            switch(desti)
            {
                case 92:
                    ama = [89, "37"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 94:
            switch(desti)
            {
                case 64:
                    ama = [48, "52"];
                    break;
                case 80:
                    ama = [84, "52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 95:
            switch(desti)
            {
                case 39:
                    ama = [46, "29"];
                    break;
                case 96:
                    ama = [74, "29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 96:
            switch(desti)
            {
                case 72:
                    ama = [74, "29"];
                    break;
                case 95:
                    ama = [74, "29"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 97:
            switch(desti)
            {
                case 77:
                    ama = [105, "M2"];
                    break;
                case 86:
                    ama = [60, "M2"];
                    break;
                case 81:
                    ama = [60, "52,91"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 98:
            switch(desti)
            {
                case 86:
                    ama = [52, "M2,52"];
                    break;
                case 87:
                    ama = [25, "M2,52"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 99:
            switch(desti)
            {
                case 29:
                    ama = [44, "15"];
                    break;
                case 33:
                    ama = [52, "15"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;

        case 100 :
            switch(desti)
            {
                case 101:
                    ama = [12, "T7,48"];
                    break;
                case 102:
                    ama = [25, "T7"];
                    break;
                case 118:
                    ama = [28, "48"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 101 :
            switch(desti)
            {
                case 100:
                    ama = [12, "T7,48"];
                    break;
                case 104:
                    ama = [25, "T7"];
                    break;
                case 118:
                    ama = [27, "48"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 102 :
            switch(desti)
            {
                case 100:
                    ama = [25, "T7"];
                    break;
                case 103:
                    ama = [25, "T7"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 103 :
            switch(desti)
            {
                case 102:
                    ama = [25, "T7"];
                    break;
                case 34:
                    ama = [28, "41"];
                    break;
                case 37:
                    ama = [28, "T7"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 104 :
            switch(desti)
            {
                case 101:
                    ama = [25, "T7"];
                    break;
                case 105:
                    ama = [20, "41"];
                    break;
                case 108:
                    ama = [32, "T7"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 105 :
            switch(desti)
            {
                case 104:
                    ama = [20, "41"];
                    break;
                case 106:
                    ama = [18, "41"];
                    break;
                case 107:
                    ama = [28, "41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 106 :
            switch(desti)
            {
                case 103:
                    ama = [38, "41"];
                    break;
                case 105:
                    ama = [18, "41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 107 :
            switch(desti)
            {
                case 105:
                    ama = [28, "41"];
                    break;
                case 110:
                    ama = [28, "41"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 108 :
            switch(desti)
            {
                case 104:
                    ama = [32, "T7"];
                    break;
                case 109:
                    ama = [20, "46,48"];
                    break;
                case 110:
                    ama = [14, "T7,44,46,48"];
                    break;
                case 111:
                    ama = [18, "B7,C44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 109 :
            switch(desti)
            {
                case 108:
                    ama = [20, "46,48"];
                    break;
                case 115:
                    ama = [25, "48"];
                    break;
                case 118:
                    ama = [36, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 110 :
            switch(desti)
            {
                case 107:
                    ama = [28, "41"];
                    break;
                case 108:
                    ama = [14, "T7,44,46,48"];
                    break;
                case 128:
                    ama = [15, "T5,43,50"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 111 :
            switch(desti)
            {
                case 108:
                    ama = [18, "T6,44"];
                    break;
                case 112:
                    ama = [24, "T6,43,44"];
                    break;
                case 115:
                    ama = [32, "43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 112 :
            switch(desti)
            {
                case 111:
                    ama = [24, "T6,43,44"];
                    break;
                case 113:
                    ama = [20, "44"];
                    break;
                case 115:
                    ama = [28, "T6"];
                    break;
                case 129:
                    ama = [20, "43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 113 :
            switch(desti)
            {
                case 112:
                    ama = [20, "44"];
                    break;
                case 114:
                    ama = [20, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 114 :
            switch(desti)
            {
                case 113:
                    ama = [20, "44"];
                    break;
                case 116:
                    ama = [43, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 115 :
            switch(desti)
            {
                case 109:
                    ama = [25, "48"];
                    break;
                case 111:
                    ama = [32, "43"];
                    break;
                case 112:
                    ama = [28, "T6"];
                    break;
                case 116:
                    ama = [22, "48"];
                    break;
                case 119:
                    ama = [28, "T6,43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 116 :
            switch(desti)
            {
                case 115:
                    ama = [22, "48"];
                    break;
                case 117:
                    ama = [17, "44"];
                    break;
                case 119:
                    ama = [46, "48"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 117 :
            switch(desti)
            {
                case 116:
                    ama = [17, "44"];
                    break;
                case 139:
                    ama = [24, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 118 :
            switch(desti)
            {
                case 100:
                    ama = [28, "48"];
                    break;
                case 101:
                    ama = [27, "48"];
                    break;
                case 109:
                    ama = [36, "46"];
                    break;
                case 119:
                    ama = [20, "48"];
                    break;
                case 125:
                    ama = [24, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 119 :
            switch(desti)
            {
                case 115:
                    ama = [28, "T6,43"];
                    break;
                case 118:
                    ama = [24, "48"];
                    break;
                case 116:
                    ama = [46, "48"];
                    break;
                case 120:
                    ama = [24, "T6,43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 120 :
            switch(desti)
            {
                case 119:
                    ama = [24, "T6,43"];
                    break;
                case 121:
                    ama = [28, "44"];
                    break;
                case 123:
                    ama = [32, "43"];
                    break;
                case 124:
                    ama = [15, "T6"];
                    break;
                case 139:
                    ama = [38, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 121 :
            switch(desti)
            {
                case 120:
                    ama = [28, "44"];
                    break;
                case 122:
                    ama = [15, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 122 :
            switch(desti)
            {
                case 121:
                    ama = [15, "44"];
                    break;
                case 123:
                    ama = [10, "T6,43,46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 123 :
            switch(desti)
            {
                case 120:
                    ama = [32, "43"];
                    break;
                case 122:
                    ama = [10, "T6,43,46"];
                    break;
                case 124:
                    ama = [14, "T6,46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 124 :
            switch(desti)
            {
                case 120:
                    ama = [15, "T6"];
                    break;
                case 123:
                    ama = [14, "T6,43,46"];
                    break;
                case 126:
                    ama = [48, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 125 :
            switch(desti)
            {
                case 118:
                    ama = [24, "46"];
                    break;
                case 126:
                    ama = [23, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 126 :
            switch(desti)
            {
                case 124:
                    ama = [48, "46"];
                    break;
                case 125:
                    ama = [23, "46"];
                    break;
                case 127:
                    ama = [24, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 127 :
            switch(desti)
            {
                case 126:
                    ama = [24, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 128 :
            switch(desti)
            {
                case 110:
                    ama = [15, "T5,43,50"];
                    break;
                case 129:
                    ama = [24, "43"];
                    break;
                case 131:
                    ama = [48, "T5,50"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 129 :
            switch(desti)
            {
                case 112:
                    ama = [20, "43"];
                    break;
                case 128:
                    ama = [24, "43"];
                    break;
                case 130:
                    ama = [24, "43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 130 :
            switch(desti)
            {
                case 129:
                    ama = [24, "43"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 131 :
            switch(desti)
            {
                case 128:
                    ama = [48, "T5,50"];
                    break;
                case 132:
                    ama = [70, "50"];
                    break;
                case 133:
                    ama = [38, "T5,50"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 132 :
            switch(desti)
            {
                case 131:
                    ama = [70, "50"];
                    break;
                case 133:
                    ama = [35, "40,50"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 133 :
            switch(desti)
            {
                case 33:
                    ama = [55, "40,45"];
                    break;
                case 132:
                    ama = [35, "T5,40,45,50"];
                    break;
                case 134:
                    ama = [18, "46"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 134 :
            switch(desti)
            {
                case 133:
                    ama = [18, "T5,40,45,50"];
                    break;
                case 134:
                    ama = [34, "T5,53"];
                    break;
                case 136:
                    ama = [38, "45"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 135 :
            switch(desti)
            {
                case 21:
                    ama = [45, "T5,53"];
                    break;
                case 134:
                    ama = [34, "T5,53"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 136 :
            switch(desti)
            {
                case 134:
                    ama = [38, "45"];
                    break;
                case 137:
                    ama = [54, "45"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 137 :
            switch(desti)
            {
                case 136:
                    ama = [54, "45"];
                    break;
                case 138:
                    ama = [67, "45"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 138 :
            switch(desti)
            {
                case 137:
                    ama = [67, "45"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;
        case 139 :
            switch(desti)
            {
                case 117:
                    ama = [24, "44"];
                    break;
                case 120:
                    ama = [38, "44"];
                    break;
                default:
                    ama = [Infinity, ""];
            }
            break;


        default:
            ama = [Infinity, ""];
    }
    return ama[par];
}

function rufas(ori) {
    switch(ori)
    {
        case 1:
            ama = ["M3,ME,T5,T8,T9,21,53"];
            break;
        case 2:
            ama = ["M3,21,53"];
            break;
        case 3:
            ama = ["T5,T8,T9"];
            break;
        case 4:
            ama = ["M3,21,53"];
            break;
        case 5:
            ama = ["M3,T5,T8,T9,21,53"];
            break;
        case 6:
            ama = ["M3,T5,T8,T9,10,21,53"];
            break;
        case 7:
            ama = ["T8,T9,10,21,53"];
            break;
        case 8:
            ama = ["21,53"];
            break;
        case 9:
            ama = ["T8,T9,10"];
            break;
        case 10:
            ama = ["M3,M2,T5,T8,16,21"];
            break;
        case 11:
            ama = ["T8,T9,10,16,21"];
            break;
        case 12:
            ama = ["10,P1"];
            break;
        case 13:
            ama = ["10,21,53"];
            break;
        case 14:
            ama = ["T5,10,21,53"];
            break;
        case 15:
            ama = ["T5,10,21"];
            break;
        case 16:
            ama = ["M3,M2,T5,16,21"];
            break;
        case 17:
            ama = ["M2,T9,16,21"];
            break;
        case 18:
            ama = ["M3,16"];
            break;
        case 19:
            ama = ["TU,M1,M2,M3,ME,T9,10,11,15,16,22"];
            break;
        case 20:
            ama = ["10,11,16"];
            break;
        case 21:
            ama = ["T5,53"];
            break;
        case 22:
            ama = ["T9,16,10,11"];
            break;
        case 23:
            ama = ["T5,10,11"];
            break;
        case 24:
            ama = ["T9,10,11"];
            break;
        case 25:
            ama = ["TU,M1,M2,T3,15,16,22"];
            break;
        case 26:
            ama = ["15,16,22"];
            break;
        case 27:
            ama = ["T9,15,16"];
            break;
        case 28:
            ama = ["TU,M1,M2,T3,22"];
            break;
        case 29:
            ama = ["T9,15"];
            break;
        case 30:
            ama = ["TU,M1,T3,17"];
            break;
        case 31:
            ama = ["TU,M1,T3,T7,17,28,40,41"];
            break;
        case 32:
            ama = ["T9,41"];
            break;
        case 33:
            ama = ["15,40,45"];
            break;
        case 34:
            ama = ["15,26,40,41"];
            break;
        case 35:
            ama = ["T7,15,26,40,41"];
            break;
        case 36:
            ama = ["TU,M1,T3,T4,T7,18,26,28,29,31,40"];
            break;
        case 37:
            ama = ["T7,26"];
            break;
        case 38:
            ama = ["TU,26"];
            break;
        case 39:
            ama = ["TU,T4,18,29,31"];
            break;
        case 40:
            ama = ["18,P2"];
            break;
        case 41:
            ama = ["18,31"];
            break;
        case 42:
            ama = ["31,P3"];
            break;
        case 43:
            ama = ["18,P4"];
            break;
        case 44:
            ama = ["26,P5"];
            break;
        case 45:
            ama = ["26,P6"];
            break;
        case 46:
            ama = ["T4,18,29,31"];
            break;
        case 47:
            ama = ["M1,T3,T9,T4,T7,15,18,26,28,29,31,40,41"];
            break;
        case 48:
            ama = ["M2,T3,17,22"];
            break;
        case 49:
            ama = ["B17,P7"];
            break;
        case 50:
            ama = ["T3,22"];
            break;
        case 51:
            ama = ["T3,22"];
            break;
        case 52:
            ama = ["M2,T3,17"];
            break;
        case 53:
            ama = ["M2,T3,19"];
            break;
        case 54:
            ama = ["B17,19,28"];
            break;
        case 55:
            ama = ["B17,28,30"];
            break;
        case 56:
            ama = ["T4,17,28,30"];
            break;
        case 57:
            ama = ["M2,A3,B19,C30"];
            break;
        case 58:
            ama = ["M2,T3,T4,T8,19,28,30"];
            break;
        case 59:
            ama = ["T8,P8"];
            break;
        case 60:
            ama = ["M2,T4,T8,28"];
            break;
        case 61:
            ama = ["T4,T8,28,30"];
            break;
        case 62:
            ama = ["19,P9"];
            break;
        case 63:
            ama = ["30,P10"];
            break;
        case 64:
            ama = ["TU,27,30,52"];
            break;
        case 65:
            ama = ["TU,27,52"];
            break;
        case 66:
            ama = ["TU,T4,17,52"];
            break;
        case 67:
            ama = ["TU,T4,17,49,52"];
            break;
        case 68:
            ama = ["17,19,49"];
            break;
        case 69:
            ama = ["49,P11"];
            break;
        case 70:
            ama = ["27,52"];
            break;
        case 71:
            ama = ["27,52"];
            break;
        case 72:
            ama = ["27,29"];
            break;
        case 73:
            ama = ["27,29"];
            break;
        case 74:
            ama = ["27,29"];
            break;
        case 75:
            ama = ["27,29"];
            break;
        case 76:
            ama = ["27,29"];
            break;
        case 77:
            ama = ["M2,P12"];
            break;
        case 78:
            ama = ["TU,P13"];
            break;
        case 79:
            ama = ["TU,P14"];
            break;
        case 80:
            ama = ["52,P15"];
            break;
        case 81:
            ama = ["52,91,92"];
            break;
        case 82:
            ama = ["92,P16"];
            break;
        case 83:
            ama = ["92,P17"];
            break;
        case 84:
            ama = ["91,P18"];
            break;
        case 85:
            ama = ["91,P19"];
            break;
        case 86:
            ama = ["TU,M2,52"];
            break;
        case 87:
            ama = ["TU,M2,52,91,92"];
            break;
        case 88:
            ama = ["T3,P20"];
            break;
        case 89:
            ama = ["T3,C37"];
            break;
        case 90:
            ama = ["28,17"];
            break;
        case 91:
            ama = ["37,P21"];
            break;
        case 92:
            ama = ["37,P22"];
            break;
        case 93:
            ama = ["37,P23"];
            break;
        case 94:
            ama = ["52,P24"];
            break;
        case 95:
            ama = ["29,P25"];
            break;
        case 96:
            ama = ["29,P26"];
            break;
        case 97:
            ama = ["M2,52,91"];
            break;
        case 98:
            ama = ["M2,52"];
            break;
        case 99:
            ama = ["15,P27"];
            break;
        case 100 :
            ama = ["T7,48"];
            break;
        case 101 :
            ama = ["T7,48"];
            break;
        case 102 :
            ama = ["T7,28"];
            break;
        case 103 :
            ama = ["T7,41"];
            break;
        case 104 :
            ama = ["T7,41"];
            break;
        case 105 :
            ama = ["41,P29"];
            break;
        case 106 :
            ama = ["41,P30"];
            break;
        case 107 :
            ama = ["41,P31"];
            break;
        case 108 :
            ama = ["T7,44,46,48"];
            break;
        case 109 :
            ama = ["B46,48"];
            break;
        case 110 :
            ama = ["T5,T7,41,43,44,46,48,50"];
            break;
        case 111 :
            ama = ["T6,43,44"];
            break;
        case 112 :
            ama = ["T6,43,44"];
            break;
        case 113 :
            ama = ["44,P32"];
            break;
        case 114 :
            ama = ["44,P33"];
            break;
        case 115 :
            ama = ["T6,43,48"];
            break;
        case 116 :
            ama = ["44,B48"];
            break;
        case 117 :
            ama = ["44,P34"];
            break;
        case 118 :
            ama = ["46,48"];
            break;
        case 119 :
            ama = ["T6,43,48"];
            break;
        case 120 :
            ama = ["T6,43,44"];
            break;
        case 121 :
            ama = ["C44,P35"];
            break;
        case 122 :
            ama = ["T6,43,44,46"];
            break;
        case 123 :
            ama = ["T6,43,46"];
            break;
        case 124 :
            ama = ["T6,43,46"];
            break;
        case 125 :
            ama = ["46,P36"];
            break;
        case 126 :
            ama = ["46,P37"];
            break;
        case 127 :
            ama = ["46,P38"];
            break;
        case 128 :
            ama = ["T5,43,50"];
            break;
        case 129 :
            ama = ["B43,P39"];
            break;
        case 130 :
            ama = ["B43,P40"];
            break;
        case 131 :
            ama = ["T5,50"];
            break;
        case 132 :
            ama = ["40,50"];
            break;
        case 133 :
            ama = ["T5,40,45,46,50"];
            break;
        case 134 :
            ama = ["T5,40,45,50,53"];
            break;
        case 135 :
            ama = ["T5,C53"];
            break;
        case 136 :
            ama = ["45,P41"];
            break;
        case 137 :
            ama = ["45,P42"];
            break;
        case 138 :
            ama = ["45,P43"];
            break;
        case 139 :
            ama = ["44,P44"];
            break;
    }
    return ama[0];
}

var paradas2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,55,56,57,58,59,60,63,64,65,66,67,51,52,53,54,33,34,35,36,37,38,40,41,69,39,70,43,71,72,45,73,74,46,47,48,49,50,75,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,92,93,44,96,42,97,98,99,84,68,61,94,95,62,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,126,127,128,129,130,131,132,133,134,135,136,137,138,139,125];

rufas2 = "TU,M1,M2,M3,ME,T3,T4,T5,T7,T9,10,11,15,16,17,18,19,21,22,26,28,29,30,31,40,41,43,44,45,46,48,49,50,52,53,91,92";
// Example //////////////////////////////////////////////////////////////////

// The adjacency matrix defining the graph.
var _ = Infinity;
var e = [
    [ _, _, _, _, _, _, _, _, 4, 2, 3 ],
    [ _, _, 5, 2, 2, _, _, _, _, _, _ ],
    [ _, 5, _, _, _, 1, 4, _, _, _, _ ],
    [ _, 2, _, _, 3, 6, _, 3, _, _, _ ],
    [ _, 2, _, 3, _, _, _, 4, 3, _, _ ],
    [ _, _, 1, 6, _, _, 2, 5, _, _, _ ],
    [ _, _, 4, _, _, 2, _, 5, _, _, 3 ],
    [ _, _, _, 3, 4, 5, 5, _, 3, 2, 4 ],
    [ 4, _, _, _, 3, _, _, 3, _, 3, _ ],
    [ 2, _, _, _, _, _, _, 2, 3, _, 3 ],
    [ 3, _, _, _, _, _, 3, 4, _, 3, _ ]
];

// Compute the shortest paths from vertex number 1 to each other vertex
// in the graph.
//var shortestPathInfo = shortestPath(e, 48, 7);


function ComenzarBusca(parStart)
{
    var jl=document.getElementById("demo");
    var shortestPathInfo = shortestPath(e, 48, 9);
    jl.innerHTML=constructPath(shortestPathInfo, 44);

}
function intersecan(b, b2) {
    var a1 = b;
    var a2 = b2;
//	alert(a1+" " +a2);.split(",").split(",")
    var inter = [];
    var pos2 = -1;
    for (jj =0; jj<a1.length; jj++) {
//	alert(a1[jj]+" " +a2[0]+" " +a2[1]+" " +a2[2]);
        if (a2.indexOf(a1[jj]) > -1) {
            pos2 = jj;
            break;
        }
    }
    return pos2;
}

function muestrareco(fila) {
    if (document.getElementById(fila).style.display == "table-row" ) {
        document.getElementById(fila).style.display="none"
    } else {
        document.getElementById(fila).style.display="table-row"
    }
}
function maximo(b) {
    cc= 0;
    for (jj =0; jj<b.length; jj++) {
        if (b[jj] > b[cc]) {cc = jj;}
    }
    return cc;
}
function filtra_cami(cami) {
    var fcami= []
    var cnt1 = 0;
    while ( cnt1 < cami.length-1) {
        rutas = grafo(cami[cnt1], cami[cnt1+1], 1).split(",");
        var sumaparadas = [];
        for (jj =0; jj<rutas.length; jj++) { sumaparadas.push(0);}
        for (jj2 =cnt1; jj2<cami.length; jj2++) {
            rutas1 = grafo(cami[jj2], cami[jj2+1], 1).split(",");
            for (jj4 = 0; jj4<rutas.length; jj4++) {
                for (jj8 = 0; jj8<rutas1.length; jj8++) {
                    if ( rutas[jj4] == rutas1[jj8] && sumaparadas[jj4] == (jj2-cnt1) ) { sumaparadas[jj4]++;}
                }
            }

        }
        ss = maximo(sumaparadas);
        fcami.push(cami[cnt1]);
        fcami.push(cami[cnt1+ sumaparadas[ss]]);
        fcami.push(rutas[ss]);
        cnt1 = cnt1+ sumaparadas[ss];

//var jl4 = document.getElementById("demo4");
//jl4.innerHTML="asdf"+sumaparadas+ "asdf" + sumaparadas[ss]+ "asdf" + fcami;
    }
    return fcami;
}
function ch_en_cade(ch,cad) {
    var cnt2;
//		alert(ch+"_"+cad);
    var resp = false;
    var cad2 = cad.split(",");
    for (cnt2=0;cnt2<cad2.length;cnt2++) {
//		alert(ch+"_"+cad2[cnt2]);
        if (cad2[cnt2] == ch) {
            resp = true;
            break;
        }
    }
    return resp;
}
function filtra_cami2(cami) {
    var fcami = [];
    var resp = "";
    var a1 = (rufas(cami[0])).split(",");
    var b2 = rufas(cami[cami.length-1]);



    for (cnt4=0;cnt4<a1.length;cnt4++) {

        if (ch_en_cade(a1[cnt4], b2) == true) {
//			resp = a1[cnt4];
            fcami.push(a1[cnt4]);
//			ffcami.push(fcami)
//			break;alert (a1[cnt4]);alert (rufas(cami[0]));alert (rufas(cami[cami.length-1]));
        }
    }
    if (fcami.length > 0) {
        fcami.splice(0, 0, cami[0], cami[cami.length-1]);
    }
    return fcami;
//rufas(cami[cntama])+	a1 +"_"+b2;
}
function filtra_cami22(cami, ss1) {
    var fcami = [];
    var ss11 = ss1;
    var resp = "";
    var a1 = (rufas(cami[0])).split(",");
    var a2 = (rufas(cami[cami.length-1])).split(",");
    for (cnt44=2;cnt44<ss11.length;cnt44++) {
//	alert(a1[0]+" "+ss11[cnt44] );
        if (a1.indexOf(ss11[cnt44]) > -1) {
//			alert(a1.indexOf(ss11[cnt44])+" "+ss11[cnt44] );
            a1.splice(a1.indexOf(ss11[cnt44]), 1);
        }
    }
    for (cnt44=2;cnt44<ss11.length;cnt44++) {
//	alert(a1[0]+" "+ss11[cnt44] );
        if (a2.indexOf(ss11[cnt44]) > -1) {
//			alert(a1.indexOf(ss11[cnt44])+" "+ss11[cnt44] );
            a2.splice(a2.indexOf(ss11[cnt44]), 1);
        }
    }
//	alert(a1+'  '+ a2);
    if (a1.length > 0 && a2.length >0) {
        for (cnt4=0;cnt4<a1.length;cnt4++) {
//		alert(cnt4+" "+a1[cnt4] );
            for (cnt44=0;cnt44<a2.length;cnt44++) {
                if (a1[cnt4] == "C53" ) {
//					alert( a1[cnt4]+" "+ a2[cnt44]);
                }

                for (cnt444=1;cnt444<140;cnt444++) {

                    b2 = rufas(cnt444).split(",");
                    if (b2.indexOf(a1[cnt4]) > -1 && b2.indexOf(a2[cnt44]) > -1) {
//						alert(cnt444+'  '+ b2);
                        fcami.push(cami[0]);
                        fcami.push(cnt444);
                        fcami.push(a1[cnt4]);
                        fcami.push(cnt444);
                        fcami.push(cami[cami.length-1]);
                        fcami.push(a2[cnt44]);
                        break;
                    }
                }

            }
        }
    }
    /*	var b2 = rufas(cami[cami.length-1]);
     for (cnt4=0;cnt4<a1.length-1;cnt4++) {
     fcami = [];
     if (ch_en_cade(a1[cnt4], b2) == true) {
     //			resp = a1[cnt4];
     fcami.push(0);
     fcami.push(cami.length-1);
     fcami.push(a1[cnt4]);
     ffcami.push(fcami)
     break;
     }a1+" "+a2;
     */
    return fcami
//rufas(cami[cntama])+	a1 +"_"+b2;
}


function filtra_cami222(cami, ss1, ss2) {
    var fcami = [];
    var fcami2 = [];
    var fcami22 = [];
    var ss11 = ss1;
    var ss12 = ss2;
    var resp = "";
    var a1 = (rufas(cami[0])).split(",");
    var a2 = (rufas(cami[cami.length-1])).split(",");
    var a22 = rufas2.split(",");
    for (cnt44=0;cnt44<a1.length;cnt44++) {
//	alert(a1[0]+" "+ss11[cnt44] );
        if (a22.indexOf(a1[cnt44]) > -1) {
//			alert(a1.indexOf(ss11[cnt44])+" "+ss11[cnt44] );
            a22.splice(a22.indexOf(a1[cnt44]), 1);
        }
    }
    for (cnt44=0;cnt44<a2.length;cnt44++) {
//	alert(a1[0]+" "+ss11[cnt44] );
        if (a22.indexOf(a2[cnt44]) > -1) {
//			alert(a1.indexOf(ss11[cnt44])+" "+ss11[cnt44] );
            a22.splice(a22.indexOf(a2[cnt44]), 1);
        }
    }
    /*	for (cnt44=0;cnt44<ss12.length;cnt44++) {
     //	alert(a1[0]+" "+ss11[cnt44] );
     if (a22.indexOf(ss11[cnt44]) > -1) {
     //			alert(a1.indexOf(ss11[cnt44])+" "+ss11[cnt44] );
     a22.splice(a22.indexOf(ss12[cnt44]), 1);
     }
     }
     *///	alert(a1+'  '+ a2+'  '+ a22);
//	alert( intersecan("a,s,d", "f,a,h"));
    for (cnt4=0;cnt4<a22.length;cnt4++) {
        fcami2 = [];
        fcami22 = [];
//		alert(cnt4+" "+a1[cnt4] );
        for (cnt44=1;cnt44<140;cnt44++) {
            if ( cami[0] != cnt44 && cami[cami.length-1] != cnt44) {
                b2 = (rufas(cnt44)).split(",");
                if (b2.indexOf(a22[cnt4]) > -1 && intersecan(b2, a1) > -1) {
//						alert (a22[cnt4]+"_" +b2.toString()+"_"+ a1.toString());
                    fcami2.push(cnt44);
                }
                if (b2.indexOf(a22[cnt4]) > -1 && intersecan(b2, a2) > -1) {
//						alert (a22[cnt4]+"____" +b2.toString()+"____"+ a2.toString());
//						alert (a22[cnt4]+" " +cnt44+" "+ rufas(cnt44));
                    fcami22.push(cnt44);
                }
                /**/			}

        }
        if ( fcami2.length > 0 && fcami22.length > 0) {
            b2 = (rufas(fcami2[0])).split(",");
            b22 = (rufas(fcami22[0])).split(",");
            rf1 = intersecan(a1, b2)
            rf2 = intersecan(a2, b22)
//			alert (a22[cnt4]+"__"+ fcami2.toString()+"___" +fcami22.toString())
//				alert(a22[cnt4]+"__"+rufas(fcami2[0])+"__"+rufas(fcami22[0]));
//			    alert (a22[cnt4]+"__"+  b2[rf1]+"__"+ b22[rf2])

        }

    }
    /*				if (cnt444 <> cami[0] && cnt444 <> cami[cami.length-1]) {
     if (b2.indexOf(a1[cnt4]) > -1) {
     }
     }
     for (cnt44=0;cnt44<a2.length;cnt44++) {
     fcami = [];
     fcami2 = [];
     if (b2.indexOf(a1[cnt4]) > -1 && b2.indexOf(a2[cnt44]) > -1) {
     //						alert(cnt444+'  '+ b2);
     fcami.push(cami[0]);
     fcami.push(cnt444);
     fcami.push(a1[cnt4]);
     fcami.push(cnt444);
     fcami.push(cami[cami.length-1]);
     fcami.push(a2[cnt44]);
     break;
     }
     }

     }
     }
     }
     var b2 = rufas(cami[cami.length-1]);
     for (cnt4=0;cnt4<a1.length-1;cnt4++) {
     fcami = [];
     if (ch_en_cade(a1[cnt4], b2) == true) {
     //			resp = a1[cnt4];
     fcami.push(0);
     fcami.push(cami.length-1);
     fcami.push(a1[cnt4]);
     ffcami.push(fcami)
     break;
     }a1+" "+a2;
     */

    return fcami
//rufas(cami[cntama])+	a1 +"_"+b2;
}


function ComenzarBusca2(parStart)
{
    var ori=parseInt(document.getElementById("ori").value);
    var dest=parseInt(document.getElementById("dest").value);
    var shortestPathInfo = shortestPath(e, 140, ori);
    var cami;
//var jl=document.getElementById("demo");
//var jl2=document.getElementById("demo2");
    cami = constructPath(shortestPathInfo, ori, dest);
//cami = cami.split(",");
//jl.innerHTML=cami.length;
//jl2.innerHTML=cami;
//jl.innerHTML=ori+ "sd"+dest;grafo(6, 10, 1)+"    "+cami[0]

//var ruta=document.getElementById("tabrow");

    tabdata = "<table width='100%' height='100%' border='0' cellspacing='0' bgcolor='#FFFFFF'>";
    for (cntama=0;cntama<cami.length;cntama++) {
        if (cntama == 0) {
            orien = "Abordar en:";
        } else if (cntama == cami.length-1) {
            orien = "Terminando en:";
        } else {

            orien = "Pasando por:";
        }
        tabdata = tabdata + "<tr valign='middle' class='titulo42' >";
        tabdata = tabdata +  "<td width='119' height='29'>"+ orien +" </td>";
        tabdata = tabdata +  "<td width='438'>&nbsp;"+ document.getElementById("ori").options[paradas2[cami[cntama]]].text + "</td>";
        tabdata = tabdata +  "<td width='77'>Rutas:</td>";
        tabdata = tabdata +  "<td width='205'>&nbsp;"+grafo(cami[cntama], cami[cntama + 1],1) +"</td>";
        tabdata = tabdata +  "</tr>";
    }
    tabdata = tabdata +  "</table>";

    tabdata2 = "<table width='100%' height='100%' border='0' cellspacing='0' bgcolor='#FFFFFF'>";
    tabdata2 = tabdata2 + "<tr valign='middle' class='titulo42' >";
    tabdata2 = tabdata2 + "<td width='103' height='30'> Abordar Ruta</td>";
    tabdata2 = tabdata2 + "<td width='361'>Desde:</td>";
    tabdata2 = tabdata2 + "<td colspan='2'>Hasta:</td>";
    tabdata2 = tabdata2 + "</tr>";
    for (cntama=0;cntama<cami.length-1;cntama++) {
        tabdata2 = tabdata2 + "<tr valign='middle' class='titulo42' >";
        tabdata2 = tabdata2 + "<td width='103' height='30'> "+ grafo(cami[cntama], cami[cntama + 1],1) + "</td>";
        tabdata2 = tabdata2 + "<td width='361'>"+ document.getElementById("ori").options[paradas2[cami[cntama]]].text + "</td>";
        tabdata2 = tabdata2 + "<td colspan='2'>"+ document.getElementById("ori").options[paradas2[cami[cntama+1]]].text + "</td>";
        tabdata2 = tabdata2 + "</tr>";
        /**/	}
    tabdata2 = tabdata2 +  "</table>";


//ruta.innerHTML=tabdata2;

    ss1 = filtra_cami2(cami);
//	alert(ss1);   ss1 Recorridos Directos
    ss2 = filtra_cami22(cami, ss1);
//	ss8 = filtra_cami222(cami, ss1, ss2);
//	alert(ss2);
    ss = filtra_cami(cami);

//	alert(ss);
    document.getElementById("rufa").value = cami;
    document.getElementById("rufa22").value = ss;
    document.getElementById("rufa222").value = ss2;
    document.getElementById("rufa2").value = ss1;









    if (ss1.length > 0) {
//		alert ("asdf11");
        document.getElementById("filaR0").style.display="table-row"
        document.getElementById("filaR00").style.display="table-row"
//		alert (ss1);

        tabdata2 = "<table width='100%' height='100%'   border='1' cellspacing='0' bgcolor='#FFFFFF'>";
        tabdata2 = tabdata2 + "<tr valign='middle' bgcolor='#CCCCCC' class='titulo42' >";
        tabdata2 = tabdata2 + "<td width='135' height='25'> Abordar Ruta</td>";
        tabdata2 = tabdata2 + "<td width='366'>Desde:</td>";
        tabdata2 = tabdata2 + "<td colspan='2'>Hasta:</td>";
        tabdata2 = tabdata2 + "</tr>";
        tabdata2 = tabdata2 + "<tr class='titulo42' >";
        tabdata2 = tabdata2 + '<td width="135" height="25"> ';
        for (cnt44=2;cnt44<ss1.length;cnt44++) {
            tabdata2 = tabdata2 +  ss1[cnt44] + " ";
        }
        tabdata2 = tabdata2 + "</td>";
        tabdata2 = tabdata2 + '<td width="366">'+ document.getElementById("ori").options[paradas2[ss1[0]]].text + "</td>";
        tabdata2 = tabdata2 + "<td colspan='2'>"+ document.getElementById("ori").options[paradas2[ss1[1]]].text + "</td>";
        tabdata2 = tabdata2 + "</tr>";
        tabdata2 = tabdata2 +  "</table>";
//		alert ("asdf13");
        document.getElementById("tabR0").innerHTML = tabdata2 ;
//		alert ("asdf14");
    } else {
        document.getElementById("filaR0").style.display="none"
        document.getElementById("filaR00").style.display="none"
    }
//alert("asdf");
    if (ss2.length > 0) {
//		alert ("asdf22");
        document.getElementById("filaR1").style.display="table-row"
        document.getElementById("filaR11").style.display="table-row"
        /*		tabdata2 = "";
         tabdata2 = '<td width="135" height="25"> ';
         tabdata2 = tabdata2 + "</td>";
         tabdata2 = tabdata2 + '<td width="366">'+ document.getElementById("ori").options[paradas2[ss1[0]]].text + "</td>";
         tabdata2 = tabdata2 + "<td colspan='2'>"+ document.getElementById("ori").options[paradas2[ss1[1]]].text + "</td>";

         */

        tabdata2 = "<table width='100%' height='100%'   border='1' cellspacing='0' bgcolor='#FFFFFF'>";
        tabdata2 = tabdata2 +  '<tr valign="middle" bgcolor="#CCCCCC" class="titulo42" >'
        tabdata2 = tabdata2 +  '<td width="135" height="25"> Abordar Ruta</td>'
        tabdata2 = tabdata2 +  '<td width="366">Desde:</td>'
        tabdata2 = tabdata2 +  '<td colspan="2">Hasta:</td>'
        tabdata2 = tabdata2 +  '</tr>'
        for (cnt44=0;cnt44<ss2.length;cnt44+=6) {
            if (( cnt44/6 ) % 2 == 0 ) {
                bgcl = 'bgcolor="#FFFFFF"';
            } else {
                bgcl = 'bgcolor="#FFCC99"';
            }
            tabdata2 = tabdata2 +  '<tr class="titulo42" '+ bgcl +' >'
            tabdata2 = tabdata2 +  '<td width="135" height="25">&nbsp;'+ss2[cnt44+2]+'</td>'
            tabdata2 = tabdata2 +  '<td width="366">&nbsp;'+document.getElementById("ori").options[paradas2[ss2[cnt44+0]]].text+'</td>'
            tabdata2 = tabdata2 +  '<td colspan="2">&nbsp;'+document.getElementById("ori").options[paradas2[ss2[cnt44+1]]].text+'</td>'
            tabdata2 = tabdata2 +  '</tr>'
            tabdata2 = tabdata2 +  '<tr class="titulo42" '+ bgcl +'>'
            tabdata2 = tabdata2 +  '<td width="135" height="25">&nbsp;'+ss2[cnt44+5]+'</td>'
            tabdata2 = tabdata2 +  '<td width="366">&nbsp;'+document.getElementById("ori").options[paradas2[ss2[cnt44+3]]].text+'</td>'
            tabdata2 = tabdata2 +  '<td colspan="2">&nbsp;'+document.getElementById("ori").options[paradas2[ss2[cnt44+4]]].text+'</td>'
            tabdata2 = tabdata2 +  '</tr>'
        }
        tabdata2 = tabdata2 +  "</table>";
        document.getElementById("tabR1").innerHTML = tabdata2 ;

    } else {
        document.getElementById("filaR1").style.display="none"
        document.getElementById("filaR11").style.display="none"
    }


    tabdata2 = "<table width='100%' height='100%'   border='1' cellspacing='0' bgcolor='#FFFFFF'>";
    tabdata2 = tabdata2 + "<tr bgcolor='#CCCCCC' class='titulo42' >";
    tabdata2 = tabdata2 + "<td width='135' height='25'> Abordar Ruta</td>";
    tabdata2 = tabdata2 + "<td width='366'>Desde:</td>";
    tabdata2 = tabdata2 + "<td colspan='2'>Hasta:</td>";
    tabdata2 = tabdata2 + "</tr>";
    for (cntama=0;cntama<ss.length;cntama=cntama+3) {
        tabdata2 = tabdata2 + "<tr class='titulo42' >";
        tabdata2 = tabdata2 + "<td width='135' height='25'> "+ ss[cntama+2] + "</td>";
        tabdata2 = tabdata2 + "<td width='366'>"+ document.getElementById("ori").options[paradas2[ss[cntama]]].text + "</td>";
        tabdata2 = tabdata2 + "<td colspan='2'>"+ document.getElementById("ori").options[paradas2[ss[cntama+1]]].text + "</td>";
        tabdata2 = tabdata2 + "</tr>";
    }
    tabdata2 = tabdata2 +  "</table>";
    document.getElementById("tabbest").innerHTML=tabdata2;
}
function ComenzarBusca22(parStart)
{
    var ori=parseInt(document.getElementById("ori").value);
    var dest=parseInt(document.getElementById("dest").value);
//var jl=document.getElementById("demo");
//jl.innerHTML=ori+dest;
//jl.innerHTML=ori+ "sd"+dest;grafo(6, 10, 1)

}
