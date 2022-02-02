import { createStore } from 'vuex'

//helpers
function snapPoint(x,y,size){
  let output = {x: x, y: y};
  for (let i of ['x', 'y']){
    let diff = output[i] % size;

    if (diff >= 10) output[i] += 20 - diff;
    
    else output[i] -= diff
  }
  console.log(output);
  return output;
}


export default createStore({
  state: {
    mouse: {
      down: false,
      target: null
    }
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
          console.log(target);
          target.position = snapPoint(target.position.x, target.position.y, state.dashboard.cellSize);
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
