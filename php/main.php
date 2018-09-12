<?php
    echo '<h3 style="font-size: 26px;">КАРПОШОП</h3>';
    echo '<hr>';
    echo '<h3>В наличии</h3>';
    $get = file_get_contents('https://carpshop.ru/palatki-i-sheltery/palatka-fox-royale-euro-dome-odnomestnaya/');
    preg_match('/sec_discounted_price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Отображение страницы другого вида</h3>';
    $get = file_get_contents('https://carpshop.ru/pitanie/pelets/mini-halibut-pellets-ccmoore-melkiy-pellets-so-vkusom-paltusa/');
    preg_match('/ty-price(.*?)>(.*?)>(.*?)<span class="ty-price-num">(.*?)<span>(.*?)<\/span>(.*?)<\/span></', $get, $match);
    if(!empty($match[5])) {
        echo 'Цена: '. $match[5].PHP_EOL .'<br>';
    }
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Нет в наличии</h3>';
    $get = file_get_contents('https://carpshop.ru/katushki/spodovye/katushka-avid-carp-air-range-spod/');
    preg_match('/sec_discounted_price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    // available
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
//////////////////////////////////////  site 2  //////////////////////////////////////
    echo '<br>';
    echo '<hr>';
    echo '<br>';
    //One page
    echo '<h3 style="font-size: 26px;">КАРПТАЙМ</h3>';
    echo '<hr>';
    echo '<h3>В наличии</h3>';
    $get = file_get_contents('https://carptimeshop.ru/palatki-ukrytiya-zonty/aksessuary-i-komplektuyuschie/campmor-dopolnitelnyy-pol-iz-pvh-3h3m/');
    preg_match('/sec_discounted_price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Отображение страницы другого вида</h3>';
    $get = file_get_contents('https://carptimeshop.ru/zabota-o-karpe/fox-karpovyy-mat-easy-mat/');
    preg_match('/price_modif(.*?)>(.*?)<span>(.*?)<\/span>(.*?)<\/span></is', $get, $match);
    if(!empty($match[3])) {
        echo 'Цена: '. $match[3].PHP_EOL .'<br>';
    }
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Нет в наличии</h3>';
    $get = file_get_contents('https://carptimeshop.ru/katushki/katushki/s-baytranerom/big-feeder-950-rear-drag-katushka-fidernaya-s-baytranerom/');
    preg_match('/sec_discounted_price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    // available
    if(preg_match('/ty-qty-in-stock/', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
//////////////////////////////////////  site 3  //////////////////////////////////////
    echo '<br>';
    echo '<hr>';
    echo '<br>';
    //One page
    echo '<h3 style="font-size: 26px;">www.fishing-rod</h3>';
    echo '<hr>';
    echo '<h3>В наличии</h3>';
    $get = file_get_contents('http://www.fishing-rod.ru/dlya_soma/povodkovye_materialy/madcat/cat_cable/');
    preg_match('/price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    if(preg_match('/в&nbsp;наличии/is', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Отображение страницы другого вида</h3>';
    $get = file_get_contents('http://www.fishing-rod.ru/catalog/karpovye_udilisha/delphin/apollo_spod_390cm/10881443/');
    preg_match('/Цена<\/td>(.*?)<td>(.*?)</is', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    if(preg_match('/Наличие<\/td>(.*?)<td>в наличии</is', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
    echo '<hr>';
    echo '<h3>Нет в наличии</h3>';
    $get = file_get_contents('http://www.fishing-rod.ru/primanki/blesny/zimnie_blesna/rapala/sm_pirken_glow/57302349/');
    preg_match('/price(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    if(preg_match('/в&nbsp;наличии/is', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
//////////////////////////////////////  site 4  //////////////////////////////////////
    echo '<br>';
    echo '<hr>';
    echo '<br>';
    //One page
    echo '<h3 style="font-size: 26px;">mistercarp.ru</h3>';
    echo '<hr>';
    echo '<h3>В наличии</h3>';
    $get = file_get_contents('http://mistercarp.ru/catalog/zimnyaya_rybalka/zimnie_udochki_ruchnoy_raboty/udochka_oblegchennaya_silovaya_d72/');
    preg_match('/price_value(.*?)>(.*?)</', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
    echo '<hr>';
    echo '<h3>Отображение страницы другого вида</h3>';
    $get = file_get_contents('http://mistercarp.ru/catalog/karpovaya_lovlya/byt_na_rybalke/vesy/reuben_heaton_vesy_specimen_hunter_4000_series/');
    preg_match('/values_wrapper(.*?)>(.*?)</is', $get, $match);
    if(!empty($match[2])) {
        echo 'Цена: '. $match[2].PHP_EOL .'<br>';
    }
//////////////////////////////////////  site 5  //////////////////////////////////////
    echo '<br>';
    echo '<hr>';
    echo '<br>';
    //One page
    echo '<h3 style="font-size: 26px;">carptackle</h3>';
    echo '<hr>';
    echo '<h3>В наличии</h3>';
    $get = file_get_contents('https://www.carptackle.ru/gruzila/fox/camotex-swivel-distance-3-5oz-100gm-gruzilo-dlya-dalnego-zabrosa/');
    preg_match('/<span>Цена:</span>(.*?)(.*?)(.*?)(.*?)</', $get, $match);
    if(!empty($match[3])) {
        echo 'Цена: '. $match[3].PHP_EOL .'<br>';
    }
    if(preg_match('/в&nbsp;наличии/is', $get)) {
        echo 'Наличие: 1'; // true
    }
    else {
        echo 'Наличие: 0'; // false
    }
?>