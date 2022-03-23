// List of all colors
const allColors = {
  reset: '\u001b[0m',
  colorDef: '1000;1000;1000',
  bgDef: '128;128;128',
  maroon: '128;0;0',
  'dark red': '139;0;0',
  brown: '165;42;42',
  firebrick: '178;34;34',
  crimson: '220;20;60',
  red: '255;0;0',
  tomato: '255;99;71',
  coral: '255;127;80',
  'indian red': '205;92;92',
  'light coral': '240;128;128',
  'dark salmon': '233;150;122',
  salmon: '250;128;114',
  'light salmon': '255;160;122',
  'orange red': '255;69;0',
  'dark orange': '255;140;0',
  orange: '255;165;0',
  gold: '255;215;0',
  'dark golden rod': '184;134;11',
  'golden rod': '218;165;32',
  'pale golden rod': '238;232;170',
  'dark khaki': '189;183;107',
  khaki: '240;230;140',
  olive: '128;128;0',
  yellow: '255;255;0',
  'yellow green': '154;205;50',
  'dark olive green': '85;107;47',
  'olive drab': '107;142;35',
  'lawn green': '124;252;0',
  'chart reuse': '127;255;0',
  'green yellow': '173;255;47',
  'dark green': '0;100;0',
  green: '0;128;0',
  'forest green': '34;139;34',
  lime: '0;255;0',
  'lime green': '50;205;50',
  'light green': '144;238;144',
  'pale green': '152;251;152',
  'dark sea green': '143;188;143',
  'medium spring green': '0;250;154',
  'spring green': '0;255;127',
  'sea green': '46;139;87',
  'medium aqua marine': '102;205;170',
  'medium sea green': '60;179;113',
  'light sea green': '32;178;170',
  'dark slate gray': '47;79;79',
  teal: '0;128;128',
  'dark cyan': '0;139;139',
  aqua: '0;255;255',
  cyan: '0;255;255',
  'light cyan': '224;255;255',
  'dark turquoise': '0;206;209',
  turquoise: '64;224;208',
  'medium turquoise': '72;209;204',
  'pale turquoise': '175;238;238',
  'aqua marine': '127;255;212',
  'powder blue': '176;224;230',
  'cadet blue': '95;158;160',
  'steel blue': '70;130;180',
  'corn flower blue': '100;149;237',
  'deep sky blue': '0;191;255',
  'dodger blue': '30;144;255',
  'light blue': '173;216;230',
  'sky blue': '135;206;235',
  'light sky blue': '135;206;250',
  'midnight blue': '25;25;112',
  navy: '0;0;128',
  'dark blue': '0;0;139',
  'medium blue': '0;0;205',
  blue: '0;0;255',
  'royal blue': '65;105;225',
  'blue violet': '138;43;226',
  indigo: '75;0;130',
  'dark slate blue': '72;61;139',
  'slate blue': '106;90;205',
  'medium slate blue': '123;104;238',
  'medium purple': '147;112;219',
  'dark magenta': '139;0;139',
  'dark violet': '148;0;211',
  'dark orchid': '153;50;204',
  'medium orchid': '186;85;211',
  purple: '128;0;128',
  thistle: '216;191;216',
  plum: '221;160;221',
  violet: '238;130;238',
  magenta: '255;0;255',
  orchid: '218;112;214',
  'medium violet red': '199;21;133',
  'pale violet red': '219;112;147',
  'deep pink': '255;20;147',
  'hot pink': '255;105;180',
  'light pink': '255;182;193',
  pink: '255;192;203',
  'antique white': '250;235;215',
  beige: '245;245;220',
  bisque: '255;228;196',
  'blanched almond': '255;235;205',
  wheat: '245;222;179',
  'corn silk': '255;248;220',
  'lemon chiffon': '255;250;205',
  'light golden rod yellow': '250;250;210',
  'light yellow': '255;255;224',
  'saddle brown': '139;69;19',
  sienna: '160;82;45',
  chocolate: '210;105;30',
  peru: '205;133;63',
  'sandy brown': '244;164;96',
  'burly wood': '222;184;135',
  tan: '210;180;140',
  'rosy brown': '188;143;143',
  moccasin: '255;228;181',
  'navajo white': '255;222;173',
  'peach puff': '255;218;185',
  'misty rose': '255;228;225',
  'lavender blush': '255;240;245',
  linen: '250;240;230',
  'old lace': '253;245;230',
  'papaya whip': '255;239;213',
  'sea shell': '255;245;238',
  'mint cream': '245;255;250',
  'slate gray': '112;128;144',
  'light slate gray': '119;136;153',
  'light steel blue': '176;196;222',
  lavender: '230;230;250',
  'floral white': '255;250;240',
  'alice blue': '240;248;255',
  'ghost white': '248;248;255',
  honeydew: '240;255;240',
  ivory: '255;255;240',
  azure: '240;255;255',
  snow: '255;250;250',
  black: '0;0;0',
  'dim gray': '105;105;105',
  grey: '128;128;128',
  'dark gray': '169;169;169',
  silver: '192;192;192',
  'light gray': '211;211;211',
  gainsboro: '220;220;220',
  'white smoke': '245;245;245',
  white: '255;255;255',
};

// list of all font styles
const allFontStyle = {
  res: ';0',
  def: ';10',
  bold: ';1',
  pale: ';2',
  italic: ';3',
  underlined: ';4',
  'comic Sans': ';9',
  'bold italic': ';1;3',
  'bold pale': ';1;2',
  reverse: ';7',
  hidden: ';8',
};

class Loc {
  // return center a text in columns
  static centerW(text) {
    return Number(process.stdout.columns / 2 - text.length).toFixed(0);
  }
  // return center a text in rows
  static centerH() {
    return Number(process.stdout.rows / 2).toFixed(0);
  }
  // return the right column of the text
  static right(text) {
    return Number(process.stdout.columns - text.length).toFixed(0);
  }
  // return the number of left location
  static left() {
    return 0;
  }
}

const setDefualtData = (obj) => {
  let thisFont = allFontStyle[obj?.font_style];
  let thisColor = allColors[obj?.color];
  let thisBgColor = allColors[obj?.bgColor];
  obj.defs = new Array();
  if (obj.right === undefined) {
    obj.right = 0;
  }
  if (obj.animation == undefined) {
    obj.animation = {
      right: 0,
      timer: 0,
    };
  } else {
    obj.defs.push('animation');
  }
  if (obj.top === undefined) {
    obj.top = 0;
  }
  if (thisFont === undefined) {
    obj.font_style = 'def';
  }
  if (thisColor === undefined && obj?.color?.slice(0, 4) !== 'rgb:') {
    obj.defs.push('color');
    obj.color = 'colorDef';
  }
  if (thisBgColor == undefined && obj?.bgColor?.slice(0, 4) !== 'rgb:') {
    obj.defs.push('bgColor');
    obj.bgColor = 'bgDef';
  }
  return obj;
};

/*
get the enter for a number
Args:
 - num

*/
const getEnter = (num) => {
  let enters = new String();
  for (let i = 0; i < num; i++) {
    enters += '\n';
  }
  return enters;
};

/*
get location of an object
Args:
 - obj

*/
const getLocation = (obj) => {
  return {
    top: getEnter(obj.top),
  };
};

/*
get the font object for the given name
Args:
 - name

*/
const getFont = (name) => {
  thisFont = allFontStyle[name];
  return thisFont;
};

/*
get color from all colors
Args:
 - name

*/
const getColor = (name) => {
  thisColor = allColors[name];
  if (name?.slice(0, 4) === 'rgb:') {
    return name.slice(4, name?.length);
  } else {
    return thisColor;
  }
};

const mainColor = (obj) => {
  obj = setDefualtData(obj);
  process.stdout.moveCursor(obj.right);
  process.stdout.cursorTo(0);
  if (obj.defs.includes('animation')) {
    return new Promise((resv) => {
      (function () {
        let i = 0;
        this.timer = setInterval(() => {
          if (i === obj.animation.right) {
            process.stdout.write(getColor('reset'));
            process.stdout.write('\n');
            i = 0;
            resv();
            clearInterval(this.timer);
          } else {
            function getSpace(n) {
              let tmp = '';
              for (let i = 0; i < n; i++) {
                tmp += ' ';
              }
              return tmp;
            }
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            if (obj.defs.includes('color') && obj.defs.includes('bgColor')) {
              process.stdout.write(
                getSpace(i) +
                  '\x1b[' +
                  getFont(obj?.font_style) +
                  'm' +
                  obj?.text
              );
            } else if (obj.defs.includes('bgColor')) {
              process.stdout.write(
                getSpace(i) +
                  '\033[38;2;' +
                  getColor(obj?.color) +
                  getFont(obj?.font_style) +
                  'm' +
                  obj?.text
              );
            } else if (obj.defs.includes('color')) {
              process.stdout.write(
                getSpace(i) +
                  '\033[48;2;' +
                  getColor(obj?.bgColor) +
                  getFont(obj?.font_style) +
                  'm' +
                  obj?.text
              );
            } else {
              process.stdout.write(
                getSpace(i) +
                  '\033[38;2;' +
                  getColor(obj?.color) +
                  getFont(obj?.font_style) +
                  ';48;2;' +
                  getColor(obj?.bgColor) +
                  'm' +
                  obj?.text
              );
            }
            i++;
          }
        }, obj.animation.timer);
      })();
    });
  } else {
    if (obj.defs.includes('color') && obj.defs.includes('bgColor')) {
      process.stdout.write(
        '\x1b[' + getFont(obj?.font_style) + 'm' + obj?.text + '\n'
      );
    } else if (obj.defs.includes('bgColor')) {
      process.stdout.write(
        '\033[38;2;' +
          getColor(obj?.color) +
          getFont(obj?.font_style) +
          'm' +
          obj?.text +
          '\n'
      );
    } else if (obj.defs.includes('color')) {
      process.stdout.write(
        '\033[48;2;' +
          getColor(obj?.bgColor) +
          getFont(obj?.font_style) +
          'm' +
          obj?.text +
          '\n'
      );
    } else {
      process.stdout.write(
        '\033[38;2;' +
          getColor(obj?.color) +
          getFont(obj?.font_style) +
          ';48;2;' +
          getColor(obj?.bgColor) +
          'm' +
          obj?.text +
          '\n'
      );
    }
  }
  process.stdout.write(getColor('reset'));
  process.stdout.clearLine();

  if (getLocation(obj).top[0]) {
    process.stdout.write(getLocation(obj).top);
  }
  process.stdout.cursorTo(0);
};

const cmd = {};

// reset all colors to their original state
cmd.reset = () => {
  process.stdout.write('\033c');
  process.stdout.write(allColors['reset']);
};
// reset all colors
cmd.resetColor = () => {
  process.stdout.write(allColors['reset']);
};
// set background color
cmd.setBackground = (color) => {
  if (color === undefined) {
    if (color?.slice(0, 4) !== 'rgb:') {
      color = 'colorDef';
    }
  }
  process.stdout.write('\033[48;2;' + getColor(color) + 'm');
};

// reset the console data
cmd.resetData = () => {
  process.stdout.write('\033c');
};

// log output to stdout
cmd.log = (...data) => {
  process.stdout.write(data.join('').toString() + '\n');
};

// print error to stderr
cmd.error = (...data) => {
  process.stderr.write(data.join('').toString() + '\n');
};

// set color
cmd.setColor = (color) => {
  if (color === undefined) {
    if (obj?.bgColor?.slice(0, 4) !== 'rgb:') {
      obj.color = 'colorDef';
    }
  }
  process.stdout.write('\033[38;2;' + getColor(color) + 'm');
};


module.exports = {
  cmd,
  style: mainColor,
  Loc,
};