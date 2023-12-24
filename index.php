<?php
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];


if(isset($_post['signup']))
{
    $host="localhost";
    $user="root"
    $password = "";
    $db="sign";
    @$conn = mysqli_connect($host,$user,$password,$db);
    $insert= "insert into sign values('$email','$password')"; 

if($conn)
{
    echo("<h1 style- 'color:green';> Your Registration is Done! </h1>")/;
}

else{
    echo("<h1 style- 'color:red';> Your Registration is Failed! </h1>")/;
}
}

?>