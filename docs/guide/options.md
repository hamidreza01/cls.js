# Options

## text

```javascript{2}
style({
	text: "Example Text!"
});
```

What to log in command line / terminal?

| name | description  | unit   | example        |
|------|--------------|--------|----------------|
| text | What to log? | String | "Example Text!" |


## color

```javascript{2}
style({
	color: "purple",
	text: "Example Text!"
});
```

Color of text.

| name  | description   | unit                   | example  |
|-------|---------------|------------------------|----------|
| color | color of text | rgb:255;255;255 / name | "rgb:255;255;255" |

### Color Names

| name | result |
|------|--------|
| "maroon" | <span style="color:rgb(128,0,0)">Example Text!</span> |
| "dark red" | <span style="color:rgb(139,0,0)">Example Text!</span> |
| "brown" | <span style="color:rgb(165,42,42)">Example Text!</span> |
| "firebrick" | <span style="color:rgb(178,34,34)">Example Text!</span> |
| "crimson" | <span style="color:rgb(220,20,60)">Example Text!</span> |
| "red" | <span style="color:rgb(255,0,0)">Example Text!</span> |
| "tomato" | <span style="color:rgb(255,99,71)">Example Text!</span> |
| "coral" | <span style="color:rgb(255,127,80)">Example Text!</span> |
| "indian red" | <span style="color:rgb(205,92,92)">Example Text!</span> |
| "light coral" | <span style="color:rgb(240,128,128)">Example Text!</span> |
| "dark salmon" | <span style="color:rgb(233,150,122)">Example Text!</span> |
| "salmon" | <span style="color:rgb(250,128,114)">Example Text!</span> |
| "light salmon" | <span style="color:rgb(255,160,122)">Example Text!</span> |
| "orange red" | <span style="color:rgb(255,69,0)">Example Text!</span> |
| "dark orange" | <span style="color:rgb(255,140,0)">Example Text!</span> |
| "orange" | <span style="color:rgb(255,165,0)">Example Text!</span> |
| "gold" | <span style="color:rgb(255,215,0)">Example Text!</span> |
| "dark golden rod" | <span style="color:rgb(184,134,11)">Example Text!</span> |
| "golden rod" | <span style="color:rgb(218,165,32)">Example Text!</span> |
| "pale golden rod" | <span style="color:rgb(238,232,170)">Example Text!</span> |
| "dark khaki" | <span style="color:rgb(189,183,107)">Example Text!</span> |
| "khaki" | <span style="color:rgb(240,230,140)">Example Text!</span> |
| "olive" | <span style="color:rgb(128,128,0)">Example Text!</span> |
| "yellow" | <span style="color:rgb(255,255,0)">Example Text!</span> |
| "yellow green" | <span style="color:rgb(154,205,50)">Example Text!</span> |
| "dark olive green" | <span style="color:rgb(85,107,47)">Example Text!</span> |
| "olive drab" | <span style="color:rgb(107,142,35)">Example Text!</span> |
| "lawn green" | <span style="color:rgb(124,252,0)">Example Text!</span> |
| "chart reuse" | <span style="color:rgb(127,255,0)">Example Text!</span> |
| "green yellow" | <span style="color:rgb(173,255,47)">Example Text!</span> |
| "dark green" | <span style="color:rgb(0,100,0)">Example Text!</span> |
| "green" | <span style="color:rgb(0,128,0)">Example Text!</span> |
| "forest green" | <span style="color:rgb(34,139,34)">Example Text!</span> |
| "lime" | <span style="color:rgb(0,255,0)">Example Text!</span> |
| "lime green" | <span style="color:rgb(50,205,50)">Example Text!</span> |
| "light green" | <span style="color:rgb(144,238,144)">Example Text!</span> |
| "pale green" | <span style="color:rgb(152,251,152)">Example Text!</span> |
| "dark sea green" | <span style="color:rgb(143,188,143)">Example Text!</span> |
| "medium spring green" | <span style="color:rgb(0,250,154)">Example Text!</span> |
| "spring green" | <span style="color:rgb(0,255,127)">Example Text!</span> |
| "sea green" | <span style="color:rgb(46,139,87)">Example Text!</span> |
| "medium aqua marine" | <span style="color:rgb(102,205,170)">Example Text!</span> |
| "medium sea green" | <span style="color:rgb(60,179,113)">Example Text!</span> |
| "light sea green" | <span style="color:rgb(32,178,170)">Example Text!</span> |
| "dark slate gray" | <span style="color:rgb(47,79,79)">Example Text!</span> |
| "teal" | <span style="color:rgb(0,128,128)">Example Text!</span> |
| "dark cyan" | <span style="color:rgb(0,139,139)">Example Text!</span> |
| "aqua" | <span style="color:rgb(0,255,255)">Example Text!</span> |
| "cyan" | <span style="color:rgb(0,255,255)">Example Text!</span> |
| "light cyan" | <span style="color:rgb(224,255,255)">Example Text!</span> |
| "dark turquoise" | <span style="color:rgb(0,206,209)">Example Text!</span> |
| "turquoise" | <span style="color:rgb(64,224,208)">Example Text!</span> |
| "medium turquoise" | <span style="color:rgb(72,209,204)">Example Text!</span> |
| "pale turquoise" | <span style="color:rgb(175,238,238)">Example Text!</span> |
| "aqua marine" | <span style="color:rgb(127,255,212)">Example Text!</span> |
| "powder blue" | <span style="color:rgb(176,224,230)">Example Text!</span> |
| "cadet blue" | <span style="color:rgb(95,158,160)">Example Text!</span> |
| "steel blue" | <span style="color:rgb(70,130,180)">Example Text!</span> |
| "corn flower blue" | <span style="color:rgb(100,149,237)">Example Text!</span> |
| "deep sky blue" | <span style="color:rgb(0,191,255)">Example Text!</span> |
| "dodger blue" | <span style="color:rgb(30,144,255)">Example Text!</span> |
| "light blue" | <span style="color:rgb(173,216,230)">Example Text!</span> |
| "sky blue" | <span style="color:rgb(135,206,235)">Example Text!</span> |
| "light sky blue" | <span style="color:rgb(135,206,250)">Example Text!</span> |
| "midnight blue" | <span style="color:rgb(25,25,112)">Example Text!</span> |
| "navy" | <span style="color:rgb(0,0,128)">Example Text!</span> |
| "dark blue" | <span style="color:rgb(0,0,139)">Example Text!</span> |
| "medium blue" | <span style="color:rgb(0,0,205)">Example Text!</span> |
| "blue" | <span style="color:rgb(0,0,255)">Example Text!</span> |
| "royal blue" | <span style="color:rgb(65,105,225)">Example Text!</span> |
| "blue violet" | <span style="color:rgb(138,43,226)">Example Text!</span> |
| "indigo" | <span style="color:rgb(75,0,130)">Example Text!</span> |
| "dark slate blue" | <span style="color:rgb(72,61,139)">Example Text!</span> |
| "slate blue" | <span style="color:rgb(106,90,205)">Example Text!</span> |
| "medium slate blue" | <span style="color:rgb(123,104,238)">Example Text!</span> |
| "medium purple" | <span style="color:rgb(147,112,219)">Example Text!</span> |
| "dark magenta" | <span style="color:rgb(139,0,139)">Example Text!</span> |
| "dark violet" | <span style="color:rgb(148,0,211)">Example Text!</span> |
| "dark orchid" | <span style="color:rgb(153,50,204)">Example Text!</span> |
| "medium orchid" | <span style="color:rgb(186,85,211)">Example Text!</span> |
| "purple" | <span style="color:rgb(128,0,128)">Example Text!</span> |
| "thistle" | <span style="color:rgb(216,191,216)">Example Text!</span> |
| "plum" | <span style="color:rgb(221,160,221)">Example Text!</span> |
| "violet" | <span style="color:rgb(238,130,238)">Example Text!</span> |
| "magenta" | <span style="color:rgb(255,0,255)">Example Text!</span> |
| "orchid" | <span style="color:rgb(218,112,214)">Example Text!</span> |
| "medium violet red" | <span style="color:rgb(199,21,133)">Example Text!</span> |
| "pale violet red" | <span style="color:rgb(219,112,147)">Example Text!</span> |
| "deep pink" | <span style="color:rgb(255,20,147)">Example Text!</span> |
| "hot pink" | <span style="color:rgb(255,105,180)">Example Text!</span> |
| "light pink" | <span style="color:rgb(255,182,193)">Example Text!</span> |
| "pink" | <span style="color:rgb(255,192,203)">Example Text!</span> |
| "antique white" | <span style="color:rgb(250,235,215)">Example Text!</span> |
| "beige" | <span style="color:rgb(245,245,220)">Example Text!</span> |
| "bisque" | <span style="color:rgb(255,228,196)">Example Text!</span> |
| "blanched almond" | <span style="color:rgb(255,235,205)">Example Text!</span> |
| "wheat" | <span style="color:rgb(245,222,179)">Example Text!</span> |
| "corn silk" | <span style="color:rgb(255,248,220)">Example Text!</span> |
| "lemon chiffon" | <span style="color:rgb(255,250,205)">Example Text!</span> |
| "light golden rod yellow" | <span style="color:rgb(250,250,210)">Example Text!</span> |
| "light yellow" | <span style="color:rgb(255,255,224)">Example Text!</span> |
| "saddle brown" | <span style="color:rgb(139,69,19)">Example Text!</span> |
| "sienna" | <span style="color:rgb(160,82,45)">Example Text!</span> |
| "chocolate" | <span style="color:rgb(210,105,30)">Example Text!</span> |
| "peru" | <span style="color:rgb(205,133,63)">Example Text!</span> |
| "sandy brown" | <span style="color:rgb(244,164,96)">Example Text!</span> |
| "burly wood" | <span style="color:rgb(222,184,135)">Example Text!</span> |
| "tan" | <span style="color:rgb(210,180,140)">Example Text!</span> |
| "rosy brown" | <span style="color:rgb(188,143,143)">Example Text!</span> |
| "moccasin" | <span style="color:rgb(255,228,181)">Example Text!</span> |
| "navajo white" | <span style="color:rgb(255,222,173)">Example Text!</span> |
| "peach puff" | <span style="color:rgb(255,218,185)">Example Text!</span> |
| "misty rose" | <span style="color:rgb(255,228,225)">Example Text!</span> |
| "lavender blush" | <span style="color:rgb(255,240,245)">Example Text!</span> |
| "linen" | <span style="color:rgb(250,240,230)">Example Text!</span> |
| "old lace" | <span style="color:rgb(253,245,230)">Example Text!</span> |
| "papaya whip" | <span style="color:rgb(255,239,213)">Example Text!</span> |
| "sea shell" | <span style="color:rgb(255,245,238)">Example Text!</span> |
| "mint cream" | <span style="color:rgb(245,255,250)">Example Text!</span> |
| "slate gray" | <span style="color:rgb(112,128,144)">Example Text!</span> |
| "light slate gray" | <span style="color:rgb(119,136,153)">Example Text!</span> |
| "light steel blue" | <span style="color:rgb(176,196,222)">Example Text!</span> |
| "lavender" | <span style="color:rgb(230,230,250)">Example Text!</span> |
| "floral white" | <span style="color:rgb(255,250,240)">Example Text!</span> |
| "alice blue" | <span style="color:rgb(240,248,255)">Example Text!</span> |
| "ghost white" | <span style="color:rgb(248,248,255)">Example Text!</span> |
| "honeydew" | <span style="color:rgb(240,255,240)">Example Text!</span> |
| "ivory" | <span style="color:rgb(255,255,240)">Example Text!</span> |
| "azure" | <span style="color:rgb(240,255,255)">Example Text!</span> |
| "snow" | <span style="color:rgb(255,250,250)">Example Text!</span> |
| "black" | <span style="color:rgb(0,0,0)">Example Text!</span> |
| "dim gray" | <span style="color:rgb(105,105,105)">Example Text!</span> |
| "grey" | <span style="color:rgb(128,128,128)">Example Text!</span> |
| "dark gray" | <span style="color:rgb(169,169,169)">Example Text!</span> |
| "silver" | <span style="color:rgb(192,192,192)">Example Text!</span> |
| "light gray" | <span style="color:rgb(211,211,211)">Example Text!</span> |
| "gainsboro" | <span style="color:rgb(220,220,220)">Example Text!</span> |
| "white smoke" | <span style="color:rgb(245,245,245)">Example Text!</span> |
| "white" | <span style="color:rgb(255,255,255)">Example Text!</span> |

## bgColor

```javascript{2}
style({
	bgColor: "purple",
	text: "Example Text!"
});
```

Backgorund color of text.

| name  | description   | unit                   | example  |
|-------|---------------|------------------------|----------|
| bgColor | Backgorund color of text | rgb:255;255;255 / name | "rgb:255;255;255" |

### Color Names

(Names are same as [above](#color-names).)

## top

```javascript{2}
style({
	top: 30,
	text: "Example Text!"
});
```

Put some enter after printing text.
(1 equals 1 enter)

| name | description                        | unit        | example |
|------|------------------------------------|-------------|---------|
| top  | Put some enter after printing text | Enter chars | 30      |

## animation

```javascript{2-5}
style({
	animation: {
		right: 20,
		timer: 500,
	},
	text: "Example Text!"
});
```

Print text animatic; prints from left to where specified using `right` option at `timer` speed.

| name  | description                                 | unit        | example |
|-------|---------------------------------------------|-------------|---------|
| right | How many chars to go to right               | characters  | 20      |
| timer | How many miliseconds wait to the next print | miliseconds | 500     |

## font_style

```javascript{2}
style({
	font_style: "pale",
	text: "Example Text!"
});
```

Give some style to your text.

| name       | description   | unit   | example |
|------------|---------------|--------|---------|
| font_style | Style of text | String | "pale"   |

### Font Styles

|     name    |                              result                             |
|:-----------:|:---------------------------------------------------------------:|
| "bold"        | **Example Text!**                                               |
| "pale"        | <span style="color:rgba(0,0,0,0.20)">Example Text!</span>       |
| "italic"      | _Example Text!_                                                 |
| "underlined"  | <u>Example Text!</u>                                            |
| "comic Sans"  | <span style="text-decoration:line-through">Example Text!</span> |
| "bold italic" | **_Example Text!_**                                             |
| "bold pale"   | **<span style="color:rgba(0,0,0,0.20)">Example Text!</span>**   |
| "reverse"     | <span style="color:white;background:black">Example Text!</span> |
| "hidden"      |                                                                 |