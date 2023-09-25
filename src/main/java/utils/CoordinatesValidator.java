package utils;

public class CoordinatesValidator {
    private double x, y, r;

    public CoordinatesValidator(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public boolean checkData() {
        return checkX() && checkY() && checkR();
    }

    private boolean checkX() {
        return x >= -3 && x <= 5;
    }

    private boolean checkY() {
        return y > -5 && y < 5;
    }

    private boolean checkR() {
        return r >= 1 && r <= 3;
    }
}
