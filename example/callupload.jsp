<!DOCTYPE html>
<html>
<head>
    <%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
    <meta charset="utf-8">
    <title>上传</title>

    <script src="/src/meui/modules/jquery.js" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript">
    var msg = '${msg}';
    $(function () {
        window.parent.postMessage(msg, '*');
    });
</script>
</body>
</html>

