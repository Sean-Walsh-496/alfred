import { createStore } from 'vuex'

//helpers =========================================================
function snapPoint(x,y,size){
  let output = {x: x, y: y};
  for (let i of ['x', 'y']){
    let diff = output[i] % size;

    if (diff >= 10) output[i] += 20 - diff;
    
    else output[i] -= diff
  }
  return output;
}


function outOfBounds(pos, size, bPos, bSize){
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


export default createStore({
  state: {
    mouse: {
      down: false,
      target: null
    },
  },
  mutations: {
    moveMouseTarget(state, e){
      if (state.mouse.target != null){
        state.mouse.target.move(e.movementX, e.movementY);
      }
    },
    dropMouseTarget(state){
      if (state.mouse.target != null){
        state.mouse.target.drop();
      }
    }
  },
  modules: {
    homePage: {
      state: {
        taskbar: {
          width: 100
        },
        dashboard: {
          cellSize: 30,
          panels: [

          ]
        }
      },
      mutations: {
        addPanelData(state, e) {
          let payload = {
            position: {
              x: e.pageX,
              y: e.pageY
            },
            dimensions: {
              x: 500,
              y: 500
            },
            content: {
              
            },
            pickedUp: false,
          };
          state.dashboard.panels.push(payload);
        },

        movePanel(state, payload){
          let target = state.dashboard.panels[payload.id];
          target.position.x += payload.delta_x;
          target.position.y += payload.delta_y;
        },

        morphPanel(state, payload){
          let target = state.dashboard.panels[payload.id];
          target.dimensions.x += payload.delta_x;
          target.dimensions.y += payload.delta_y;
        },

        snapPanel(state, id){
          let target = state.dashboard.panels[id];
          target.position = snapPoint(target.position.x, target.position.y, state.dashboard.cellSize);
        
          //get the bottom-right corner position if size adjusted
          let corner = [target.dimensions.x, target.dimensions.y];
          let new_corner = snapPoint(...corner, state.dashboard.cellSize);
          target.dimensions.x = new_corner.x;
          target.dimensions.y = new_corner.y;
          
          //checks if out of bounds
          target.position = outOfBounds(target.position, target.dimensions, 
                            {x: state.taskbar.width, y: 0}, {x: 9999999, y: 9999999});

        }
      },
      actions: {
      },
      getters: {
      }
      
    },
    settings: {

    }
  }
})
