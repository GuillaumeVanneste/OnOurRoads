</main>
<!-- FOOTER -->
<footer class="page-footer <?php echo $page ?> black">
    <?php if ($page !== 'home') : ?>
        <div class="buttons">
            <div class="row">
                <div class="col s6 m3 offset-m1">
                    <a href="<?php echo URL ?>">Retour à l'accueil</a>
                </div>
                <div class="col s5 m3 offset-m5 right">
                    <a href="<?php echo URL ?>#8thPage">Changer d'histoire</a>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div class="progress">
        <div class="keypoints">
            <a href="#firstPage"><div data-menuanchor="firstPage" class="borderChange active firstPage"></div></a>
            <a href="#secondPage"><div data-menuanchor="secondPage" class="secondPage"></div></a>
            <a href="#3rdPage"><div data-menuanchor="3rdPage" class="thirdPage"></div></a>
            <a href="#4thPage"><div data-menuanchor="4thpage" class="fourthPage"></div></a>
            <?php if ($page === 'home') : ?>
                <a href="#5thPage"><div data-menuanchor="5thPage" class="fifthPage"></div></a>
                <a href="#6thPage"><div data-menuanchor="6thPage" class="sixthPage"></div></a>
                <a href="#7thPage"><div data-menuanchor="7thPage" class="seventhPage"></div></a>
                <a href="#8thPage"><div data-menuanchor="8thPage" class="eighthPage"></div></a>
            <?php elseif ( $page === 'organe') : ?>
                <a href="#5thPage"><div data-menuanchor="5thPage" class="fifthPage"></div></a>
            <?php elseif ( $page === 'migrant' ) : ?>
                <a href="#5thPage"><div data-menuanchor="5thPage" class="fifthPage"></div></a>
                <a href="#6thPage"><div data-menuanchor="6thPage" class="sixthPage"></div></a>
            <?php endif; ?>
        </div>
        <div class="fillBar"></div>
    </div>
    <div class="row">
        <div class="col s7 push-s1 m4 push-m1 chapter">
            <span class="number"></span>
            <span class="chapterTitle"></span>
        </div>
        <div class="col s2 push-s2 m1 push-m6 center-align">
            <a class="waves-light waves-effect volume"><img src="assets/images/icons/speaker.png" alt=""></a>
        </div>
    </div>
</footer>
<audio class="backgroundSound" src="<?php echo URL ?>assets/audios/backgroundSound.mp3" allow="autoplay" loop></audio>
<audio class="voixOff" src="<?php echo URL ?>assets/audios/voixOff.m4a"></audio>
<!-- SCRIPTS -->
<!-- Jquery library for fullpagejs -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Fullpagejs scripts -->
<script src="<?php echo URL ?>assets/fullpagejs/vendors/jquery.easings.min.js"></script>
<script type="text/javascript" src="<?php echo URL ?>assets/fullpagejs/vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="<?php echo URL ?>assets/fullpagejs/jquery.fullPage.js"></script>
<script type="text/javascript" src="<?php echo URL ?>assets/scripts/fullpage.js"></script>
<!-- Parallax Script -->
<script type="text/javascript" src="<?php echo URL ?>assets/scripts/CursorParallax.js"></script>
<!-- Main script -->
<script type="text/javascript" src="<?php echo URL ?>assets/scripts/main.js"></script>
</body>
</html>