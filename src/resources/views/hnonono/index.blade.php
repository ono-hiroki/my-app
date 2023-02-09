<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/images/turu.png">
    <meta content="大野の個人サイト、折り紙、プログラミング、数学に関する情報" name="description">
    <meta name="author" content="大野">
    <meta name="keywords" content="大野,プログラミング,折り紙,数学,おりがみ,ののの">
    <title>おーのののーと</title>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script data-ad-client="ca-pub-8492062054716006" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    @viteReactRefresh
    @vite(['resources/css/nonono/style.css'])
{{--    @vite(['resources/css/reset.css'])--}}
</head>

<body>
<div id="home" class="big-bg">
    <div id="header"></div>
{{--    <script>--}}
{{--        $(function() {--}}
{{--            $("#header").load("/common/header.html");--}}
{{--        });--}}

{{--    </script>--}}
    <div class="home-content wrapper">
        <h2 class="page-title">おーのののーと</h2>
        <p>略して「ののの」</p>
        <p>自分でサイト作成・写真・折り紙・折り図など全部つくってるよん</p>
    </div>
</div>
<div class="news-contents wrapper">
    <article>

        <div class="sub-title main-title">サイト一覧</div>
        <div class="grid">
            <div class="item"><a href="https://origami.hnonono.com/">
                    <img src="images/A5.jpg" alt="お気に入りのつる">
                    <p style="text-align: center"><i class="fas fa-caret-right"></i> おりがみのサイト</p>
                    <p class="mini">折り図・写真を自分で作ってるよん</p>
                </a>
            </div>
            <div class="item"><a href="https://math.hnonono.com/index.html">
                    <img src="/images/A12.JPG" alt="カエル">
                    <p style="text-align: center"><i class="fas fa-caret-right"></i> 数学のサイトへ</p>
                    <p class="mini">工事中！きっと備忘録です</p>
                </a>
            </div>
            <div class="item"><a href="#">
                    <img src="/images/A1.jpg" alt="PG">
                    <p><i class="fas fa-caret-right"></i>プログラミング</p>
                    <p class="mini">工事中！きっと備忘録</p>
                </a>
            </div>
            <div class="item"><a href="#">
                    <img src="/images/A38.png" alt="くす玉">
                    <p style="text-align: center">くす玉</p>
                    <p class="mini">この子(くす玉)かわいいよね</p>
                </a>
            </div>
        </div>

    </article>
    <aside>
        <div style="margin-top: 20px;" id="aside"></div>
    </aside>
</div>
<div id="footer"></div>
<script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
{{--<script>--}}
{{--    $(function() {--}}
{{--        $("#aside").load("/common/aside.html");--}}
{{--        $("#footer").load("/common/footer.html");--}}
{{--    });--}}

{{--</script>--}}
</body>

</html>
