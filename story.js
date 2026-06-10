function getScenario() {
    return [
        { label: "prologue" }, { type: "message1", image: "test.png", name: "解説", text: "ぼくはたぬき。どこにでもいるふつうのたぬき。\n今日は友達のひよこ、ねこと山の中をさんさくしている。" }, { type: "message1", image: "test.png", name: "解説", text: "しばらく歩いていると、ふいに パーン パパーン と音がした。" }, { type: "message1", image: "test.png", name: "たぬき、ひよこ、ねこ", text: "「？」「？」「？」\nみんなで首をかしげた。" }, { type: "message1", image: "test.png", name: "ひよこ", text: "「なんだろう？」" }, { type: "message1", image: "test.png", name: "ねこ", text: "「おばけ！？」" }, { type: "message1", image: "test.png", name: "たぬき", text: "「音がしたほうに行ってみる？」" }, { type: "message1", image: "test.png", name: "解説", text: "みんな怖そうだけれど、行くことにした。" }, { type: "message1", image: "test.png", name: "解説", text: "しばらく歩くと、小屋が見えた。" }, { type: "message1", image: "test.png", name: "たぬき", text: "（あれは...？）" }, { type: "message1", image: "test.png", name: "解説", text: "何かが動いた！\n\nまた動いた。" }, { type: "message1", image: "test.png", name: "解説", text: "好奇心がおさえられなくて、近づいてみた。" }, { type: "message1", image: "test.png", name: "たぬき、ひよこ、ねこ", text: "（あっ！）\n\n誰か小屋から出てきた！\nねこが何かにとびついた！" }, { type: "message1", image: "test.png", name: "？？", text: "パーン！！" }, { type: "message1", image: "black.png", name: "たぬき", text: "「うっ！」" }, { type: "choice", image: "black.png", name: "タイトルへ", text: "", choices: [{ text: "タイトルへ", jump: "htmlTitle" }] },
        { label: "startGame" }, { type: "message1", image: "black.png", name: "たぬき", text: "「んん？」「あっ！」\n（ここはどこ？ぼくはどうしたの？）\n（ひよことねこはどこ？）\n\n あ 思い出した！" },
        { type: "message1", image: "black.png", name: "たぬき", text: "（何か変なものに当たって...　\nあの時ねこが何かに飛びついたとき... \nそういえばここは、なんにもない。まさか、天国に行く道？）" },
        { type: "message1", image: "black.png", name: "たぬき", text: "（そうだ！！ぼくは死んでしまったんだ！）" },
        { type: "message1", image: "black.png", name: "たぬき", text: "「ん？」" },
        { type: "message1", image: "tv.gif", name: "たぬき", text: "コンピューターが現れた！\nさっき死ぬときの映像だ。" },
        { type: "message1", image: "test.png", name: "たぬき", text: "よく見ると...\nこれは銃だ！" },
        { type: "message1", image: "test.png", name: "たぬき", text: "そういえばあの時、誰かの悲鳴と銃の玉がぶつかる感触がしたな。" },
        { type: "message1", image: "test.png", name: "たぬき", text: "そのあとの映像を見ると..." },
        { type: "message1", image: "test.png", name: "たぬき", text: "（ひよことねこが笑っている！？）" },
        { type: "message1", image: "test.png", name: "たぬき", text: "（ぼくのこと殺そうと、たくらんでいたんだ！！）" },
        {
            type: "choice",
            image: "test.png",
            name: "たぬき",
            text: "一生呪ってやろうかな？ でも一生友達だよって言った親友だし...",
            choices: [
                {
                    text: "呪う",
                    jump: "fcurse"
                },
                {
                    text: "呪わない",
                    jump: "fncurse"
                }
            ]
        },
        { label: "fncurse" },
        { type: "message1", image: "test.png", name: "たぬき", text: "呪わないことにした。" },
        { type: "message1", image: "test.png", name: "たぬき", text: "次に他の人の動画を見せられた。\nどうやら同じような死に方をした人の動画だ！" },
        { type: "message1", image: "test.png", name: "たぬき", text: "「んん？」\nこの人は呪ったのか..." },
        { type: "message1", image: "test.png", name: "たぬき", text: "また違う人の動画を見せられた。\n今見た動画の全員、殺した人を呪ってる！" },
        {
            type: "choice",
            image: "test.png",
            name: "たぬき",
            text: "この動画を見せるということは、呪えと言っているようなものだ。よし！やっぱり呪うぞ！",
            choices: [
                {
                    text: "呪う",
                    jump: "fcurse"
                },
                {
                    text: "呪う",
                    jump: "fcurse"
                }
            ]
        },
        { label: "fcurse" },
        { type: "message1", image: "test.png", name: "たぬき", text: "҉　҉パ҉ァ҉ァ҉　҉" },
        { type: "message1", image: "test.png", name: "たぬき", text: "「眠い...」\nめちゃくちゃ眠い..." },
        { type: "message1", image: "test.png", name: "たぬき", text: "（どうしよう？なんか温かい！？\n光につつまれている感じがする...？）" },
        { type: "message1", image: "test.png", name: "たぬき", text: "（どんどん眠気におそわれていく...\n違う場所に飛ばされる感じがする...\nいやな予感が...）" },
        { type: "message1", image: "test.png", name: "たぬき", text: "..." },
        { type: "message1", image: "black.png", name: "たぬき", text: "さあ、たぬきの行き先は..." },
        { type: "message1", image: "test.png", name: "たぬき", text: "「んん？」\n" },
        { type: "message1", image: "test.png", name: "たぬき", text: "また他のところに来たぞ！？\nまたモニターがある...\nまた呪うか呪わないか選択しろと！？\nよし、今回は..." },
    ];
};