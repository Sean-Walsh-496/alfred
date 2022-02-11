export default {
    methods: {
        morph(delta_x, delta_y){
            this.state.dimensions.x += delta_x;
            this.state.dimensions.y += delta_y;
          },
    }
}