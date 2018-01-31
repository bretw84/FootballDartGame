class Player {

    constructor(name) {

        this.name=name;
        this.q1=0;
        this.q2=0;
        this.q3=0;
        this.q4=0;
        this.score=0;

    };//END constructor

	addPoints(quarter,points) {
        switch(quarter) {
            case 1:
                this.q1 = this.q1 + points;
            break;

            case 2:
                this.q2 = this.q2 + points;
            break;

            case 3: 
                this.q3 = this.q3 + points;
            break;

            case 4:
                this.q4 = this.q4 + points;
            break;
        }
        this.totalScore();
    }

    totalScore() {
        this.score = this.q1 + this.q2 + this.q3 + this.q4;
    }
    
	
}//END Player
