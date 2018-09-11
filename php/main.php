<?php
    $href = 'https://carpshop.ru/';
    $page = file_get_contents($href);
    if (preg_match_all('/<div class="ty-grid-list__item-name">(.*?)<\/div>/', $page, $matches, PREG_PATTERN_ORDER)) {
        $result = count($matches);
        for($i=0;$i<$result;$i++) {
            $result_inner = count($matches[$i]);
            for($j=0;$j<$result_inner;$j++) {
                echo $matches[$i][$j];
                echo '<hr>';
            }            
            break;
        }
    }
    
//    if (preg_match_all('/<div class="ty-grid-list__item-name">(.*?)<\/a>[^*]<\/div>[^*]/', $page, $matches, PREG_SET_ORDER)) {
//        foreach($matches as $key => $match) {
//            print_r($matches);
//            break;
//        }
//    }
?>