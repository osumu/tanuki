function getScenario() {

  return [
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "ぼくはたぬき。どこにでもいるふつうのたぬき。\n今日は友達のひよこ、ねこと山の中をさんさくしている。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "しばらく歩いていると、ふいに パーン パパーン と音がした。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "たぬき、ひよこ、ねこ",
      text: "「？」「？」「？」\nみんなで首をかしげた。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "ひよこ",
      text: "「なんだろう？」"
    },
    {
      type: "message1",
      image: "test.png",
      name: "ねこ",
      text: "「おばけ！？」"
    },
    {
      type: "message1",
      image: "test.png",
      name: "たぬき",
      text: "「音がしたほうに行ってみる？」"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "みんな怖そうだけれど、行くことにした。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "しばらく歩くと、小屋が見えた。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "たぬき",
      text: "（あれは...？）"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "何かが動いた！\n\n\nまた動いた。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "好奇心がおさえられなくて、近づいてみた。"
    },
    {
      type: "message1",
      image: "test.png",
      name: "たぬき、ひよこ、ねこ",
      text: "（あっ！）\n\n誰か小屋から出てきた！\nねこが何かにとびついた！"
    },
    {
      type: "message1",
      image: "test.png",
      name: "？？",
      text: "パーン！！"
    },
    {
      type: "message1",
      image: "test.png",
      name: "たぬき",
      text: "「うっ！」"
    },
    {
      type: "message1",
      image: "test.png",
      name: "解説",
      text: "続く"
    },
    {
      type: "choice",
      image: "test.png",
      name: "解説",
      text: "選択が出た！",
      choices: [
        {
          text: "話を聞く",
          jump: "talkRoute"
        },
        {
          text: "立ち去る",
          jump: "leaveRoute"
        }
      ]
    },

    {
      label: "talkRoute"
    },

    {
      type: "message1",

      image: "test.png",

      name: "少女",

      text: "森では最近、魔物が増えているんです..."
    },

    {
      type: "message2",

      image: "test.png",

      name: "勇者",

      text: "なるほど。気をつけよう。"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "森へ向かう",

          jump: "forestRoute"
        },

        {
          text: "村へ戻る",

          jump: "villageRoute"
        }

      ]
    },

    /*
      森ルート
    */
    {
      label: "forestRoute"
    },

    {
      type: "message1",

      image: "test.png",

      name: "SYSTEM",

      text: "魔物が現れた！"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "戦う",

          jump: "battleEnd"
        },

        {
          text: "逃げる",

          jump: "runEnd"
        }

      ]
    },

    /*
      村ルート
    */
    {
      label: "villageRoute"
    },

    {
      type: "message2",

      image: "test.png",

      name: "SYSTEM",

      text: "あなたは村へ戻った。"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "タイトルへ",

          jump: "title"
        }

      ]
    },

    /*
      戦闘終了
    */
    {
      label: "battleEnd"
    },

    {
      type: "message2",

      image: "test.png",

      name: "SYSTEM",

      text: "魔物を倒した！"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "タイトルへ",

          jump: "title"
        }

      ]
    },

    /*
      逃走終了
    */
    {
      label: "runEnd"
    },

    {
      type: "message2",

      image: "test.png",

      name: "SYSTEM",

      text: "あなたは逃げ出した。"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "タイトルへ",

          jump: "title"
        }

      ]
    },

    /*
      立ち去るルート
    */
    {
      label: "leaveRoute"
    },

    {
      type: "message2",

      image: "test.png",

      name: "SYSTEM",

      text: "あなたは村を後にした。"
    },

    {
      type: "choice",

      image: "test.png",

      choices: [

        {
          text: "タイトルへ",

          jump: "title"
        }

      ]
    }

  ];

}