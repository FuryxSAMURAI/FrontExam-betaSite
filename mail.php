<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$street = $_POST['user_street'];
$home = $_POST['user_home'];
$plate = $_POST['user_plate'];
$homeNum = $_POST['user_homeNum'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';                   // Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'szaitsev000@ukr.net';        // логин от почты с которой будут отправляться письма
$mail->Password = 'KkWHw30ZZ4kOkPnQ';           // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                              // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('szaitsev000@ukr.net');        // от кого будет уходить письмо для пользователя
$mail->addAddress('szaitsev000@gmail.com');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');       // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                            // Установить формат электронной почты в HTML

$mail->Subject = $name . ', оформив замовлення.';
$mail->Body    = "Ім'я одержувача: " . $name . '<br>'. ' Номер телефону : ' . $phone . '<br>' . ' Вулиця де проживає одержувач : ' . $street  . '<br>' . ' Будинок : ' . $home . '<br>' . ' Поверх : ' . $plate . '<br>' . ' Номер кв. : ' . $homeNum;
// $mail->AltBody = 'Хотите получить больше бонусов переходите в личный кабинет.';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location:pages/thanksPur.html');
}
?>