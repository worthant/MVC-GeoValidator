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
            <label><input type="radio" name="x" value="-4">-4</label>
            <label><input type="radio" name="x" value="-3">-3</label>
            <label><input type="radio" name="x" value="-2">-2</label>
            <label><input type="radio" name="x" value="-1">-1</label>
            <label><input type="radio" name="x" value="0">0</label>
            <label><input type="radio" name="x" value="1">1</label>
            <label><input type="radio" name="x" value="2">2</label>
            <label><input type="radio" name="x" value="3">3</label>
            <label><input type="radio" name="x" value="4">4</label>
        </div>
    </div>
    <div class="input-group">
        <label for="y">Y:</label>
        <input type="text" id="y" name="y" maxlength="8">
    </div>
    <div class="input-group">
        <label for="r">R:</label>
        <input type="text" id="r" name="r" maxlength="8">
    </div>
    <div class="check-btn">
        <input type="submit" value="Check">
    </div>
</form>
</body>
</html>
