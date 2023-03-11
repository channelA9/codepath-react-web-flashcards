import React from "react";

let cards = [
  {
    term: "一",
    main: "one",
    sub: "ひと ひとつ,イチ",
    JLPT: "N5"
  },
  {
    term: "ニ",
    main: "two",
    sub: "ふた ふたつ,ニ",
    JLPT: "N5"
  },
  {
    term: "三",
    main: "three",
    sub: "み みつ,サン",
    JLPT: "N5"
  },
  {
    term: "四",
    main: "four",
    sub: "よ よつ,シ",
    JLPT: "N5"
  },
  {
    term: "五",
    main: "five",
    sub: "いつ いつつ,ゴ",
    JLPT: "N5"
  },
  {
    term: "六",
    main: "six",
    sub: "む むつ,ロク",
    JLPT: "N5"
  },
  {
    term: "七",
    main: "seven",
    sub: "なな ななつ なの,シチ",
    JLPT: "N5"
  },
  {
    term: "八",
    main: "eight",
    sub: "や やつ よう,ハチ",
    JLPT: "N5"
  },
  {
    term: "九",
    main: "nine",
    sub: "ここの ここのつ,シチ",
    JLPT: "N5"
  },
  {
    term: "十",
    main: "ten",
    sub: "とお と そ,ジュウ",
    JLPT: "N5"
  },
  {
    term: "私",
    main: "I, me",
    sub: "わたし (formal, feminine)",
    JLPT: "N5"
  },
  {
    term: "日",
    main: "day, sun",
    sub: "ひ ニチ",
    JLPT: "N5"
  },
  {
    term: "家",
    main: "house, home, family, professional",
    sub: "いえ や うち カ ケ",
    JLPT: "N4"
  },
  {
    term: "文",
    main: "sentence, literature, style, art, decoration",
    sub: "ふみ あや ブン モン",
    JLPT: "N4"
  },
  {
    term: "政",
    main: "politics, government",
    sub: "まつりごと セイ",
    JLPT: "N3"
  },
  {
    term: "州",
    main: "state; province",
    sub: "す シュウ",
    JLPT: "N2"
  },
  {
    term: "中",
    main: "in, inside, middle, mean, center",
    sub: "なか うち あたる チュウ",
    JLPT: "N5"
  },
  {
    term: "川",
    main: "river; stream",
    sub: "かわ",
    JLPT: "N5"
  },
  {
    term: "学校",
    main: "school",
    sub: "がっこう",
    JLPT: "N5"
  },
];

function shuffle(array: any) {
  
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export const flashcards = {
  cards,
  shuffle
}