<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sollicitatie</title>

    <style>
        * {
            margin: 0 0;
            padding: 0 0;
        }
        body {
            width: 90%;
            margin: auto;
            padding: 2% 5%;   
        }
        header {
            width: 92%;
            margin: auto;
        }
        .name {
            border-bottom: 1px solid #116177;
        }
        h1, h2 {
            padding: .2rem 0;
            color: #116177;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 300;
            font-size: 1.6rem;
        }
        h2 {
            font-weight: 300;
        }
        h1 {
            font-size: 1.2rem;
            text-align: right;
        }
        .compHeader {
            width: 80%;
            margin: 4rem auto 0 auto;
            padding: .8rem 2% 1.4rem 2%;
            border-right: 1px solid lightgray;
        }
        .company {
            margin: 2% 0 4% 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 300;
            font-size: 1.4rem;            
            text-align: right;
        }
        .firmAddress, 
        .firmTown {
            margin: 0 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 300;
            font-size: 1rem;
            text-align: right;
        }
        .content {
            width: 80%;
            margin: 0 auto 4rem auto;
            padding: 6% 2%;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 300;
            font-size: .9rem;
            line-height: 1.3rem;
            border-top: 1px solid lightgray;
            border-left: 1px solid lightgray;
        }
        .letter {
            padding: 1rem 2%;
        }
        .letter .text .addressment {
            width: 100%;
            padding: 0 0 1rem 0;
        }
        .letter .text .paragraph {
            width: 100%;
            padding: 0 0 .5rem 0;
        }
        .letter .greatings {
            width: 100%;
            padding: .8rem 0 0 0;
        }
        .letter .greatings .myName {
            width: 100%;
            padding: .5rem 0 0 0;
        }
        .myInfo {
            width: 92%;
            margin: auto;
            padding: 0 0;
        }
        .myInfo .titleRow,
        .myInfo .infoRow {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 1.2rem;
            margin: 0 0;
            padding: .4rem 0;
        }
        .myInfo .titleRow {
            border-bottom: 1px solid #116177;
        }
        .myInfo .titleRow .mail,
        .myInfo .titleRow .tel,
        .myInfo .titleRow .portfolio {
            width: 40%;
            margin: 0 auto;
            padding: 0 0;
            color: #116177;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 400;
            font-size: .9rem;
            text-align: right;
        }
        .myInfo .titleRow .mail {
            text-align: left;
        }
        .myInfo .titleRow .tel {
            width: 20%;
        }
        .myInfo .infoRow .myMail,
        .myInfo .infoRow .myTel,
        .myInfo .infoRow .myPF {
            width: 40%;
            margin: 0 0;
            padding: .2rem 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 300;
            font-size: .7rem;
            text-align: right;
        }
        .myInfo .infoRow .myMail {
            text-align: left;
        }
        .myInfo .infoRow .myTel {
            width: 20%;
        }
        .myInfo .infoRow a {
            width: 100%;
            color: rgb(36, 168, 204);
            text-decoration: none;
        }
    </style>
</head>
<body>
    <header>
        <div class="name">
            <h2>Jeroen De Vos</h2>
        </div>
        <div class="function">
            <h1>Graphic & web designer</h1>
        </div>
    </header>
    <header class="compHeader">
        <p class="company">
            Oetang
        </p>
        <p class="firmAddress">
            Mooie straat 222
        </p>
        <p class="firmTown">
            9999 Mooidorp
        </p>
    </header>
    <main class="content">
        <section class="letter">
            <article class="text">
                <p class="addressment">
                    Beste Hr, Mevr,
                </p>
                <p class="paragraph">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem commodi 
                    modi fugit pariatur ducimus ipsa quibusdam atque, voluptatibus quam hic, porro 
                    quidem, nihil ea eveniet quaerat. Voluptatum, aperiam!
                </p>
                <p class="paragraph">
                    Pariatur maxime vel perferendis sit, optio porro ipsum? Doloribus tempore 
                    veritatis doloremque id accusantium minima. Itaque deserunt incidunt tempore, 
                    eos cum reprehenderit ipsum quos deleniti beatae neque ratione ut nostrum, 
                    quidem minus autem asperiores iusto quis quisquam odio blanditiis impedit 
                    officiis ab amet. Libero neque, ut nostrum maxime nisi aliquam mollitia totam 
                    laudantium illo, deserunt quisquam, facere accusantium.
                </p>
                <p class="paragraph">
                    Ipsa at nisi minus libero rerum, atque fuga illo earum perspiciatis! 
                    Quod quo expedita magni sequi laudantium est aut sunt delectus voluptates, 
                    corrupti recusandae dolorem in accusantium, voluptatem doloremque, placeat 
                    deleniti a accusamus beatae eius aliquid. Laboriosam, at consectetur quae enim, 
                    fuga aperiam impedit doloribus explicabo pariatur praesentium nihil nemo veniam, 
                    itaque eius nisi laborum ut animi quos repellendus non dolor eligendi necessitatibus.
                </p>
                <p class="paragraph">
                    Fugit quod tempore eos in, vel ducimus aperiam aspernatur. Nam dicta obcaecati 
                    expedita sequi voluptatum mollitia, qui ratione suscipit optio, iste veniam 
                    repellendus cum consequuntur eos velit hic officia facere nemo quo?
                </p>
            </article>
            <footer class="greatings">
                <p>Met vriendelijke groeten,</p>
                <p class="myName">Jeroen De Vos</p>
            </footer>
        </section>
    </main>
    <footer class="myInfo">
        <div class="titleRow">
            <h4 class="mail">EMAIL</h4>
            <h4 class="tel">TELEFOON</h4>
            <h4 class="portfolio">PORTFOLIO</h4>
        </div>
        <div class="infoRow">
            <p class="myMail"><a href="mailto:jdv.editing@gmail.com">jdv.editing@gmail.com</a></p>
            <p class="myTel">0485 577 73 91</p>
            <p class="myPF"><a href="https://jeroen-editing.github.io/MyPortfolio/index.html">https://jeroen.../MyPortfolio</a></p>
        </div>
    </footer>
</body>
</html>