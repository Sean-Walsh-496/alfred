import { createStore } from 'vuex'

export default createStore({
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
        }
      },
      actions: {

      },
      
    },
    settings: {

    }
  }
})
