<?php 
	$name = $_POST['nameProject'];
	$data = array();


	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя!';
	}else {
		$data['status'] = 'OK';
		$data['text'] = 'Спасибо, что заполнили все поля!';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

 ?>
