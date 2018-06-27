<?php
/**
 * Created by PhpStorm.
 * User: Guill
 * Date: 27/06/2018
 * Time: 09:48
 */

// Rooter
$q = empty($_GET['q']) ? '' : $_GET['q'];
$page = null;

switch($q) {
    case '':
        $page = 'home';
        break;

    case 'name':
        $page = 'name';
        break;

    case 'name2':
        $page = 'name2';
        break;

    case 'name3':
        $page = 'name3';
        break;

    default:
        $page = '404';
        break;
}

// Includes
include 'views/partials/header.php';
include 'views/pages/'.$page.'.php';
include 'views/partials/footer.php';