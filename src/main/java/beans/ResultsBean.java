package beans;

import java.util.ArrayList;
import java.util.List;

public class ResultsBean {
    private List<Result> results;

    public ResultsBean() {
        this.results = new ArrayList<>();
    }

    public void addResult(Result result) {
        this.results.add(result);
    }

    public List<Result> getResults() {
        return results;
    }

    public static class Result {
        private String x;
        private String y;
        private String r;
        private boolean isHit;

        public Result(String x, String y, String r, boolean isHit) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.isHit = isHit;
        }

        public String getX() {
            return x;
        }

        public void setX(String x) {
            this.x = x;
        }

        public String getY() {
            return y;
        }

        public void setY(String y) {
            this.y = y;
        }

        public String getR() {
            return r;
        }

        public void setR(String r) {
            this.r = r;
        }

        public boolean isHit() {
            return isHit;
        }

        public void setHit(boolean hit) {
            isHit = hit;
        }
    }
}

