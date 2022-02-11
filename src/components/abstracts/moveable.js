
export default {
    methods: {
        move(delta_x, delta_y){
            this.state.position.x += delta_x;
            this.state.position.y += delta_y;
        },
    }
}