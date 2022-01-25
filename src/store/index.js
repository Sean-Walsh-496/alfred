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
      state.mouse.target.x += e.movementX;
      state.mouse.target.y += e.movementY;
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
