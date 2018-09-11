<?php
    $name = "Elizabeth";
    $nameV = "John";
    $myArr = array(
    'age' => array('21','22','23','24'),
    'sex' => array('She','He'),
    'sexType' => array('woman', 'man'),
    'married' => false
    );
    $userWoman = 'echo "User $name is {$myArr[age][0]} years old. {$myArr[sex][0]} is very beautiful {$myArr[sexType][0]}.<br />"';
    $userMan = 'echo "User $nameV is {$myArr[age][3]} years old. {$myArr[sex][1]} is very beautiful {$myArr[sexType][1]}."';
?>