<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 25.09.2023
  Time: 14:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>This is graph component</title>
</head>
<body>
<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">

    <!-- Оси со стрелками -->
    <line stroke="gray" x1="0" x2="300" y1="150" y2="150"></line>
    <line stroke="gray" x1="150" x2="150" y1="0" y2="300"></line>
    <polygon fill="white" points="150,0 144,15 156,15" stroke="white"></polygon>
    <polygon fill="white" points="300,150 285,156 285,144" stroke="white"></polygon>

    <!-- Засечки -->
    <line stroke="gray" x1="200" x2="200" y1="155" y2="145"></line>
    <line stroke="gray" x1="250" x2="250" y1="155" y2="145"></line>

    <line stroke="gray" x1="50" x2="50" y1="155" y2="145"></line>
    <line stroke="gray" x1="100" x2="100" y1="155" y2="145"></line>

    <line stroke="gray" x1="145" x2="155" y1="100" y2="100"></line>
    <line stroke="gray" x1="145" x2="155" y1="50" y2="50"></line>

    <line stroke="gray" x1="145" x2="155" y1="200" y2="200"></line>
    <line stroke="gray" x1="145" x2="155" y1="250" y2="250"></line>

    <!-- Подписи к засечкам    -->
    <text fill="white" x="195" y="140">R/2</text>
    <text fill="white" x="248" y="140">R</text>

    <text fill="white" x="40" y="140">-R</text>
    <text fill="white" x="90" y="140">-R/2</text>

    <text fill="white" x="160" y="105">R/2</text>
    <text fill="white" x="160" y="55">R</text>

    <text fill="white" x="160" y="205">-R/2</text>
    <text fill="white" x="160" y="255">-R</text>

    <text fill="white" x="160" y="10">Y</text>
    <text fill="white" x="290" y="140">X</text>

    <!-- Прямоугольник (слева внизу) -->
    <rect x="100" y="150" width="50" height="100" fill="#FFFF00" fill-opacity="0.1" stroke="#FFFF00"></rect>

    <!-- Треугольник (справа снизу) -->
    <polygon fill="#0000FF" fill-opacity="0.1" points="150,250 150,150 200,150" stroke="#0000FF"></polygon>

    <!-- Полукруг (слева сверху) -->
    <path d="M 100 150 A 50 50, 0, 0, 1, 150 100 L 150 150 Z" fill="green" fill-opacity="0.1"
          stroke="#39FF14"></path>

    <!-- Центр оси координат -->
    <circle cx="150" cy="150" id="target-dot" r="0" stroke="white" fill="white"></circle>
</svg>
</body>
</html>
