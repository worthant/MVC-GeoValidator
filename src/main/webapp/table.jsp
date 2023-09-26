<%--
    Document   : table.jsp
    Created on : 26.09.2023, 0:41
    Author     : worthant
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="core" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="results" scope="session" class="beans.ResultsBean"/>
<core:forEach var="result" items="${results.results}">
  <tr>
    <td>${result.x}</td>
    <td>${result.y}</td>
    <td>${result.r}</td>
    <td>${result.hit ? "Hit" : "Didnt hit"}</td>
  </tr>
</core:forEach>
