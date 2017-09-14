<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>File Access</title>
</head>
<body>
<form action="<%=request.getContextPath() %>/filedownload" method="post">
<table border="1">
<tr><td>File URL</td><td><input type="text" name="file_location" /></td></tr>
<tr><td><input type="reset" value="Reset Form" /></td><td><input type="submit" value="Access File" /></td></tr>
</table>
</form>
</body>
</html>