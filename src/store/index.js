import { createStore } from 'vuex'

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
        addPanelData(state, payload) {
          let e = payload.e;
          let data = {
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
            shadow: "",
            transform: "",
            zIndex: 0
          };
          state.dashboard.panels.push(data);

          switch (payload.type){
            case "day-schedule":
              this.commit("addDayScheduleData", state.dashboard.panels.length - 1);
              break;
          }

        },

        addDayScheduleData(state, id){
          let target = state.dashboard.panels[id];
          let times = [];
          for (let i = 0; i < 24; i++){
              times.push({position: i + 1, content: null});
          }
          target.content.hours = times;
        },

        addActivity(state, payload){
          let target = state.dashboard.panels[payload.parent.id].content.hours[payload.id - 1];
          
          let activity = {
            name: "", 
            duration: 1, //number of cells taken up
            color: "blue",
            pickedUp: false, //currently being moved
            zIndex: 11,
            dimensions: payload.dimensions,
            position: payload.position,
            transforming: false //shrinking or stretching

          };
          
          target.content = activity;
          
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
