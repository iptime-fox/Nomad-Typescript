// typescript #4.0~4.1

type Words = {
  [key: string]: string | string[];
};

class Dick {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  del(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  // showAll() {
  //   let dickArr = Object.keys(this.words);
  //   for (let i = 0; i < dickArr.length; i++) {
  //     let def = this.words[dickArr[i]];
  //     console.log(dickArr[i], def);
  //   }
  // }
  count() {
    let dickArr = Object.keys(this.words);
    console.log(dickArr.length);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const potato = new Word('potato', '하지감자');
const taco = new Word('taco', '멕시코 음식');

const dick = new Dick();

dick.add(kimchi);
dick.def('kimchi');
dick.add(potato);
dick.def('potato');
dick.add(taco);
dick.def('taco');
