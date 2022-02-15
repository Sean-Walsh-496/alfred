import { createStore } from 'vuex'

export default createStore({
  state: {
    mouse: {
      down: false,
      target: null
    },
    itemPicker: {
      position: {
        x: 0,
        y: 0
      },
      dimensions: {
        x: 0,
        y: 0
      },
      bufferDimensions: {
        x: 300,
        y: 300
      },
      headerText: "Pick an item"
    }
  },
  mutations: {
    moveMouseTarget(state, e){
      if (state.mouse.target != null){
        state.mouse.target.move(e.movementX, e.movementY);
      }
    },
    moveItemPicker(state, e){
      const picker = state.itemPicker;
      const {bufferDimensions, dimensions} = picker;

      picker.dimensions.x = 100;
      picker.dimensions.y = 200;

      picker.position.x = e.clientX - (bufferDimensions.x - dimensions.x) / 2;
      picker.position.y = e.clientY - (bufferDimensions.y - dimensions.y) / 2;
      
      picker.headerText = "Pick an Item";
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
