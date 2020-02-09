<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
		
	//Sending Email from Local Web Server using PHPMailer			
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/Exception.php';
	require './vendor/autoload.php';
	//Create a new PHPMailer instance
	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	
	$smtpoption = true;		//Boolean true/false	true: email send using SMTP		false: email send using default
	if($smtpoption) {
		require 'phpmailer/src/SMTP.php';
		
		//Tell PHPMailer to use SMTP
		$mail->isSMTP();
		//Enable SMTP debugging
		// 0 = off (for production use)
		// 1 = client messages
		// 2 = client and server messages
		$mail->SMTPDebug = 2;
		//Ask for HTML-friendly debug output
		$mail->Debugoutput = 'html';
		//Set the hostname of the mail server (Change here)
		$mail->Host = "smtp.gmail.com";
		//Set the SMTP port number - likely to be 25, 465 or 587 (Change here)
		$mail->Port = 465;
		//open tls if you use as like for gmail
		//$email->SMTPSecure = 'tls';
		//Whether to use SMTP authentication
		$mail->SMTPAuth = true;
		//Username to use for SMTP authentication (Change here)
		$mail->Username = "dontrellknight@gmail.com";
		//Password to use for SMTP authentication (Change here)
		$mail->Password = "KNight1990$";
		
	}
	
	//From email address and name (Change here)
	$mail->From = $email;
	$mail->FromName = $fname;
	
	//Recipient address and name (Change here)
	$mail->addAddress("dontrellknight@gmail.com", "Dontrell Washington");
	
	$usercopy = (isset($_POST["usercopy"])) ? filter_var($_POST['usercopy'], FILTER_SANITIZE_NUMBER_INT) : 0;
	if($usercopy){
		$mail->addAddress($email, $fname);
	}
	
	//Set true if want to send Confirmation email to sender
	$mgssendconfirmation = false;	//Boolean true/false	true: Confirmation email will send to sender	false: Confirmation email will not send to sender
	
	//Address to which recipient will reply
	$mail->addReplyTo($email, $fname);
	
	//Send HTML or Plain Text email
	$mail->isHTML(true);
	
	function get_client_ip() {
		$ipaddress = '';
		if (isset($_SERVER['HTTP_CLIENT_IP']))
			$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
		else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_X_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
			$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		else if(isset($_SERVER['HTTP_FORWARDED']))
			$ipaddress = $_SERVER['HTTP_FORWARDED'];
		else if(isset($_SERVER['REMOTE_ADDR']))
			$ipaddress = $_SERVER['REMOTE_ADDR'];
		else
			$ipaddress = 'UNKNOWN';
		return $ipaddress;
	}
	
?>
