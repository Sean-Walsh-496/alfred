import { createStore } from 'vuex'

export default createStore({
  state: {
    mouseDown: false
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
        addPanelData(state, $ev) {
          let payload = {
            position: {
              x: $ev.pageX,
              y: $ev.pageY
            },
            dimensions: {
              x: 500,
              y: 500
            }
          };
          state.dashboard.panels.push(payload);
        },

        movePanel(state, payload){
          let target = state.dashboard.panels[payload.id];
          target.x += payload.delta_x;
          target.y += payload.delta_y;
        }
      },
      actions: {

      },
      
    },
    settings: {

    }
  }
})
