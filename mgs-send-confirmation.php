<?php
	//Sender information (Change here according to your form field name)
	$senderto = $email;
	$fstname = (isset($fname)) ? ' '.$fname : '';
	$lstname = (isset($lname)) ? ' '.$lname : '';
	$sendername = $fstname.$lstname;
	
	//Subject (Change here)
	$subject = "yoursite.com - We have received your Request";
	
	//prepare email body (Change here)
	$body_message = "Hi". $sendername .",\n\n";
	$body_message .= "Thank you for getting in touch!\n
We appreciate you contacting us. One of our customer happiness members will be getting back to you shortly.\n
Thanks in advance for your patience.\n
Have a great day!\n\n";
	$body_message .= "Regards,\n";
	$body_message .= "Yoursite Team";
	
	//from email address and name (Change here)
	$headers = 'From: yoursite Contact person <emailid@yoursite.com>' . "\r\n" .
					'Reply-To: emailid@yoursite.com';
	
	$sendconf = mail($senderto, $subject, $body_message, $headers);
?>
