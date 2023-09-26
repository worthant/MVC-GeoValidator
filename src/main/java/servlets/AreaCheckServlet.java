package servlets;

import beans.ResultsBean;
import com.google.gson.Gson;
import utils.AreaChecker;
import utils.CoordinatesValidator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {
    public static final int SC_UNPROCESSABLE_ENTITY = 422;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double x = 0;
        double y = 0;
        double r = 0;
        try {
            x = ControllerServlet.getDouble(request, "x");
            y = ControllerServlet.getDouble(request, "y");
            r = ControllerServlet.getDouble(request, "r");

            CoordinatesValidator validator = new CoordinatesValidator(x, y, r);

            if (!validator.checkData()) {
                response.setStatus(SC_UNPROCESSABLE_ENTITY);
                System.out.println("validation haven't passed");
                sendError(response, "Data haven't passed validation");
                return;
            }

            boolean isHit = AreaChecker.isInArea(x, y, r);

            ResultsBean bean = (ResultsBean) request.getSession().getAttribute("results");
            if (bean == null) {
                bean = new ResultsBean();
                request.getSession().setAttribute("results", bean);
            }

            ResultsBean.Result result = new ResultsBean.Result(String.valueOf(x), String.valueOf(y), String.valueOf(r), isHit);
            bean.addResult(result);

            response.sendRedirect("table.jsp");

//            PrintWriter out = response.getWriter();
//            out.println("<tr>");
//            out.println("<td>" + x + "</td>");
//            out.println("<td>" + y + "</td>");
//            out.println("<td>" + r + "</td>");
//            out.println("<td>" + (isHit ? "Hit" : "Didn't hit") + "</td>");
//            out.println("</tr>");
        } catch (Exception e) {
            request.getRequestDispatcher("./index.jsp").forward(request, response);
        }
    }

    public void sendError(HttpServletResponse response, String errorMessage) throws IOException {
        var json = new Gson();
        Map<String, Object> jsonResponse = new HashMap<>() {{
            put("error", errorMessage);
            put("status", "UNPROCESSABLE_ENTITY");
        }};

        response.setContentType("application/json");
        response.getWriter().write(json.toJson(jsonResponse));
        response.setStatus(422);
    }
}
