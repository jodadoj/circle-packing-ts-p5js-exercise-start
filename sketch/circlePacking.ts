interface CircleData {
    position: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

/**
 * Creates and returns an array of Circle objects which, when visualised, do not overlap each other.
 * @param areaWidth the width of the area within which circles may be generated
 * @param areaHeight the height of the area within which circles may be generated
 * @return an array of generated Circle data objects
 */

 function areOverlapping(c1: CircleData, c2: CircleData): boolean {
    const distanceBetween = distance(c1.position, c2.position);
    return c1.radius + c2.radius > distanceBetween;
  }

function calculatePackedCircles(
    areaWidth: number,
    areaHeight: number
): CircleData[] {
    //TODO: you need to implement this function properly!
    //These are just a couple of random circles, with no consideration yet for avoiding overlap.
    const circleDataOne: CircleData = {
        position: { x: 300, y: 300 },
        radius: 200,
    };
    const createdCircles =[circleDataOne];
    for(let circleNo = 0; circleNo <1000; circleNo++){
        const circleDataTwo: CircleData = {
            position: { x: random(0, areaWidth), y: random(0, areaHeight) },
            radius: random(0, 200),
            }
        if (areOverlapping(circleDataOne, circleDataTwo)===false){
            createdCircles.push(circleDataTwo);
        }
    }
    return createdCircles;
    //return [circleDataOne, undefined]
};

/** Returns the distance between two given positions.
    This function doesn't require the p5.js library.
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}