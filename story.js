function getScenario() {
    return [
        { label: "prologue" }, { type: "message1", image: "test.png", name: "解説", text: "ぼくはたぬき。どこにでもいるふつうのたぬき。\n今日は友達のひよこ、ねこと山の中をさんさくしている。" }, { type: "message1", image: "test.png", name: "解説", text: "しばらく歩いていると、ふいに パーン パパーン と音がした。" }, { type: "message1", image: "test.png", name: "たぬき、ひよこ、ねこ", text: "「？」「？」「？」\nみんなで首をかしげた。" }, { type: "message1", image: "test.png", name: "ひよこ", text: "「なんだろう？」" }, { type: "message1", image: "test.png", name: "ねこ", text: "「おばけ！？」" }, { type: "message1", image: "test.png", name: "たぬき", text: "「音がしたほうに行ってみる？」" }, { type: "message1", image: "test.png", name: "解説", text: "みんな怖そうだけれど、行くことにした。" }, { type: "message1", image: "test.png", name: "解説", text: "しばらく歩くと、小屋が見えた。" }, { type: "message1", image: "test.png", name: "たぬき", text: "（あれは...？）" }, { type: "message1", image: "test.png", name: "解説", text: "何かが動いた！\n\nまた動いた。" }, { type: "message1", image: "test.png", name: "解説", text: "好奇心がおさえられなくて、近づいてみた。" }, { type: "message1", image: "test.png", name: "たぬき、ひよこ、ねこ", text: "（あっ！）\n\n誰か小屋から出てきた！\nねこが何かにとびついた！" }, { type: "message1", image: "test.png", name: "？？", text: "パーン！！" }, { type: "message1", image: "black.png", name: "たぬき", text: "「うっ！」" }, { type: "choice", image: "black.png", name: "タイトルへ", text: "", choices: [{ text: "タイトルへ", jump: "htmlTitle" }] },
        { label: "startGame" }, { type: "message1", image: "black.png", name: "たぬき", text: "「んん？」「あっ！」\n（ここはどこ？ぼくはどうしたの？）\n（ひよことねこはどこ？）\n\n あ 思い出した！" },
        {
            type: "choice",
            image: "test.png",
            name: "たぬき",
            text: "「呪ってやろうかな？ でも一生友達だよって言ったし...」",
            choices: [
                {
                    text: "呪う",
                    jump: "curse"
                },
                {
                    text: "呪わない",
                    jump: "ncurse"
                }
            ]
        },
        {
            type: "choice",
            image: "test.png",
            name: "最後の選択へ",
            choices: [
                {
                    text: "最後の選択へ",
                    jump: "saigo"
                }
            ]
        },

        {
            label: "curse"
        },
        {
            type: "message1",
            image: "test.png",
            name: "たぬき",
            text: "呪うことにした。"
        },

        {
            type: "message2",
            image: "test.png",
            name: "??",
            text: "何か入力..."
        },

        {
            label: "ncurse"
        },
        {
            type: "message1",
            image: "test.png",
            name: "たぬき",
            text: "呪わないことにした。"
        },
        {
            type: "choice",
            image: "test.png",
            name: "よし！やっぱり呪うぞ！",
            choices: [
                {
                    text: "呪う",
                    jump: "curse"
                }
            ]
        },
        { label: "saigo" },
        {
            type: "choice",
            image: "test.png",
            name: "最後の選択",
            text: "?",
            choices: [
                {
                    text: "呪う",
                    jump: "curse2"
                },
                {
                    text: "呪わない",
                    jump: "nocurse"
                }
            ]
        },

        {
            label: "nocurse"
        },
        {
            type: "message1",
            image: "test.png",
            name: "?",
            text: "何か入力..."
        },
        {
            label: "curse2"
        },
        {
            type: "message2",
            image: "test.png",
            name: "?",
            text: "呪うことにした"
        },

        {
            type: "choice",
            image: "test.png",
            name: "選択",
            choices: [
                {
                    text: "タイトルへ",
                    jump: "title"
                }
            ]
        },
    ];
}