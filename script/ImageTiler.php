<?php
define("MAX_ALLOWED_IMAGE_WIDTH",30000);
ini_set("memory_limit","256M");

$folderName = "eslik";
$fileName = 'eslik';
$extensionName = 'png';
$width = 750;
$height = 170;
$count = 101;


$modulerNumber = floor(MAX_ALLOWED_IMAGE_WIDTH / $width);
$newImage = imagecreatetruecolor($width*$modulerNumber, ceil($count / $modulerNumber) * $height);
for($i=0; $i<$count; $i++){
    $temp = imagecreatefrompng($folderName . '/' . $fileName . $i . '.' . $extensionName);
    $d_x = ($i % $modulerNumber) * $width; 
    $d_y = floor($i / $modulerNumber) * $height;
    imagecopymerge($newImage, $temp, $d_x, $d_y , 0, 0, $width, $height, 100) ;
}


//imagepng($newImage, $folderName.'.'.$extensionName);
imagejpeg($newImage, $folderName.'.jpg');
