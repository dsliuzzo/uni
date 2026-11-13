<html>

    <body>
        <H2>
            JSP Expressions
        </H2>
        <ul>
            <li>Current time: <%= new java.util.Date()%></li>
            <li>Your hostName: <%= request.getRemoteHost() %></li>
            <li>Your session ID: <%= session.getId()%></li>
            <li>The <code>testParam</code> form parameter: <%= request.getParameter("testParam")%></li>
        </ul>

    </body>

</html>