class Et {
    corHead: string;
    corEyes: string;
    corBody: string;

    constructor(corHead: string, corEyes: string, corBody: string){
        this.corBody = corBody;
        this.corEyes = corEyes;
        this.corHead = corHead;
    }

    public draw() {
        ellipseMode("center");
        rectMode("center");

        //Body
        fill(this.corBody);
        rect(240, 145, 20, 100);

        //Head
        fill(this.corHead);
        ellipse(240, 115, 60, 60);

        //Eyes
        fill(this.corEyes);
        ellipse(220, 115, 16, 32);
        ellipse(260, 115, 16, 32);

        // Arms
        line(230, 150, 220, 180);
        line(250, 150, 260, 180);

        //Legs
        line(230, 195, 220, 205);
        line(250, 195, 260, 205);
    }
}