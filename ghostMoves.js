import {DIRECTIONS, OBJECT_TYPE} from './setup';

// Primitive random movement function
export function randomMovement(position, direction, objectExist){
    let dir=direction;
    let nextMovePos=position+dir.movement;
    // Create an array from the directions object keys
    const keys=Object.keys(DIRECTIONS);
    while(objectExist(nextMovePos, OBJECT_TYPE.WALL)||objectExist(nextMovePos, OBJECT_TYPE.GHOST)){
        const key=keys[Math.floor(Math.random()*keys.length)];
        // set next move direction
        dir=DIRECTIONS[key];
        // set next move
        nextMovePos=position+dir.movement;
    }
    return{nextMovePos, direction:dir};
}