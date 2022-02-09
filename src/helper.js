
export default {
    snapPoint(x,y,size){
        let output = {x: x, y: y};
        for (let i of ['x', 'y']){
            let diff = output[i] % size;
        
            if (diff >= 10) output[i] += 20 - diff;
            
            else output[i] -= diff
        }
        return output;
    },
    outOfBounds(pos, size, bPos, bSize){
        // returns nearest point inside bounds for your box
        let output = {x: pos.x, y: pos.y};
        for (let i of ['x', 'y']){
            if (pos[i] < bPos[i]){
                output[i] = bPos[i];
                continue;
            }
            else if (pos[i] + size[i] > bPos[i] + bSize[i]){
                let offset = pos[i] + size[i] - bPos[i] - bSize[i];
                output[i] -= offset;
            }
        }
        return output;
    }

}