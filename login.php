<?php

session_start();
$username = $_POST['username'];
$password = $_POST['password'];
if ($username&&password)
{
	$connect = mysql_connect("localhost","root","ceremony") or die("could not connect to the database!");
	mysql_select_db("login") or die ("coudlnt find database");

	$query = mysql_query("SELECT * FROM users WHERE username= '$username'");
	$numrouws = mysql_num_rows($query);

	if ($numrouws!==0)
{
	while ($row = mysql_fetch_assoc($query))
	{
		$dbusername = $row['usename'];
		$dbpassword = $row['password'];
	}
if ($username==$dbusername&&md5($password)==$dbpassword)
{
echo "you are logged in!";
$SESSION ['username'] = $username;
else
	echo "your password is incorrect!";
}

else 
	die("that user doesnt exist!");


}
else 
	die("please enter a username and a password!");
?>