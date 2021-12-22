<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title>Palmo Helloe world</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#fafafa">
</head>

<body style="margin: 0;">

<!-- Add your site or application content here -->
<!--<main style="display: flex; justify-content:center; margin-top: 25px;">-->
<!--    <img src="palmo.jpg" alt="">-->
<!--</main>-->
<?php
$name = 'Вячеслав.';
echo 'Меня зовут, ',$name, "<br/>";
$a = '8';
$b = '1';
$newA = (integer)$a;
$newB = (integer)$b;
echo $newA * $newB, "<br/>", $newA - $newB, "<br/>", $newA + $newB, "<br/>", $newA / $newB, "<br/>", $newA % $newB, "<br/>";
$number = '5';
$result = (integer)$number ** 3;
echo $result, "<br/>";
$age = '61';
$nemAge = (integer)$age;
if ($nemAge > 18 && $nemAge < 60){
    echo 'Вам еще работать и работать!', "<br/>";
} elseif ($nemAge < 18){
    echo 'Вам еще рано работать', "<br/>";
} elseif ($nemAge > 60){
    echo 'Пора отдыхать', "<br/>";
}
$dayNumber = '9';
$newDayNumber = (integer)$dayNumber;
if ($newDayNumber >= 1 && $newDayNumber <= 5){
    echo 'это рабочий день', "<br/>";
} elseif ($newDayNumber >= 6 && $newDayNumber <= 7){
    echo 'это выходной день', "<br/>";
} else echo 'проверьте правильность дня', "<br/>";
const DAYS_COUNT = '7';
echo DAYS_COUNT, "<br/>";
define('MONTH_COUNT', '12');
echo MONTH_COUNT, "<br/>";
$number1 = '12';
$number2 = '6';
if ($number1 == $number2){
    echo 'Сумма чисел равна ', $number1 + $number2, "<br/>";
} else echo 'разница чисел равна ', $number1 - $number2, "<br/>";

$randomNum = mt_rand(1, 100);
$parityNum = $randomNum % 2;
if ($parityNum == 0){
    echo 'Это чётное число ', $randomNum;
}else
echo 'Это нечётное число ', $randomNum;
?>
</body>

</html>
<?php
//phpinfo();
