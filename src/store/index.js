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
            },
            pickedUp: false,
          };
          state.dashboard.panels.push(payload);
        },

        movePanel(state, payload){
          let target = this.targetPanel(state, payload);
          target.x += payload.delta_x;
          target.y += payload.delta_y;
        },

        pickUpPanel(state, payload){
          this.targetPanel(state, payload).pickedUp = true;
        },

        putDownPanel(){
          this.targetPanel(state, payload).pickedUp = false;
        }
      },
      actions: {

      },
      getters: {
        targetPanel(state, payload){
          return state.dashboard.panels[payload.id];
        }
      }
      
    },
    settings: {

    }
  }
})
