<?php
    $m = isset($_GET['m']) ? $_GET['m'] : date('n');
    $time = mktime (0, 0, 0, $m, 1, date('Y'));
    $day_week = array(
        'Пн','Вт','Ср','Чт','Пт','Сб', 'Вс'
    );
    $dayofweek = date('w', mktime(0, 0, 0, date('m'), 0, date('Y')));
    $dayofweek = $dayofweek - 1;
    if($dayofweek == -1) $dayofweek = 6;
    $today = date('j');
    for($i = date('n'); $i <= 12; $i++) {
        $time = mktime (0, 0, 0, $i, 1, $year);
        $monthText .= date('F', $time);
        break;
    }
    function nextMonth() {
        for($monthNum = date('n'); $monthNum <= 12; $monthNum++) {
            $time = mktime (0, 0, 0, $i, 1, $year);
            $monthText .= date('F', $time);
            break;
        }
    }
    echo '<div class="calendar-holder"><div class="calendar-box">';
    echo '<div class="calendar-top">';
            echo '<a href="javascript:void(0)" class="calendar-prev"><img src="images/calendar-arrow.png" width="12" height="11" alt=""></a>';
            echo '<span class="calendar-month">' .$monthText. '</span>';
            echo '<a href="javascript:void(0)" class="calendar-next"><img src="images/calendar-arrow.png" width="12" height="11" alt=""></a>';
            echo '</div>';
      echo '<div class="calendar-content">';
      echo '<ul class="calendar-week-days">';
        for($i = 0; $i < 7; $i++) {
            echo '<li>'.$day_week[$i].'</li>';
        }
      echo '</ul>';
      echo '<ul class="calendar-days">';
      for($i = 0; $i <= 7; $i++) {
        if ($i > $dayofweek) {
            for($i =1; $i <= cal_days_in_month(CAL_GREGORIAN, $m, date('Y')); $i++) {
                if($i == $today) {
                    echo '<li class=today><a href=javascript:void(0)>'.$i.'</a></li>';
                }
                echo '<li><a href=javascript:void(0)>'.$i.'</a></li>';
            }
        }
        else {
            echo '<li>&nbsp;</li>';
        }
      }
    echo "</ul>";
    echo "</div></div></div>";
?>