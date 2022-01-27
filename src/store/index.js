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
    }
  },
  modules: {
    homePage: {
      state: {
        dashboard: {
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
