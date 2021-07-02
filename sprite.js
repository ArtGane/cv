class Sprite {
    constructor(pSrc, pX = 170, pY = 245) {
        this.img = new Image();
        this.img.src = pSrc;
        this.x = pX;
        this.y = pY;
    }

    draw(pCtx) {
        pCtx.drawImage(this.img, this.x, this.y);
    }
}