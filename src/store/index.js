import { createStore } from 'vuex'

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
          console.log(target);
          target.dimensions.x += payload.delta_x;
          target.dimensions.y += payload.delta_y;
        },
        snapPanel(state, payload){
          let target = state.dashboard.panels[payload.id];
          for (let i in ['x', 'y']){
            let j = ['x', 'y'][i];
            let diff = target.position[j] % state.dashboard.cellSize;

            if (diff >= 10) target.position[j] += 20 - diff;
            
            else target.position[j] -= diff
          }
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
