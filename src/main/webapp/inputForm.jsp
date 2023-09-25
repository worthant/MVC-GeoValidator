<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 25.09.2023
  Time: 19:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form>
    <div class="input-group">
        <p>X:</p>
        <div id="x" class="radio-group">
            <label><input type="radio" name="x" value="-3">-3</label>
            <label><input type="radio" name="x" value="-2">-2</label>
            <label><input type="radio" name="x" value="-1">-1</label>
            <label><input type="radio" name="x" value="0">0</label>
            <label><input type="radio" name="x" value="1">1</label>
            <label><input type="radio" name="x" value="2">2</label>
            <label><input type="radio" name="x" value="3">3</label>
            <label><input type="radio" name="x" value="4">4</label>
            <label><input type="radio" name="x" value="5">5</label>
        </div>
    </div>
    <div class="input-group">
        <label for="y">Y:</label>
        <input type="text" id="y" name="y" maxlength="8">
    </div>
    <div class="input-group">
        <label for="r">R:</label>
        <select id="r" name="r">
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
        </select>
    </div>
    <div class="check-btn">
        <input type="submit" value="Check">
    </div>
</form>
</body>
</html>
