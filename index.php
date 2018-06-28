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

    case 'prostitution':
        $page = 'prostitution';
        break;

    case 'organe':
        $page = 'organe';
        break;

    case 'migrant':
        $page = 'migrant';
        break;

    default:
        $page = '404';
        break;
}

// Includes
include 'views/partials/header.php';
include 'views/pages/'.$page.'.php';
include 'views/partials/footer.php';