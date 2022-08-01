
class Shoe {
    constructor(
        size,
        color,
    ) {
        this.size = size;
        this.color = color;
        this.dateAcquired = new Date();
    }
    setSize(newSize) {
        this.size = newSize;
    }
    setColor(newColor) {
        this.size = newColor;
    }
    shoeAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; // elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}

export default Shoe;
