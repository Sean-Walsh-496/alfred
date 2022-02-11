import helper from "../../helper.js";

export default {
    methods: {
        snap(){
            const cellSize = this.$store.state.homePage.dashboard.cellSize;
            const taskbar = this.$store.state.homePage.taskbar;

            this.state.position = helper.snapPoint(this.state.position.x, this.state.position.y, cellSize);
        
            //get the bottom-right corner position if size adjusted
            let corner = [this.state.dimensions.x, this.state.dimensions.y];
            let new_corner = helper.snapPoint(...corner, cellSize);

            this.state.dimensions.x = new_corner.x; this.state.dimensions.y = new_corner.y;
            
            //checks if out of bounds
            let newPos = helper.outOfBounds(this.state.position, this.state.dimensions, 
                            {x: taskbar.width, y: 0}, {x: 9999999, y: 9999999});

            this.state.position.x = newPos.x; this.state.position.y = newPos.y;
        },
    }
}